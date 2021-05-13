import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

import Mp from "../content/bookss/mp.jpg"
import PDF from "../pdf/MP.pdf"

import Pe from "../content/bookss/pe.jpg"
import pePDF from "../pdf/PE.pdf"
import Em from "../content/bookss/Fitzgerald.jpg"
import EmPDF from "../pdf/Fitzgerald.pdf"
import lic from "../content/bookss/Lic.jpg"
import LicPDF from "../pdf/LIC.pdf"
import "../styles/books.scss"

import { Container, Row, Col, Card, Image } from "react-bootstrap"
import Layout from "../components/layout"

const Technology = () => {
  return (
    <Layout>

   
    <Container>
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
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={PDF} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={PDF} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              {/* <Card.Body>
                        <Card.Title> <h3>book</h3></Card.Title>
                    </Card.Body> */}
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={Pe} className="card-img-top" alt="mpmc book" fluid />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={pePDF} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={pePDF} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={Em} className="card-img-top" alt="mpmc book" fluid />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={EmPDF} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={EmPDF} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={lic} className="card-img-top" alt="mpmc book" fluid />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={LicPDF} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={LicPDF} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={Em} className="card-img-top" alt="mpmc book" fluid />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={EmPDF} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={EmPDF} className="text-light" download>
                    DOWNLOAD BOOK
                  </a>
                  {` `}
                </Button>
              </div>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image src={Em} className="card-img-top" alt="mpmc book" fluid />
              <div className="row gap-3 p-3">
                <Button variant="danger" className="div6">
                  <a href={EmPDF} className="text-light">
                    VIEW BOOK
                  </a>
                  {` `}
                </Button>
              </div>
              <div className="row gap-1 p-1">
                <Button variant="danger" className="div6">
                  <a href={EmPDF} className="text-light" download>
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
export default Technology
