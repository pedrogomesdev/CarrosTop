import Secondcar from "assets/images/secondcar.png";
import "./styles.css";
function ProductCard() {
  return (
    <>
      <div className="card-container">
        <div className="card-superior">
          <img src={Secondcar} alt="Carro secundario" />
        </div>
        <div className="card-inferior">
          <h5>Audi Supra TT</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <button className="btn bg-primary">COMPRAR</button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
