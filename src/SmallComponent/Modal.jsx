import React, { useState } from "react";

function Modal() {
    const [showModal, setShowModal] = useState(false);
    const [fullName, setFullName] = useState("");
    const [organization, setOrganization] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [organizationAddress, setOrganizationAddress] = useState("");
    const [reviewsList, setReviewsList] = useState([]);
  
    const handleFullNameChange = (event) => {
      setFullName(event.target.value);
    };
    const handleOrganizationChange = (event) => {
      setOrganization(event.target.value);
    };
    const handleOrganizationAddressChange = (event) => {
      setOrganization(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
  
    const handleReviewChange = (event) => {
      setReview(event.target.value);
    };
  
    const handleRatingClick = (selectedRating) => {
      setRating(selectedRating);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newReview = {
        fullName,
        organization,
        email,
        mobile,
        organizationAddress,
      };
      setReviewsList([...reviewsList, newReview]);
      setFullName("");
      setOrganization("");
      setEmail("");
      setMobile("");
      setOrganizationAddress("");
      setShowModal(false);
    };
  
    const handleWriteReviewClick = () => {
      setShowModal(true);
    };
  
    const handleCancel = () => {
      setShowModal(false);
    };
  return (
    <div>
        <div className="purches-button text-center mt-3">
                        <button
                          className="btn btn-primary mb-3"
                          onClick={handleWriteReviewClick}
                        >
                          PURCHASE
                        </button>
                      </div>
                      <div
                        className={`modal ${showModal ? "show d-block" : ""}`}
                        tabIndex="-1"
                        style={{ display: showModal ? "block" : "none" }}
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Your information</h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={handleCancel}
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                  <label
                                    htmlFor="fullName"
                                    className="form-label"
                                  >
                                    Full Name:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="Organization Name"
                                    className="form-label"
                                  >
                                    Organization Name:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="organization-name"
                                    value={organization}
                                    onChange={handleOrganizationChange}
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="fullName"
                                    className="form-label"
                                  >
                                    Email:
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="mobile"
                                    className="form-label"
                                  >
                                    Mobile:
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="mobile"
                                    value={mobile}
                                    onChange={handleMobileChange}
                                    required
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="Organization Address"
                                    className="form-label"
                                  >
                                    Organization Address:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="organization-address"
                                    value={organizationAddress}
                                    onChange={handleOrganizationAddressChange}
                                    required
                                  />
                                </div>

                                
                                
                                <button
                                  type="submit"
                                  className="btn btn-primary me-2"
                                >
                                  Submit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  onClick={handleCancel}
                                >
                                  Cancel
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
    </div>
  )
}

export default Modal