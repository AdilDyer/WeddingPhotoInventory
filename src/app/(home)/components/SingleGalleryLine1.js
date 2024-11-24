// "use client";
// import React, { useEffect } from "react";

// const SingleGalleryLine1 = ({ albumName }) => {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const res = await fetch(`/api/album/${albumName}`);
//       const data = await res.json();
//       setPhotos(data.albumPhotos);
//     };
//     fetchPhotos();
//   }, []);

//   useEffect(() => {
//     const scrollers = document.querySelectorAll(".scroller");

//     // If a user hasn't opted in for reduced motion, then we add the animation
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation();
//     }

//     function addAnimation() {
//       scrollers.forEach((scroller) => {
//         // add data-animated="true" to every `.scroller` on the page
//         scroller.setAttribute("data-animated", "true");

//         // Make an array from the elements within `.scroller-inner`
//         const scrollerInner = scroller.querySelector(".scroller__inner");
//         if (scrollerInner) {
//           const scrollerContent = Array.from(scrollerInner.children);

//           // For each item in the array, clone it
//           // add aria-hidden to it
//           // add it into the `.scroller-inner`
//           scrollerContent.forEach((item) => {
//             const duplicatedItem = item.cloneNode(true);
//             duplicatedItem.setAttribute("aria-hidden", "true");
//             scrollerInner.appendChild(duplicatedItem);
//           });
//         }
//       });
//     }
//   }, []);

//   return (
//     <>
//       <div className="galleryLinesDiv">
//         <div id="container">
//           <div className="photobanner">
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//             <img
//               src="https://sc0.blr1.digitaloceanspaces.com/inline/864062-smykotglty-1515235963.jpg"
//               alt=""
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleGalleryLine1;

"use client";
import React, { useEffect, useState } from "react";

const SingleGalleryLine1 = ({ albumName }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(`/api/album/${albumName}`);
      const data = await res.json();
      console.log(data);
      setPhotos(data.albumPhotos);
    };
    fetchPhotos();
  }, [albumName]);

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

  return (
    <>
      <div className="galleryLinesDiv">
        <div id="container">
          <div className="photobanner">
            {photos?.slice(0, 8).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleGalleryLine1;
