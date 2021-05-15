import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import rulesForLife from "../content/bookss/selfHelp/12rfl.jpg"
import RulesForLife from "../pdf/selfHelpPdf/12-Rules-for-Life.pdf"
import aNewEarth from "../content/bookss/selfHelp/ane.jpg"
import ANewEarth from "../pdf/selfHelpPdf/A new Earth.pdf"
import ikigai from "../content/bookss/selfHelp/ikigai.jpg"
import Ikigai from "../pdf/selfHelpPdf/ikigai-the-japanese-secret.pdf"
import monk from "../content/bookss/selfHelp/tmwshf.jpg"
import Monk from "../pdf/selfHelpPdf/Monk-Who-Sold-His-Ferrari.pdf"
import positiveThinking from "../content/bookss/selfHelp/popt.jpg"
import PositiveThinking from "../pdf/selfHelpPdf/PowerOfPositiveThinking.pdf"
import powerOfNow from "../content/bookss/selfHelp/tpon.jpg"
import PowerOfNow from "../pdf/selfHelpPdf/ThePowerOfNow.pdf"
import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const SelpHelp = () => {
  return (
    <Layout>
          <Container>
      <div className="card-deck">
        <Row>

      

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={aNewEarth}
                className="card-img-top"
                alt="Ramayan"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={ANewEarth} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={ANewEarth} className="text-light" download>
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
                src={monk}
                className="card-img-top"
                alt="Mahabharat"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={Monk} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={Monk} className="text-light" download>
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
                src={positiveThinking}
                className="card-img-top"
                alt="Bible"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={PositiveThinking} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={PositiveThinking} className="text-light" download>
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
                src={powerOfNow}
                className="card-img-top"
                alt="quran"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={PowerOfNow} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={PowerOfNow} className="text-light" download>
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
                src={rulesForLife}
                className="card-img-top"
                alt="SHIVPURAN"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={RulesForLife} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={RulesForLife} className="text-light" download>
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
                src={ikigai}
                className="card-img-top"
                alt="Gita"
                fluid
              />
              <div className="row gap-3 p-3">
                <button variant="danger" className="div6">
                  <a href={Ikigai} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Ikigai} className="text-light" download>
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

export default SelpHelp;


