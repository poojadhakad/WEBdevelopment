import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Button } from "react-bootstrap"
import CProg from "../content/bookss/CS/c.jpg"
import cProg from "../pdf/csPdf/CProg.pdf"
import Gita from "../content/bookss/religion/gita.png"
import gita from "../pdf/gita.pdf"

import "../styles/books.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const ReligionPage = () => {
  return (
    <Layout>
          <Container>
      <div className="card-deck">
        <Row>
          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={CProg}
                className="card-img-top"
                alt="C Programming"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={cProg} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={cProg} className="text-light" download>
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
                src={Gita}
                className="card-img-top"
                alt="Bible"
                fluid
              />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={gita} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={gita} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
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

export default ReligionPage;
