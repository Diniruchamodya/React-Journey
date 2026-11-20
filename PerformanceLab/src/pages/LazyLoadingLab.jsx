import { lazy, Suspense, useState } from "react";

const PhotoGallery = lazy(() =>
  import("../components/PhotoGallery")
);

function LazyLoadingLab() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div>
      <h1>LensCraft Gallery</h1>

      <button onClick={() => setShowGallery(true)}>
  Show Gallery
</button>

      {showGallery && (
  <Suspense fallback={<p>Loading Gallery...</p>}>
    <PhotoGallery />
  </Suspense>
)}
    </div>
  );
}

export default LazyLoadingLab;