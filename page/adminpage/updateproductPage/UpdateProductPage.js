import React, { useEffect, useState } from "react";
import styles from "./UpdateProductPage.module.scss";
import classnames from "classnames/bind";
import Navbar from "../../../component/navbar/Navbar";
import { useAppContext } from "../../../context/appContext";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

function UpdateProductPage({ name, email, password, id }) {
  const { currentUserUpdate, updateUserbyId } = useAppContext();
  const [userEdit, setUserEdit] = useState({
    ...currentUserUpdate,
    newPassword: "",
  });
  const navigate = useNavigate();
  const handleChangeValue = async (e) => {
    e.preventDefault();
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value,
    });
    console.log(userEdit);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (
        userEdit.newPassword === userEdit.password ||
        userEdit.newPassword === ""
      ) {
        await updateUserbyId({
          id: userEdit.id,
          name: userEdit.name,
          password: userEdit.password,
        });
        alert("Updated user successfully");
        navigate("/adminpage");
      } else {
        await updateUserbyId({
          id: userEdit.id,
          name: userEdit.name,
          password: userEdit.newPassword,
        });
        alert("Updated user successfully");
        navigate("/adminpage");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating user");
    }
  };

  return (
    <div
      className="container-xl px-4 mt-4"
      style={{ position: "fixed", zIndex: "200", top: "15%", left: "10%" }}
    >
      <Navbar />
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                alt=""
                style={{ objectFit: "cover", width: "200px", height: "200px" }}
              />
              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>

              <button className="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Your Email
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    disabled={true}
                    name="email"
                    value={currentUserUpdate.email}
                  />
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Your Name
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    name="name"
                    value={userEdit.name}
                    onChange={(e) => {
                      handleChangeValue(e);
                    }}
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      name="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                      Your Job
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      name="job"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Current Password
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="This is current password"
                    disabled={true}
                    name="password"
                    value={userEdit.password}
                    onChange={(e) => {
                      handleChangeValue(e);
                    }}
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      New Password
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter new password"
                      name="newPassword"
                      value={userEdit.newPassword}
                      onChange={(e) => {
                        handleChangeValue(e);
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">
                      Confirm New Password
                    </label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Corfirm new password"
                      name="confirmNewPassword"
                    />
                  </div>
                </div>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={(e) => {
                    handleUpdate(e);
                  }}
                >
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProductPage;
