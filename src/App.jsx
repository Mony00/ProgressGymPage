import StartPage from "./pages/StartPage";
import DescriptionPage from "./components/DescriptionPage";
import Modal from "./components/Modal";
import { useZoom } from "./context/Context";
import Facilities from "./components/Facilities";
// import ImageSlider from "./components/ImageSlider";

import React from "react";
import Abonamente from "./components/Abonamente";

function App() {
  const { zoomModal, windowWidth, currentImage } = useZoom();

  // helps when slow internet to reduce the initial loading time
  const ImageSlider = React.lazy(() => import("./components/ImageSlider"));

  const imageStyle = {
    width: "100%",
    maxWidth: "90vw",
    height: "auto",
    maxHeight: "90vh",
    objectFit: "contain", // Ensures the image fits within the div without being cropped
  };

  return (
    <>
      <StartPage />
      <DescriptionPage />
      <React.Suspense
        fallback={<div className="image-slider">Image slider loading...</div>}
      >
        <ImageSlider />
      </React.Suspense>

      {zoomModal && windowWidth > 940 ? (
        <Modal>
          <img src={currentImage} alt="zoom-image" style={imageStyle} />
        </Modal>
      ) : null}

      <Facilities />
      <Abonamente />
    </>
  );
}

export default App;
