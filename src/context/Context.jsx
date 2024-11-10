import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const appContext = createContext();

function AppProvider({ children }) {
  const [zoomModal, setZoomModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImage, setCurrentImage] = useState(null);
  const [abonamente, setAbonamente] = useState([]);
  const [loading, setLoading] = useState(false);
  const [translate, setTranslate] = useState(false);

  //importing/getting the data from the json file
  useEffect(
    function () {
      setLoading(true); //flag to prevent state on unmounted components

      async function fetchData() {
        const { default: data } = await import("../data/abonamente.json");

        if (loading) {
          setAbonamente(data.abonamente);
        }
      }
      fetchData();
      //cleanup fucntion
      // console.log(loading);
      return () => setLoading(false);
    },
    [abonamente, loading]
  );

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
        abonamente,
        translate,
        setTranslate,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

// proptypes validation
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

//custom hook
function useZoom() {
  const context = useContext(appContext);
  if (context === undefined)
    throw new Error("Context API called outside of the provider");

  return context;
}

export { AppProvider, useZoom };
