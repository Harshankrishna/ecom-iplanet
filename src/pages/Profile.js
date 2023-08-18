import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Profile() {
  //   const handleDragStart = (e) => e.preventDefault();
  const user = useSelector((state) => state.user);

  //   const images = user.pictures.map((picture) => (
  //     <img
  //       className="product__carousel--image"
  //       src={picture[0].url}
  //       onDragStart={handleDragStart}
  //       alt=""
  //     />
  //   ));
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              className="rounded-circle img-fluid"
              src={user.pictures[0].url ?? "./images/default_avatar.png"}
              style={{ height: "100%", objectFit: "cover" }}
              alt="profile_pic"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h1 fw-bold mb-3  ">My Profile</span>
              </div>

              <h5
                className="fw-normal my-4 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Your Profile account
              </h5>

              <h4>Full Name</h4>
              <p>{user.name}</p>
              <h4>Email Address</h4>
              <p>{user.email}</p>

              <Link to="/orders" className="btn btn-danger btn-block mt-3">
                My Orders
              </Link>
              <Link to="/cart" className="btn btn-primary btn-block mt-3">
                My Cart
              </Link>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Profile;
