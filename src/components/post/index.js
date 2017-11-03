import React from 'react'
import PropTypes from 'prop-types'

import InlineVideo from 'components/inline-video'

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

  renderImage () {
    return (
      <div className={classes.image}>
        <img src={this.props.data.body} />
      </div>
    )
  }

  renderVideo () {
    return (
      <div className={classes.video}>
        <InlineVideo url={this.props.data.body} />
      </div>
    )
  }

  render () {
    return (
      <div className={classes.post}>
        <div
          className={classes.title}
          style={{ backgroundColor: this.props.data.color }}
        >
          {this.props.data.title}
        </div>
        {
          this.props.data.type === 'text' && this.renderText()
        }
        {
          this.props.data.type === 'html' && this.renderHtml()
        }
        {
          this.props.data.type === 'image' && this.renderImage()
        }
        {
          this.props.data.type === 'video' && this.renderVideo()
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
