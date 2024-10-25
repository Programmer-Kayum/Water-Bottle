import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import "./style.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const [selected, setSelected] = useState([]);

  const selectHandle = (bottle) => {
    console.log(bottle);
    const newCart = [...selected, bottle];
    setSelected(newCart);
  };

  return (
    <div>
      <div>
        <h2 className="btl">Available Bottles Now: {bottles.length}</h2>
        <h3 className="btl">Selected Bottle: {selected.length}</h3>
      </div>

      <div className="bottle-box">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            selectHandle={selectHandle}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
