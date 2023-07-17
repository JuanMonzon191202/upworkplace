// import Navbar from "./components/Navbar";
import React from "react";
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
const color = "rgba(255, 255, 255, 0.60)";
const color2 = "rgba(147, 255, 219, 0.1)";

const Home = () => {
  return (
    <div className="container">
      <div
        id="carouselExampleDark1"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={img1}
              className="card-img-top d-block w-100 h-100"
              alt="..."
            />
            <div
              style={{ backgroundColor: color }}
              className="carousel-caption d-none d-md-block "
            >
              <h5>Linces</h5>
              <p>Innovación y tecnología al servicio de la sociedad</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={img2}
              className="card-img-top d-block w-100 h-100"
              alt="..."
            />
            <div
              style={{ backgroundColor: color }}
              className="carousel-caption d-none d-md-block"
            >
              <h5>Linces</h5>
              <p>Universidad Politécnica de Tapachula</p>
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundColor: "black" }}>
            <img
              src={img3}
              className="card-img-top d-block w-100 h-100"
              alt="..."
            />
            <div
              style={{ backgroundColor: color }}
              className="carousel-caption d-none d-md-block"
            >
              <h5>Universidad</h5>
              <p>
                Somos una Universidad Pública del Subsistema Federal de
                Universidades Tecnológicas y Politécnicas.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide="prev"
          style={{ backgroundColor: color2 }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark1"
          data-bs-slide="next"
          style={{ backgroundColor: color2 }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <br />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Información de la página</h5>
          <p className="text-justify">
            Al concluir los estudios, los egresados se enfrentan al desafío de
            encontrar un empleo acorde a su carrera, lo cual puede ser
            complicado. Para abordar esta situación, la página web de
            UPWorkplace ofrecerá una plataforma en línea segura y fácil de usar
            que permita a los egresados crear y mantener un perfil profesional,
            y a los empleadores buscar y seleccionar candidatos. El proyecto se
            enfocará en satisfacer la necesidad de inserción laboral de los
            estudiantes y egresados de la universidad, brindando beneficios a la
            comunidad universitaria.
          </p>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Contacto</h5>
          <p>Correo: contacto@uptapachula.edu.mx</p>
          <p>Teléfono: (962) 689 0090 Ext. 1001-1021</p>
          <p>
            Dirección: Carretera Tapachula - Puerto Madero KM. 24 + 300.
            Tapachula, Chiapas
          </p>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Redes Sociales</h5>
          <ul className="list-unstyled social-links d-flex">
            <li className="me-8">
              <a href="https://www.facebook.com/UniversidadPolitecnicaTapachula">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li className="me-3">
              <a href="https://www.youtube.com/@universidadpolitecnicadeta883">
                <FaYoutube /> YouTube
              </a>
            </li>
            <li className="me-3">
              <a href="https://www.tiktok.com/@uptapachula/video/7103604509821144325?is_from_webapp=1&sender_device=pc&web_id=7255566081532151302">
                <FaTiktok /> TikTok
              </a>
            </li>
            <li className="me-3">
              <a href="https://www.instagram.com/uptapachula/?hl=es-la">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <br />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Página web</h5>
          <p>
            Visita nuestra página web oficial:{" "}
            <a href="https://www.uptapachula.edu.mx/">
              UNIVERSIDAD POLITÉCNICA DE TAPACHULA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
