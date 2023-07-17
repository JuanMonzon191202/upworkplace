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
    <>
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

      <section class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <h2>¿Qué es nuestra plataforma?</h2>
            <p>
              La Bolsa de Trabajo de la Universidad Politécnica de Tapachula es
              una plataforma en línea que conecta a estudiantes y egresados con
              empresas que buscan talento. Nuestra misión es facilitar la
              inserción laboral de nuestros alumnos y mejorar su empleabilidad.
            </p>
            <p>
              Las empresas registradas pueden publicar ofertas de empleo y
              acceder a un amplio pool de talento altamente capacitado en
              diversas áreas de estudio.
            </p>
          </div>
          <div class="col-md-6">
            <h2>Estadísticas</h2>
            <p>Algunas estadísticas interesantes sobre nuestra plataforma:</p>
            <ul>
              <li>Empresas registradas: 50</li>
              <li>Ofertas de empleo disponibles: 200</li>
              <li>Alumnos registrados: 1000</li>
              <li>Alumnos colocados en empleos: 800</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="bg-light text-center py-5">
        <h2>¿Cómo funciona?</h2>
        <p>
          1. Las empresas registradas publican sus ofertas de trabajo en la
          plataforma, especificando los requisitos y responsabilidades del
          puesto.
        </p>
        <p>
          2. Los alumnos y egresados pueden explorar las ofertas de empleo y
          postularse a aquellas que se ajusten a sus perfiles y objetivos
          profesionales.
        </p>
        <p>
          3. Las empresas revisan las solicitudes recibidas y contactan
          directamente a los candidatos preseleccionados para llevar a cabo el
          proceso de selección.
        </p>
        <p>
          4. Los alumnos seleccionados son contratados, y tanto ellos como las
          empresas pueden dar seguimiento al proceso desde la plataforma.
        </p>
      </section>

      <section class="container my-5">
        <h2>Beneficios para estudiantes y empresas</h2>
        <div class="row">
          <div class="col-md-6">
            <h4>Para estudiantes</h4>
            <ul>
              <li>
                Acceso a múltiples ofertas laborales de empresas reconocidas.
              </li>
              <li>
                Posibilidad de encontrar empleo acorde a su formación y
                expectativas.
              </li>
              <li>
                Oportunidad de adquirir experiencia y desarrollar habilidades
                profesionales.
              </li>
              <li>Asesoría y apoyo en el proceso de búsqueda de empleo.</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4>Para empresas</h4>
            <ul>
              <li>
                Acceso a una base de datos de candidatos altamente calificados.
              </li>
              <li>
                Publicación ilimitada de ofertas de trabajo en diferentes
                categorías.
              </li>
              <li>
                Facilidad para gestionar el proceso de selección y contacto con
                los candidatos.
              </li>
              <li>
                Promoción de su marca empleadora en el entorno universitario.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="container mt-5">
        <div class="row mt-5">
          <div class="col-md-6 offset-md-3">
            <div class="card shadow">
              <div class="card-body">
                <h5 class="card-title">Formulario de Contacto</h5>
                <form>
                  <div class="mb-3">
                    <label for="nombre" class="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="correo" class="form-label">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="correo"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="mensaje" class="form-label">
                      Mensaje
                    </label>
                    <textarea
                      class="form-control"
                      id="mensaje"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div class="col-md-6 mb-4">
            <div class="card h-100 shadow">
              <div class="card-body">
                <h5 class="card-title">Contacto</h5>
                <p>
                  <strong>Correo:</strong> contacto@uptapachula.edu.mx
                </p>
                <p>
                  <strong>Teléfono:</strong> (962) 689 0090 Ext. 1001-1021
                </p>
                <p>
                  <strong>Dirección:</strong> Carretera Tapachula - Puerto
                  Madero KM. 24 + 300. Tapachula, Chiapas
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card h-100 shadow">
              <div class="card-body">
                <h5 class="card-title">Redes Sociales</h5>
                <ul class="list-unstyled social-links d-flex">
                  <li class="me-8">
                    <a href="https://www.facebook.com/UniversidadPolitecnicaTapachula">
                      <i class="fab fa-facebook"></i> Facebook
                    </a>
                  </li>
                  <li class="me-3">
                    <a href="https://www.youtube.com/@universidadpolitecnicadeta883">
                      <i class="fab fa-youtube"></i> YouTube
                    </a>
                  </li>
                  <li class="me-3">
                    <a href="https://www.tiktok.com/@uptapachula/video/7103604509821144325?is_from_webapp=1&sender_device=pc&web_id=7255566081532151302">
                      <i class="fab fa-tiktok"></i> TikTok
                    </a>
                  </li>
                  <li class="me-3">
                    <a href="https://www.instagram.com/uptapachula/?hl=es-la">
                      <i class="fab fa-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
