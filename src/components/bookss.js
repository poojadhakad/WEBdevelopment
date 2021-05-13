import React from "react"
import { Button } from "react-bootstrap"
import Tech from "../content/bookss/tech.jpg"
import Health from "../content/bookss/health.jpg"
import Self from "../content/bookss/self.jpg"
import HISTORY from "../content/bookss/hist.jpg"
import RELIGION from "../content/bookss/religion.jpg"
import COMPUTER from "../content/bookss/comp.jpg"
import FIC from "../content/bookss/fic.jpg"
import BIO from "../content/bookss/biog.jpg"
import "../styles/books.scss"

import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { Link } from "gatsby"

const Bookkss = () => {
  return (
    <Container>
      <div className="card-deck">
        <Row>
        <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Tech}
                className="card-img-top"
                alt="TECHNOLOGY"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>TECHNOLOGY</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/technology" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={FIC}
                className="card-img-top"
                alt="FICTION"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>FICTION</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/fiction" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={BIO}
                className="card-img-top"
                alt="BIOGRAPHY"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>BIOGRAPHY</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/biography" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Health}
                className="card-img-top"
                alt="HEALTH"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>HEALTH</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/health" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={Self}
                className="card-img-top"
                alt="SELF HELP"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>SELF HELP</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/selfHelp" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={HISTORY}
                className="card-img-top"
                alt="HISTORY"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>HISTORY</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/history" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={RELIGION}
                className="card-img-top"
                alt="RELIGION"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>RELIGION</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/religion" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="mb-3">
              <Image
                src={COMPUTER}
                className="card-img-top"
                alt="COMPUTER SCIENCE"
                fluid
              />
               <Card.Body>
                        <Card.Title> <h3>COMPUTER SCIENCE</h3></Card.Title>
                    </Card.Body> 
                    <Button variant="danger" className="but">
                  <Link to="/compSci" className="text-light">BROWSE</Link>
                  {` `}
                </Button>
            </Card>
          </Col>

        </Row>
      </div>
    </Container>
  )
}
export default Bookkss
