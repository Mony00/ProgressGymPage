import { useEffect, useState } from "react";
import { useZoom } from "../context/Context";
import Abonament from "./Abonament";
import styles from "./Abonamente.module.css";

function Abonamente() {
  const { LoadData } = useZoom();
  const [abonamente, setAbonamente] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true); //flag to prevent state on unmounted components

      async function fetchData() {
        const data = await LoadData();

        if (loading) {
          setAbonamente(data.abonamente);
        }
      }
      fetchData();
      //cleanup fucntion
      console.log(loading);
      return () => setLoading(false);
    },
    [LoadData, abonamente, loading]
  );
  console.log(abonamente);

  return (
    <div>
      {abonamente.map((abonament) => (
        <Abonament key={abonament.abonament} abonament={abonament} />
      ))}
    </div>
  );
}

export default Abonamente;
