import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'h-h2'
]

const A_heading = ({
  children,
  type,
  headingStyle,
  text
}) => {

  let checkHeadingStyle = STYLES.includes(headingStyle)
  ? headingStyle : STYLES[0]

  return(
      <div className = {`Heading ${checkHeadingStyle}`} type = {type}>
        {text}
      </div>
  )
}

export default A_heading
