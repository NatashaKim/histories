import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'p-p1'
]

const A_text = ({
  children,
  value,
  textStyle,
  type,
  title
}) => {

  const checkTextStyle = STYLES.includes(textStyle)
  ? textStyle : STYLES[0]

  return(
      <p className = {`Text ${checkTextStyle}`} type = {type}>
        {value}
      </p>
  )
}

export default A_text
