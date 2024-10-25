import "./style.css";

const Bottle = ({ bottle, selectHandle }) => {
  const { name, price, seller, ratings, stock, img } = bottle;

  return (
    <div className=" bottle-cart">
      <div>
        <img className="img" src={img} alt="Bottle" />
      </div>
      <div className="btl">
        <h3>Bottle Name :{name}</h3>

        <h4>Price : {price}</h4>

        <button className="btn" onClick={() => selectHandle(bottle)}>
          Buy now!
        </button>
      </div>
    </div>
  );
};

export default Bottle;
