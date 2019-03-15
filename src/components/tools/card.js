import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card({ description, children }) {
  return (
    <>
      <div className="card is-tool-card">
        <div className="card-content has-text-centered">
          {children}
        </div>
      </div>
      {description ? (
        <div className="margin-top-5 has-padding-5">
          <FontAwesomeIcon
            icon="comment-alt"
            color="#8E9FA9"
            fixedWidth
            flip="horizontal"
          />{" "}
          <i>{description}</i>
        </div>
      ) : (
          <div />
        )}
    </>
  )
}

export default Card
