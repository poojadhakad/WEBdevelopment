import React from "react"
import { FaAmazon, FaDailymotion, FaSafari } from "react-icons/fa"

const AboutUs = () => (
  <section className="aboutus-section">
    <div className="container py-5">
      <h2 className="heading text-center font-weight-bold mb-4">
        About Section... <span className="text-danger">Things we Do!</span>
      </h2>
      <div className="row justify-content-center">
        <div className="col-lg-4 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <FaAmazon
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Skill of the Century</h4>
              <div className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <FaAmazon
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Skill of the Century</h4>
              <div className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <FaAmazon
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Skill of the Century</h4>
              <div className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card shadow text-center">
            <div className="card-body">
              <FaAmazon
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Skill of the Century</h4>
              <div className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4" data-aos="fade-up">
          <div className="card shadow text-center">
            <div className="card-body">
              <FaSafari
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Skill of the Century</h4>
              <div className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4" data-aos="fade-up">
          <div className="card shadow text-center">
            <div className="card-body">
              <FaDailymotion
                className="text-danger m-4"
                style={{ fontSize: "4rem" }}
              />
              <h4>Skill of the Century</h4>
              <div className="lead">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutUs
