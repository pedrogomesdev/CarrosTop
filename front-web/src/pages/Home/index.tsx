import Navbar from "components/Navbar";
import "./styles.css";
import Maincar from "assets/images/maincar.png";

function Home() {
  return (
    <>
      <Navbar></Navbar>
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
          <button className="btn bg-primary my-btn">ver catálogo</button>
          <p>Começe agora a navegar</p>
        </div>
      </div>
    </>
  );
}

export default Home;
