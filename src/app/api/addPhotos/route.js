import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";
import Album from "../../../lib/models/album";

export async function POST(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const { url, albumName } = await req.json();

    // Validate inputs
    if (!url || typeof url !== "string") {
      throw new Error("The 'url' field must be a single photo URL string.");
    }
    if (!albumName) {
      throw new Error("The 'albumName' field is required.");
    }

    // Find the album by its name
    let album = await Album.findOne({ name: albumName });

    if (album) {
      // If the album exists, add the URL to the photos array if not already present
      if (!album.photos.includes(url)) {
        album.photos.push(url);
        await album.save();
      } else {
        throw new Error("The URL already exists in the album.");
      }
    } else {
      // If the album doesn't exist, create a new document
      album = await Album.create({
        name: albumName,
        photos: [url],
      });
    }

    // Respond with success
    return NextResponse.json({
      message: album.wasNew
        ? "Album created and photo added successfully"
        : "Photo added successfully",
      updatedAlbum: album,
      status: 200,
    });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
