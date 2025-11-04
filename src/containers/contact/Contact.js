import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
// import email from "../../assets/lottie/email";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )} */}
            <div
              style={{
                width: "350px",
                height: "350px",
                border: "0.5rem solid #2779dd",
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 30px 30px -30px #0000001a",
                float: "right",
                marginLeft: "10px",
                marginTop: "10px",
                marginRight: "100px"
              }}
            >
              <img
                src={require("../../assets/images/profile.jpeg")}
                alt="Profile"
                className="profile-image"
                style={{
                  width: "350px", // Change this to adjust size
                  height: "350px", // Change this to adjust size
                  border: "0.5rem solid #2779dd",
                  borderRadius: "50%",
                  boxShadow: "0 30px 30px -30px #0000001a",
                  objectFit: "cover",
                  float: "right", // Floats to the right
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginRight: "100px",
                  backgroundColor: "transparent"
                }}
              />
            </div>

            {/* <img 
  src={require("../../assets/images/profile.jpeg")} 
  alt="Profile"
  className="profile-image" 
  style={{
    width: "150px",
    height: "150px",
    border: "0.5rem solid #2779dd",
    borderRadius: "50%",
    boxShadow: "0 30px 30px -30px #0000001a",
    objectFit: "cover",
    objectPosition: "center 20%",  // CHANGE THIS - shifts image up
    marginLeft: "20px",
    marginTop: "50px",
    backgroundColor: "transparent"
  }}
/> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
