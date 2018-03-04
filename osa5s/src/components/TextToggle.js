import React from 'react'
import PropTypes from 'prop-types'

class TextToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    return (
      <div>
        <div style={hideWhenVisible}>
          <text onClick={this.toggleVisibility}>{this.props.buttonLabel}</text>
        </div>
        <div style={showWhenVisible} className="togglableContent">
          {this.props.children}
          <text onClick={this.toggleVisibility}>{this.props.buttonLabel}</text>
        </div>
      </div>
    )
  }
}

TextToggle.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default TextToggle