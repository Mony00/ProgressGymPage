import StartPage from "./pages/StartPage";
import DescriptionPage from "./components/DescriptionPage";
import Modal from "./components/Modal";
import { useZoom } from "./context/Context";
import Facilities from "./components/Facilities";
import Footer from "./components/Footer";
import Abonamente from "./components/Abonamente";
import QASEction from "./components/QASEction";
import ImageSlider from "./components/ImageSlider";

import React from "react";

function App() {
  const { zoomModal, windowWidth, currentImage } = useZoom();

  // helps when slow internet to reduce the initial loading time
  // const ImageSlider = React.lazy(() => import("./components/ImageSlider"));

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
          <img src={currentImage} alt="zoom-image" className="imageStyle" />
        </Modal>
      ) : null}

      <Facilities />
      <Abonamente />
      <QASEction />
      <Footer />
    </>
  );
}

export default App;
