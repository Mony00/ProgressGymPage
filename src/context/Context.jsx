import { createContext, useContext, useEffect, useState } from "react";

const appContext = createContext();

function AppProvider({ children }) {
  const [zoomModal, setZoomModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImage, setCurrentImage] = useState(null);

  function handleZoom(image) {
    setZoomModal(true);
    setCurrentImage(image);
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listen for window resize event
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this runs on mount and unmount

  return (
    <appContext.Provider
      value={{
        zoomModal,
        handleZoom,
        windowWidth,
        currentImage,
        setZoomModal,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

//custom hook

function useZoom() {
  const context = useContext(appContext);
  if (context === undefined)
    throw new Error("Context API called outside of the provider");

  return context;
}

export { AppProvider, useZoom };
