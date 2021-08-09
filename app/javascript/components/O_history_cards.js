import React from "react"
import PropTypes from "prop-types"
import M_history_card from "./M_history_card"

class O_history_cards extends React.Component {

  render () {
    return (
      <div>
        {this.props.histories.map(history => (
          <M_history_card
            key = {history.id}
            history = {history}
          />
        ))}
      </div>
    );
  }
}

export default O_history_cards
