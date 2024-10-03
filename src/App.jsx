import StartPage from "./pages/StartPage";
import DescriptionPage from "./pages/DescriptionPage";

import Modal from "./components/Modal";
import { useZoom } from "./context/Context";

function App() {
  const { zoomModal, windowWidth, currentImage } = useZoom();

  return (
    <>
      <StartPage />
      <DescriptionPage />

      {zoomModal && windowWidth > 940 ? (
        <Modal>
          <img src={currentImage} alt="zoom-image" />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
