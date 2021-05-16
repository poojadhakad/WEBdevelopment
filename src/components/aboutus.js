import React from "react"
import { Carousel } from "react-bootstrap"
import { Link } from "gatsby"
import { FaBook, FaArrowLeft } from "react-icons/fa"
import library from "../content/lib22.jpg"
import lib from "../content/lb3.jpg"
import libr from "../content/cL1.jpg"
import "../styles/book.scss"

const AboutUs = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 photo" src={lib} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 photo" src={libr} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 photo"
            src={library}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <section className="aboutus-section">
        <div className="container py-5">
          <h2 className="heading text-center font-weight-bold mb-4">
            About Section... <span className="text-info">Things we Do!</span>
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-4 mb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <FaBook
                    className="text-info m-4"
                    style={{ fontSize: "4rem" }}
                  />
                  <h4 className=" text" style={{ fontWeight: "bolder" }}>
                    LIBRARY WEBSITE
                  </h4>
                  <div className="lead text">
                    A library is a collection of materials or media that are
                    accessible for use and not just for display. Library
                    buildings often provide quiet areas for studying, as well as
                    common areas for group study and collaboration, and may
                    provide public facilities for access to their electronic
                    resources and the Internet.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <FaBook
                    className="text-info m-4"
                    style={{ fontSize: "4rem" }}
                  />
                  <h4 className=" text" style={{ fontWeight: "bolder" }}>
                    OUR PROJECT
                  </h4>
                  <div className="lead text">
                  A free path to books is a online library which consists of
                    books according to the different sections like technology,
                    biography, computer science, fiction, self help, religion,
                    health, history etc. The user can browse the books according
                    to his need. The books can be viewed and downloaded by the
                    user as per his choice.

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <FaBook
                    className="text-info m-4"
                    style={{ fontSize: "4rem" }}
                  />
                  <h4 className=" text" style={{ fontWeight: "bolder" }}>
                    FREE PATH TO BOOKS
                  </h4>
                  <div className="lead text">
                   
                  This website will help you reach a large audience and it’s a
                    great way to share awesome books, as well as create a
                    community of like-minded individuals who also love to read.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-right">
          <Link to="/">
            <FaArrowLeft />
            back to page
          </Link>
        </p>
      </section>
    </>
  )
}

export default AboutUs
