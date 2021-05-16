import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { FaArrowLeft, FaDownload, FaEye } from "react-icons/fa"
import bible from "../content/bookss/religion/bible.jpg"
import Bible from "../pdf/religionPdf/bible.pdf"
import Gita from "../content/bookss/religion/gita.jpg"
import gita from "../pdf/religionPdf/gita.pdf"
import Quran from "../content/bookss/religion/quran.jpg"
import quran from "../pdf/religionPdf/quran.pdf"
import Rama from "../content/bookss/religion/ram.jpg"
import ramayan from "../pdf/religionPdf/Ramayana.pdf"
import maha from "../content/bookss/religion/mahabharata.jpg"
import MAHA from "../pdf/religionPdf/Mahabharata.pdf"
import shiv from "../content/bookss/religion/shiv.jpg"
import SHIV from "../pdf/religionPdf/shiv-puran.pdf"
import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const ReligionPage = () => {
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
                src={shiv}
                className="card-img-top"
                alt="SHIVPURAN"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={SHIV} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={SHIV} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload/>
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>


       

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Quran}
                className="card-img-top"
                alt="quran"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={quran} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={quran} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload/>
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Rama}
                className="card-img-top"
                alt="Ramayan"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ramayan} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ramayan} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload/>
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={maha}
                className="card-img-top"
                alt="Mahabharat"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={MAHA} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={MAHA} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload/>
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

       
          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={bible}
                className="card-img-top"
                alt="Bible"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Bible} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Bible} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload/>
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Gita}
                className="card-img-top"
                alt="Gita"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={gita} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={gita} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload/>
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

export default ReligionPage;
