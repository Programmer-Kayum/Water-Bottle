import "./style.css";

const Bottle = ({ bottle, selectHandle }) => {
  const { name, price, seller, ratings, stock, img } = bottle;

  return (
    <div className=" bottle-cart">
      <div>
        <img className="img" src={img} alt="Bottle" width="250" />
      </div>
      <div className="btl">
        <h3>Bottle Name :{name}</h3>
        <h3>seller : {seller}</h3>
        <h4>Price : {price}</h4>
        <h4>stock :{stock} </h4>
        <h4>ratings : {ratings}</h4>
        <button className="btn" onClick={() => selectHandle(bottle)}>
          Buy now!
        </button>
      </div>
    </div>
  );
};

export default Bottle;
