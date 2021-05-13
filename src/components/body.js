// import { Button } from "react-bootstrap"
import React from "react"
// import PDF from "../pdf/4.pdf"

const Body = () => {
 
  return (
    
    <>
      <div className="container py-5">
     

        <div className="row">
          {/* <div className="col-lg-4 col-md-6">
            <div className="row gap-3 p-2">
         <Button><a href={PDF} className="text-light">VIEW BOOK</a>{` `}</Button> 
         </div>
         <div className="row gap-3 p-2">
         <Button><a href={PDF} className="text-light" download>DOWNLOAD BOOK</a>{` `}</Button> 
          </div>
          </div> */}

        </div>
      </div>


    </>
  )
}
export default Body


export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          id
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 1200
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
