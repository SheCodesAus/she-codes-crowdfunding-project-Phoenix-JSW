import React from "react"
import Spinner from "../../Media/images/RunningDog.gif"
import"
import "./FullPageLoader.css"

function FullPageLoader() {
  return (
    <div className="fp-container">
      <img src={Spinner} className="fp-loader" alt="loading" />
    </div>
  )
}

export default FullPageLoader