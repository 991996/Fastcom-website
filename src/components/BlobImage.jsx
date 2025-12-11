// BlobImage.jsx
import React, { useId } from "react";

/**
 * BlobImage Component
 * @param {string} src - The image path (import or URL)
 * @param {string} alt - Alt text
 * @param {string} className - Tailwind size classes "w-64 h-64"
 */
export default function BlobImage({
  src,
  alt = "",
  className = "w-64 h-64",
  blobPath,
}) {
  const id = useId(); // unique ID
  const clipId = `blob-clip-${id}`;

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
