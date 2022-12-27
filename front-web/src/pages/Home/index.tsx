import "./styles.css";
import Maincar from "assets/images/maincar.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="card-superior">
          <img src={Maincar} alt="Carro principal" />
          <div className="card-superior-conteudo">
            <h4>O carro perfeito para voce</h4>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="card-inferior">
          <Link to="/Catalog" className="link-listra">
            <button className="btn bg-primary my-btn">ver catálogo</button>
          </Link>

          <p>Começe agora a navegar</p>
        </div>
      </div>
    </>
  );
}

export default Home;
