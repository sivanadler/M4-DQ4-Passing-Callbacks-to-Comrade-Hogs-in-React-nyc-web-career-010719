import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {
  constructor(props) {
    super(props)
  }

  panic = () => (<img className="exclamation" src={exclamation} alt="" />)


  render() {
    return(
      <div id={this.props.name} className="sheeple">
      {console.log(this.props)}
        {this.props.environment !== 'docile' ? this.panic() : null}
      </div>
    )
  }
}
