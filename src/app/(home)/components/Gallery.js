"use client";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Gallery = ({ photos }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", "true");

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          // For each item in the array, clone it
          // add aria-hidden to it
          // add it into the `.scroller-inner`
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  }, []);

  // Function to divide the images into the respective containers
  const divideImages = (photos) => {
    const totalPhotos = photos?.length;
    const firstContainerLength = Math.ceil(totalPhotos / 6); // 1/6 of total images
    const secondContainerLength = Math.floor((totalPhotos * 2) / 6); // 2/6 of total images
    const thirdContainerLength = Math.ceil(totalPhotos / 6); // 1/6 of total images
    const fourthContainerLength = Math.floor((totalPhotos * 2) / 6); // 2/6 of total images

    // Divide the images into respective containers
    return {
      firstContainer: photos?.slice(0, firstContainerLength),
      secondContainer: photos?.slice(
        firstContainerLength,
        firstContainerLength + secondContainerLength
      ),
      thirdContainer: photos?.slice(
        firstContainerLength + secondContainerLength,
        firstContainerLength + secondContainerLength + thirdContainerLength
      ),
      fourthContainer: photos?.slice(
        firstContainerLength + secondContainerLength + thirdContainerLength
      ),
    };
  };

  // Get the divided images
  const { firstContainer, secondContainer, thirdContainer, fourthContainer } =
    divideImages(photos);

  return (
    <>
      <div className="galleryLinesDiv">
        <div id="container">
          <div className="photobanner">
            {firstContainer?.map((photo, index) => (
              <img key={index} src={photo} alt="" loading="lazy" />
            ))}
          </div>
        </div>

        <div id="container">
          <div className="photobanner">
            {secondContainer?.map((photo, index) => (
              <img key={index} src={photo} alt="" loading="lazy" />
            ))}
          </div>
        </div>

        <div id="container">
          <div className="photobanner">
            {thirdContainer?.map((photo, index) => (
              <img key={index} src={photo} alt="" loading="lazy" />
            ))}
          </div>
        </div>

        <div id="container">
          <div className="photobanner">
            {fourthContainer?.map((photo, index) => (
              <img key={index} src={photo} alt="" loading="lazy" />
              // <Button variant="light" className="smallDownloadButton">
              //   <i class="fa-solid fa-download"></i>
              // </Button>
            ))}
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Gallery;
