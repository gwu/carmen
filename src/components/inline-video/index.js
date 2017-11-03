import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.scss'

class InlineVideo extends React.Component {
  render () {
    return (
      <video className={classes.video} loop autoPlay>
        <source src={this.props.url} />
      </video>
    )
  }
}

InlineVideo.propTypes = {
  url: PropTypes.string.isRequired
}

export default InlineVideo
