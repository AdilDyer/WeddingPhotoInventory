"use client";
import React, { useEffect, useState } from "react";
import Gallery from "@/app/(home)/components/Gallery";

const SpecificAlbum = ({ albumName }) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(`/api/album/${albumName}`);
      const data = await res.json();
      setPhotos(data.albumPhotos);
    };
    fetchPhotos();
  }, []);

  return (
    <div className="specificAlbumContainer">
      <h1 style={{ textAlign: "center" }}>
        <span style={{ color: "red" }}>&hearts;</span>
        {albumName}'s Moments <span style={{ color: "red" }}>&hearts;</span>
      </h1>
      <br />
      <Gallery photos={photos} />
    </div>
  );
};

export default SpecificAlbum;
