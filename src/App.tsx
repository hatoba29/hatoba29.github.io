import React from "react"
import { render } from "react-dom"
import "./common.scss"

function Main() {
  return (
    <>
      <h1>
        welcome to <span>nishi-ogikubo</span>
      </h1>
      <h2>currently under construction...</h2>
      <br />
      <p>
        <a href="https://github.com/hatoba29">go to profile</a>
      </p>
    </>
  )
}

render(<Main />, document.getElementById("App"))
