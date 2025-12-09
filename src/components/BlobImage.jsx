// BlobImage.jsx
import React, { useId } from "react";

/**
 * BlobImage Component
 * @param {string} src - The image path (import or URL)
 * @param {string} alt - Alt text
 * @param {string} className - Tailwind size classes "w-64 h-64"
 */
export default function BlobImage({ src, alt = "", className = "w-64 h-64" }) {
  const id = useId(); // unique ID
  const clipId = `blob-clip-${id}`;

  const blobPath =
    "M34.8,-59.7C45.7,-54.1,55.3,-45.8,64.3,-35.4C73.3,-25,81.7,-12.5,83.2,0.9C84.7,14.3,79.5,28.6,70.5,39C61.6,49.5,48.9,56.1,36.5,63.7C24.2,71.3,12.1,79.8,-1.1,81.8C-14.3,83.7,-28.7,79.1,-41.8,72C-54.9,64.8,-66.7,55.1,-76,42.7C-85.3,30.2,-92,15.1,-89.2,1.6C-86.4,-11.9,-74.2,-23.8,-64,-34.6C-53.7,-45.4,-45.5,-55,-35.2,-60.9C-24.9,-66.9,-12.4,-69.2,-0.2,-68.8C12,-68.4,24,-65.4,34.8,-59.7Z";

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <path
            d={blobPath}
            transform="translate(100 100) scale(0.9)" // مهم حتى يظهر كامل
          />
        </clipPath>
      </defs>

      {/* <image
        href={src}
        alt={alt}
        width="200"
        height="200"
        clipPath={`url(#${clipId})`}
        preserveAspectRatio="xMidYMid meet"
      /> */}
      <foreignObject width="200" height="200" clipPath={`url(#${clipId})`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </foreignObject>
    </svg>
  );
}
