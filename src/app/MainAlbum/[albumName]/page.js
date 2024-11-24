"use client";
import React from "react";
import SpecificAlbum from "../components/SpecificAlbum/page";
const MainAlbum = ({ params }) => {
  const { albumName } = params;
  return (
    <div className="mainAlbumContainer">
      {albumName && <SpecificAlbum albumName={albumName} />}
    </div>
  );
};

export default MainAlbum;
