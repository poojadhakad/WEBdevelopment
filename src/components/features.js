import React from "react"
import Image from "./images"

const Features = () => (
  <section className="features-section">
    <div className="container py-5">
      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h2 className="heading font-weight-bold">
            First Banasthali heading.{" "}
            <span className="text-danger">It’ll blow your mind.</span>
          </h2>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image
            className="card shadow mx-auto"
            filename="image-1.jpg"
            alt="Banasthali"
          />
        </div>
      </div>

      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7 order-md-2" data-aos="fade-up">
          <h2 className="heading font-weight-bold ">
            Oh yeah, it’s that good.{" "}
            <span className="text-danger">See for yourself.</span>
          </h2>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image
            className="card shadow mx-auto"
            filename="image-2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="row justify-content-center align-items-center py-5 mb-4">
        <div className="col-md-7" data-aos="fade-up">
          <h2 className="heading font-weight-bold ">
            And lastly, this one.{" "}
            <span className="text-danger">Checkmate.</span>
          </h2>
          <p>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="100">
          <Image
            className="card shadow mx-auto"
            filename="image-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>



    <div class="jumbotron">

<h1 class="display-3">Library Management System</h1>
<p class="lead">
  Project Details. This is a simple hero unit, a simple
  jumbotron-style component for calling extra attention to featured
  content or information.
</p>
<hr class="my-4" />
<p>
  It uses utility classes for typography and spacing to space content
  out within the larger container.
</p>
<p class="lead">
  <a
    class="btn btn-primary btn-lg rounded-pill"
    href="/"
    role="button"
  >
    Click
  </a>
</p>
</div>

  </section>



)

export default Features
