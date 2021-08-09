import React from "react"
import PropTypes from "prop-types"
import A_heading from "./A_heading"
import A_link from "./A_link"
import A_button from "./A_button"


class M_history_card extends React.Component {

  render () {

    let firstLineVisability = ""

    if (this.props.history.first_line == false) {
      firstLineVisability = "ButtonHidden"
    }

    let secondLineVisability = ""
    if (this.props.history.second_line == false) {
      secondLineVisability = "ButtonHidden"
    }

    let firstLineDisabled = "";
    let secondLineDisabled = ""

    let infoText = "";
    if (this.props.history.is_passed == true) {
      firstLineDisabled = true;
      secondLineDisabled = true;
      infoText = <div className = "Why_not_block"><img src = '/assets/icon_info.svg'/><div>Вы не можете выбрать данный курс, так как уже песещали его ранее. <a>Подробнее</a></div></div>
    }

    if (this.props.history.wrong_programm == true) {
      firstLineDisabled = true;
      secondLineDisabled = true;
      infoText = <div className = "Why_not_block"><img src = '/assets/icon_info.svg'/><div>Данный курс не относится к вашей образовательной программе. <a>Подробнее</a></div></div>
    }

    if (this.props.history.wrong_steam == true) {
      firstLineDisabled = true;
      secondLineDisabled = true;
      infoText = <div className = "Why_not_block"><img src = '/assets/icon_info.svg'/><div>Данный курс не относится к вашему потоку. <a>Подробнее</a></div></div>
    }

    let profile_text = "";
    if (this.props.history.profile_discipline == true) {
      profile_text = <span>&nbsp;/ Профильная дициплина</span>
    }

    return (
      <div className = {`Card_preview`}>
          <img src = {this.props.history.img_src}/>

          <div className = "Card_info">
            <div className = "Slash_info">
              <A_heading
              text = {this.props.history.lector}/>
              <A_heading
              text = {profile_text}/>
            </div>
            <A_link
            text = {this.props.history.title}
            link = {`/vars/${this.props.history.id}`}/>

            <div className = "Action_block">
              <div className = "Buttons">
                 <A_button
                  value = "1 линейка"
                  buttonStyle = "btn--line"
                  buttonState = {firstLineDisabled}
                  buttonVisability = {firstLineVisability}
                />
                <A_button
                 value = "2 линейка"
                 buttonStyle = "btn--line"
                 buttonState = {secondLineDisabled}
                 buttonVisability = {secondLineVisability}
                />
              </div>
              {infoText}
            </div>
           </div>
      </div>
    );
  }
}

export default M_history_card
