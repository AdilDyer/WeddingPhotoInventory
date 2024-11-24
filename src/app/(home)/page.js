import React from "react";
import SingleGalleryLine1 from "@/app/(home)/components/SingleGalleryLine1";
import SingleGalleryLine2 from "./components/SingleGalleryLine2";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <div className="heading">
        <h1>Shimpi</h1>
        <h1>Weds</h1>
        <h1>Abhishek</h1>
        <p style={{ margin: 0, textDecoration: "underline  0.01rem brown " }}>
          23rd November 2024
        </p>
      </div>

      <div className="imagesBar" style={{ backgroundColor: "#eaac8b" }}>
        <div className="titleDiv">
          <Link href={"/MainAlbum/Engagement"}>
            <Button variant="warning" className="btn btn-lg">
              Engagement &nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </Link>
        </div>
        <SingleGalleryLine1 albumName={"Engagement"}></SingleGalleryLine1>
      </div>
      <div className="imagesBar" style={{ backgroundColor: "#e56b6f" }}>
        <div className="titleDiv">
          <Link href={"/MainAlbum/Pre-Wedding"}>
            <Button variant="warning" className="btn btn-lg">
              Pre-Wedding &nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </Link>
        </div>
        <SingleGalleryLine2 albumName={"Pre-Wedding"}></SingleGalleryLine2>
      </div>
      <div className="imagesBar" style={{ backgroundColor: "#b56576" }}>
        <div className="titleDiv">
          <Link href={"/MainAlbum/Tilak"}>
            <Button variant="warning" className="btn btn-lg">
              Tilak &nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </Link>
        </div>
        <SingleGalleryLine1 albumName={"Tilak"}></SingleGalleryLine1>
      </div>
      <div className="imagesBar" style={{ backgroundColor: "#6d597a" }}>
        <div className="titleDiv">
          <Link href={"/MainAlbum/Haldi & Mehndi"}>
            <Button variant="warning" className="btn btn-lg">
              Haldi & Mehndi&nbsp;{" "}
              <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </Link>
        </div>
        <SingleGalleryLine2 albumName={"Haldi & Mehndi"}></SingleGalleryLine2>
      </div>
      <div className="imagesBar" style={{ backgroundColor: "#355070" }}>
        <div className="titleDiv">
          <Link href={"/MainAlbum/Wedding"}>
            <Button variant="warning" className="btn btn-lg">
              Wedding&nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>
          </Link>
        </div>
        <SingleGalleryLine2 albumName={"Wedding"}></SingleGalleryLine2>
      </div>
    </div>
  );
};

export default Home;
