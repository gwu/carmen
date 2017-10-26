import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'

import PostService from 'services/post-service'
import Post from 'components/post'

import classes from './index.scss'

class Posts extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      posts: [],
      transitionDirection: 'down'
    }

    PostService.loadPosts().then((posts) => {
      this.setState({
        posts: posts
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.timestamp !== this.props.timestamp) {
      if (nextProps.timestamp > this.props.timestamp) {
        this.setState({ transitionDirection: 'down' })
      } else {
        this.setState({ transitionDirection: 'up' })
      }
    }
  }

  render () {
    const isInFocus = (post) => {
      const timeDifference =
        Math.abs(moment(post.date).diff(moment(this.props.timestamp), 'hours'))
      return timeDifference <= this.props.focusRadiusHours
    }

    const isInTransition = (post) => {
      const timeDifference =
        Math.abs(moment(post.date).diff(moment(this.props.timestamp), 'hours'))
      return (timeDifference > this.props.focusRadiusHours) &&
        (timeDifference <= this.props.focusRadiusHours + this.props.transitionWidthHours)
    }

    return (
      <div className={classes.postContainer}>
        {
          _(this.state.posts)
            .filter((post) => isInFocus(post) || isInTransition(post))
            .map(
              (post) => (
                <Post
                  key={post.id}
                  data={post}
                  isInTransition={isInTransition(post)}
                  transitionDirection={this.state.transitionDirection}
                />
              )
            )
            .value()
        }
      </div>
    )
  }
}

Posts.propTypes = {
  timestamp: PropTypes.number.isRequired,
  focusRadiusHours: PropTypes.number,
  transitionWidthHours: PropTypes.number
}

Posts.defaultProps = {
  focusRadiusHours: 24,
  transitionWidthHours: 12
}

export default Posts
