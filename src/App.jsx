import StartPage from "./pages/StartPage";
import DescriptionPage from "./pages/DescriptionPage";

import Modal from "./components/Modal";
import { useZoom } from "./context/Context";
import Facilities from "./pages/Facilities";

function App() {
  const { zoomModal, windowWidth, currentImage } = useZoom();
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

      {zoomModal && windowWidth > 940 ? (
        <Modal>
          <img src={currentImage} alt="zoom-image" style={imageStyle} />
        </Modal>
      ) : null}

      <Facilities />
    </>
  );
}

export default App;
