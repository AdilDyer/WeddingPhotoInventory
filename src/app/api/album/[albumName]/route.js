import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/db";
import Album from "../../../../lib/models/album";

export async function GET(req, { params }) {
  try {
    // Connect to the database
    await dbConnect();
    let albumName = params.albumName;
    // Find the album by name
    let album = await Album.findOne({ name: albumName });

    // If the album does not exist, create a new one
    if (!album) {
      album = await Album.create({
        name: albumName,
        photos: [],
      });
      return NextResponse.json({
        message: "Album created successfully.",
        albumPhotos: album.photos,
        status: 200,
      });
    }

    // If the album exists, return the photos array
    return NextResponse.json({
      message: "Album found.",
      albumName: album.name,
      albumPhotos: album.photos,
      status: 200,
    });
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
