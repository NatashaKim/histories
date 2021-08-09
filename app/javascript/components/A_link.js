import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/ui-kit.scss'
import '../../assets/stylesheets/colors.scss'



const STYLES = [
  'h-h1'
]

const A_link = ({
  children,
  type,
  linkStyle,
  text,
  link
}) => {

  let checkLinkStyle = STYLES.includes(linkStyle)
  ? linkStyle : STYLES[0]

  return(
      <a className = {`Link ${checkLinkStyle}`} type = {type} href={link}>
        {text}
      </a>
  )
}

export default A_link
