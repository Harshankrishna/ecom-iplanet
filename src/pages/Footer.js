import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../assets/Apple-logo.png";

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshankrishna-k-v/"
            className="me-4 text-reset"
            target="blank"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/Harshankrishna/ecom-iplanet"
            className="me-4 text-reset"
            target="blank"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={logo} alt="" width={"30px"} height={"30px"} />
                <MDBIcon className="me-3" />
                iPlanet
              </h6>
              <p>
                We provide you with millions of choices, decide for yourself.Buy
                now or just take a look.!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/category/iwatch" className="text-reset">
                  iWatch
                </a>
              </p>
              <p>
                <a href="/category/iphones" className="text-reset">
                  iPhones
                </a>
              </p>
              <p>
                <a href="/category/imac" className="text-reset">
                  iMac
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/cart" className="text-reset">
                  Cart
                </a>
              </p>
              <p>
                <a href="/orders" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="/category/all" className="text-reset">
                  Category
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                TamilNadu, India.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                harshankrishdev003@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 80566 19487
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://harshankrishna.netlify.app/"
        >
          Harshankrishna
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
