import React from "react";
import "../Capi.css";
import data from "../data";

function Capi() {
  const [capi, setCapi] = React.useState({ url: "https://i.pinimg.com/564x/e9/72/b6/e972b6a0fee53b2bfff8d1618ccc0739.jpg" });

  const [allCapis, setAllCapis] = React.useState(data);

  function getRandomCapi() {
    const CapiArray = allCapis.data.capis;
    const RandomNumber = Math.floor(Math.random() * CapiArray.length);
    const CapiUrl = CapiArray[RandomNumber].url;
    setCapi(prevCapi => ({ url: CapiUrl }));
  }

  return (
    <div className='capi'>
      <button onClick={getRandomCapi} className='capi__button'>
        Random cute Capi 🤎
      </button>
      <img className='capi__image' alt='Capivara' src={capi.url} />
    </div>
  );
}

export default Capi;
