import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import ge from "../content/bookss/fiction/GE.jpg"
import GE from "../pdf/fictionPdf/GE.pdf"
import mby from "../content/bookss/fiction/MBY.jpg"
import MBY from "../pdf/fictionPdf/MBY.pdf"
import tfios from "../content/bookss/fiction/tfios.jpg"
import TFIOS from "../pdf/fictionPdf/TFIOS.pdf"
import tgg from "../content/bookss/fiction/tgg.jpg"
import TGG from "../pdf/fictionPdf/tgg.pdf"
import tkr from "../content/bookss/fiction/TKR.jpg"
import TKR from "../pdf/fictionPdf/TKR.pdf"
import wh from "../content/bookss/fiction/WH.jpg"
import WH from "../pdf/fictionPdf/WH.pdf"
import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const Fiction = () => {
  return (
    <Layout>
          <Container>
      <div className="card-deck">
        <Row>

      

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={ge}
                className="card-img-top"
                alt="Ramayan"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={GE} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={GE} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>
       
          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={mby}
                className="card-img-top"
                alt="Mahabharat"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={MBY} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={MBY} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

       
          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={tfios}
                className="card-img-top"
                alt="Bible"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={TFIOS} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={TFIOS} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

       

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={tgg}
                className="card-img-top"
                alt="quran"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={TGG} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={TGG} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={tkr}
                className="card-img-top"
                alt="SHIVPURAN"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={TKR} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={TKR} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={wh}
                className="card-img-top"
                alt="Gita"
                fluid
              />
              <div className="row gap-3 p-3">
                <button variant="danger" className="div6">
                  <a href={WH} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={WH} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

        </Row>
        <p className="text-right"><Link to="/">back to page</Link></p>
      </div>
    </Container>
    </Layout>
  )
}

export default Fiction;


