import React from "react"
import Layout from "../components/layout"
import { FaDownload, FaEye } from "react-icons/fa"
import { Link } from "gatsby"
import OurPast1 from "../content/bookss/history/OurPast1.jpg"
import ourPast1 from "../pdf/historyPdf/ourPast1.pdf"
import OurPast2 from "../content/bookss/history/OurPast2.jpg"
import ourPast2 from "../pdf/historyPdf/ourPast2.pdf"
import sapiens from "../content/bookss/history/sapiens.png"
import Sapiens from "../pdf/historyPdf/sapiens.pdf"
import gunOfAugust from "../content/bookss/history/gunOfAugust.jpg"
import GunOfAugust from "../pdf/historyPdf/The_Guns_of_August_The_Outbreak_of_World.pdf"
import discovery from "../content/bookss/history/DiscoveryOfIndia.jpg"
import Discovery from "../pdf/historyPdf/The-Discovery-Of-India-Jawaharlal-Nehru.pdf"
import struggle from "../content/bookss/history/struggle.jpg"
import Struggle from "../pdf/historyPdf/india'sStruggle.pdf"
import "../styles/book.scss"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const HistoryPage = () => {
  return (
    <Layout>
          <Container>
            <br/>
            <br/>
      <div className="card-deck">
        <Row>

        <Col md={3}>
            <Card className="mb-3">
              <Image
                src={OurPast1}
                className="card-img-top"
                alt="SHIVPURAN"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ourPast1} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ourPast1} className="text-light" download>
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
                src={sapiens}
                className="card-img-top"
                alt="Ramayan"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Sapiens} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Sapiens} className="text-light" download>
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
                src={struggle}
                className="card-img-top"
                alt="Gita"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Struggle} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Struggle} className="text-light" download>
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
                src={gunOfAugust}
                className="card-img-top"
                alt="Mahabharat"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={GunOfAugust} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={GunOfAugust} className="text-light" download>
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
                src={discovery}
                className="card-img-top"
                alt="Bible"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Discovery} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={Discovery} className="text-light" download>
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
                src={OurPast2}
                className="card-img-top"
                alt="quran"
                fluid
              />
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ourPast2} className="text-light">
                    VIEW BOOK <FaEye />
                  </a>
                  {` `}
                </button>
              </div>
              <div className="row gap-1 p-1">
                <button variant="danger" className="div6">
                  <a href={ourPast2} className="text-light" download>
                    DOWNLOAD BOOK <FaDownload />
                  </a>
                  {` `}
                </button>
              </div>
            </Card>
          </Col>

        </Row>
        <p className="text-right"><Link to="/">back to page</Link></p>
      </div>
      <br/>
    </Container>
    </Layout>
  )
}

export default HistoryPage;

