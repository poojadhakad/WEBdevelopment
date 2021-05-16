import React from "react"
import { Link } from "gatsby"
import { FaArrowLeft, FaDownload, FaEye } from "react-icons/fa"

import thermo from "../content/bookss/tech/thermo.jpg"
import THERMO from "../pdf/techPdf/THERMO.pdf"
import Mp from "../content/bookss/tech/mp.jpg"
import PDF from "../pdf/techPdf/MP.pdf"
import maths from "../content/bookss/tech/maths.jpg"
import MATHS from "../pdf/techPdf/MATHS.pdf"
import Pe from "../content/bookss/tech/pe.jpg"
import pePDF from "../pdf/techPdf/PE.pdf"
import Em from "../content/bookss/tech/Fitzgerald.jpg"
import EmPDF from "../pdf/techPdf/Fitzgerald.pdf"
import lic from "../content/bookss/tech/Lic.jpg"
import LicPDF from "../pdf/techPdf/LIC.pdf"
import "../styles/book.scss"

import { Container, Row, Col, Card, Image } from "react-bootstrap"
import Layout from "../components/layout"

const Technology = () => {
  return (
    <Layout>

   
    <Container>
      <br />
      <br />
      <div className="card-deck">
        <Row>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Mp}
                className="card-img-top"
                alt="microprocessor book"
                fluid
              />
              <div className="row gap-1 p-1">
                <button  className="div6">
                  <a href={PDF} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button  className="div6">
                  <a href={PDF} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={Pe} className="card-img-top" alt="technology" fluid />
              <div className="row gap-1 p-1">
                <button variant="primary" className="div6">
                  <a href={pePDF} className="text-light ">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="info" className="div6">
                  <a href={pePDF} className="text-light" download>
                    DOWNLOAD BOOK  <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={Em} className="card-img-top" alt="Technology" fluid />
              <div className="row gap-1 p-1">
                <button variant="dark" className="div6">
                  <a href={EmPDF} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button  className="div6">
                  <a href={EmPDF} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={lic} className="card-img-top" alt="Technology" fluid />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={LicPDF} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={LicPDF} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={maths} className="card-img-top" alt="Technology" fluid />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={MATHS} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={MATHS} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={thermo} className="card-img-top" alt="Technology" fluid />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={THERMO} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={THERMO} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

         

     
         
        </Row>
        <p className="text-right"><Link to="/"><FaArrowLeft/>back to page</Link></p>

      </div>
      <br />
      <br />
    </Container>
    </Layout>
  )
}
export default Technology
