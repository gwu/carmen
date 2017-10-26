import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './index.scss'

class Post extends React.Component {
  renderText () {
    return (
      <div className={classes.text}>{this.props.data.body}</div>
    )
  }

  renderHtml () {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.data.body }} />
    )
  }

  render () {
    return (
      <div
        className={
          classnames({
            [classes.post]: true,
            [classes.inTransition]: this.props.isInTransition
          })
        }
      >
        <div className={classes.title}>{this.props.data.title}</div>
        {
          this.props.data.type === 'text' && this.renderText()
        }
        {
          this.props.data.type === 'html' && this.renderHtml()
        }
      </div>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  isInTransition: PropTypes.bool,
  transitionDirection: PropTypes.string
}

Post.defaultProps = {
  isInTransition: false
}

export default Post
