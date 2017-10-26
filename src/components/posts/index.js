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
    const timeDifference = (post) => {
      return moment(post.date).diff(moment(this.props.timestamp), 'hours')
    }

    const isInFocus = (post) => {
      return Math.abs(timeDifference(post)) <= this.props.focusRadiusHours
    }

    const isInTransition = (post) => {
      const timeDiff = Math.abs(timeDifference(post))
      return (timeDiff > this.props.focusRadiusHours) &&
        (timeDiff <= this.props.focusRadiusHours + this.props.transitionWidthHours)
    }

    return (
      <div className={classes.postContainer}>
        {
          _(this.state.posts)
            .filter((post) => isInFocus(post) || isInTransition(post))
            .map(
              (post) => (
                <div
                  key={post.id}
                  className={classes.postWrapper}
                  style={{
                    transform: `translateY(
                      ${Math.sign(timeDifference(post)) * Math.pow(timeDifference(post), 2)}%
                    )`,
                    opacity: Math.abs(timeDifference(post)) > 12
                      ? 1 - ((Math.abs(timeDifference(post)) - 12) / 24)
                      : 1
                  }}
                >
                  <Post
                    data={post}
                    isInTransition={isInTransition(post)}
                    transitionDirection={this.state.transitionDirection}
                  />
                </div>
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
