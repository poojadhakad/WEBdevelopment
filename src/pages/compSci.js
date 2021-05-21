import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { FaArrowLeft, FaDownload, FaEye } from "react-icons/fa"
import CProg from "../content/bookss/CS/c.jpg"
import cProg from "../pdf/csPdf/CProg.pdf"
import aI from "../content/bookss/CS/AI.jpg"
import AI from "../pdf/csPdf/AI.pdf"
import hcj from "../content/bookss/CS/html_css_java.jpg"
import HCJ from "../pdf/csPdf/HCJ.pdf"
import excel from "../content/bookss/CS/excel.jpg"
import EXCEL from "../pdf/csPdf/EXCEL.pdf"
import wd from "../content/bookss/CS/WD.jpg"
import WD from "../pdf/csPdf/WD.pdf"
import html5 from "../content/bookss/CS/html5.jpg"
import HTML5 from "../pdf/csPdf/html.pdf"

import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const Computer = () => {
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
                src={CProg}
                className="card-img-top"
                alt="Computer"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={cProg} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={cProg} className="text-light" download>
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
                src={hcj}
                className="card-img-top"
                alt="Computer"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={HCJ} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={HCJ} className="text-light" download>
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
                src={aI}
                className="card-img-top"
                alt="Computer"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={AI} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={AI} className="text-light" download>
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
                src={excel}
                className="card-img-top"
                alt="Computer"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={EXCEL} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={EXCEL} className="text-light" download>
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
                src={wd}
                className="card-img-top"
                alt="Computer"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WD} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WD} className="text-light" download>
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
                src={html5}
                className="card-img-top"
                alt="Computer"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={HTML5} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={HTML5} className="text-light" download>
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
          
    </Container>
    </Layout>
  )
}

export default Computer;
