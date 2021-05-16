import React from "react"
import Layout from "../components/layout"
import { FaArrowLeft, FaDownload, FaEye } from "react-icons/fa"
import { Link } from "gatsby"
import etl from "../content/bookss/health/ETL.jpg"
import ETL from "../pdf/healthPdf/ETL.pdf"
import fr from "../content/bookss/health/FR.jpg"
import FR from "../pdf/healthPdf/FR.pdf"
import tcgtf from "../content/bookss/health/TCGTF.jpg"
import TCGTF from "../pdf/healthPdf/TCGTF.pdf"
import tfhb from "../content/bookss/health/TFHB.jpg"
import TFHB from "../pdf/healthPdf/TFHB.pdf"
import toc from "../content/bookss/health/TOC.jpg"
import TOC from "../pdf/healthPdf/TOC.pdf"
import wbba from "../content/bookss/health/WBBA.jpg"
import WBBA from "../pdf/healthPdf/WBBA.pdf"
import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const Health = () => {
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
                src={etl}
                className="card-img-top"
                alt="Ramayan"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ETL} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ETL} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>
       
          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={fr}
                className="card-img-top"
                alt="Mahabharat"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={FR} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={FR} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>
  

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={toc}
                className="card-img-top"
                alt="SHIVPURAN"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TOC} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TOC} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          
          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={tfhb}
                className="card-img-top"
                alt="quran"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TFHB} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {/* {` `} */}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6" >
                  <a href={TFHB} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3 card">
              <Image
                src={wbba}
                className="card-img-top"
                alt="Gita"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WBBA} className="text-light">VIEW BOOK <FaEye /></a>
               
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WBBA} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={tcgtf}
                className="card-img-top"
                alt="Bible"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TCGTF} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TCGTF} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>


        </Row>
        <p className="text-right"><Link to="/"><FaArrowLeft />back to page</Link></p>
      </div>
      <br />
    </Container>
    </Layout>
  )
}

export default Health;



