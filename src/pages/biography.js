import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import bo from "../content/bookss/biography/BO.jpg"
import BO from "../pdf/biographyPdf/BO.pdf"
import lwtr from "../content/bookss/biography/LWTR.jpg"
import LWTR from "../pdf/biographyPdf/LWTR.pdf"
import mo from "../content/bookss/biography/MO.jpg"
import MO from "../pdf/biographyPdf/MO.pdf"
import sj from "../content/bookss/biography/SJ.jpg"
import SJ from "../pdf/biographyPdf/SJ.pdf"
import tdoayg from "../content/bookss/biography/TDOAYG.jpg"
import TDOAYG from "../pdf/biographyPdf/TDOAYG.pdf"
import wof from "../content/bookss/biography/WOF.jpg"
import WOF from "../pdf/biographyPdf/WOF.pdf"
import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { FaDownload, FaEye,FaArrowLeft} from "react-icons/fa"

const BiographyPage = () => {
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
                src={lwtr}
                className="card-img-top"
                alt="Biography"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={LWTR} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={LWTR} className="text-light" download>
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
                src={mo}
                className="card-img-top"
                alt="Biography"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={MO} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={MO} className="text-light" download>
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
                src={sj}
                className="card-img-top"
                alt="Biography"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={SJ} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={SJ} className="text-light" download>
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
                src={tdoayg}
                className="card-img-top"
                alt="Biography"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TDOAYG} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={TDOAYG} className="text-light" download>
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
                src={wof}
                className="card-img-top"
                alt="Gita"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WOF} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WOF} className="text-light" download>
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
                src={bo}
                className="card-img-top"
                alt="Biography"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={BO} className="text-light">
                    VIEW BOOK <FaEye/>
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={BO} className="text-light" download>
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

export default BiographyPage;



