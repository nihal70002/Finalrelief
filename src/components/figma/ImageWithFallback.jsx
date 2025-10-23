import React, { useState } from "react";

export function ImageWithFallback({ src, alt, className }) {
  const [error, setError] = useState(false);
  return (
    <img
      src={!error ? src : "https://via.placeholder.com/400x300?text=Image+Not+Found"}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
