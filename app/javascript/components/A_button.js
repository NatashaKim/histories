import React from "react"
import PropTypes from "prop-types"


const STYLES = [
  'btn--secondary',
  'btn--primary',
  'btn--line'
]

const STATES = [
  false,
  true,
]

class A_button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.toggleClass= this.toggleClass.bind(this);
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
      let checkButtonStyle = STYLES.includes(this.props.buttonStyle)
      ? this.props.buttonStyle : STYLES[0]
      let checkButtonState = STATES.includes(this.props.buttonState)
      ? this.props.buttonState : STATES[0]

        return (

            <button className = {`btn ${checkButtonStyle} ${this.state.active ? 'btn-active': null}`} onClick = {this.toggleClass} disabled={checkButtonState} >
              <div>{this.props.value}</div>
            </button>
        )
  }
}

export default A_button
