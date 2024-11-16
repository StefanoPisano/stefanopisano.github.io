/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

const Divider = ({label}) => {

  return (
      <div className="divider">
          <div style={{textAlign:"center", fontSize:"2em", letterSpacing:"30px", margin:"50px 0"}}>...</div>
          <span className="label">{label}</span>
      </div>
  )
}

export default Divider
