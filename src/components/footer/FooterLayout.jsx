import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const FooterLayout = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-white">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conéctate con nosotras en las redes sociales:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                #ArmaTuStock
              </h6>
              <p>
                Creamos soluciones tecnológicas innovadoras para resolver
                los desafíos del mundo actual.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
              <p>
                <a href="#!" className="text-reset">
                  Quienes Somos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Prensa
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Proveedores
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Inversores
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Enlaces útiles</h6>
              <p>
                <a href="#!" className="text-reset">
                  Precios
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ajustes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Pedidos
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ayuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Gral. Paz 576, T4000 SM de Tucumán, Tucuman
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-2" />
                info@armatustock.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-2" /> + 54 381 567 8800
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          tustock.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default FooterLayout;
