import _ from 'lodash'
import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'

import Posts from 'components/posts'
import Timeline from 'components/timeline'

import classes from './index.scss'

class CarmenApp extends React.Component {
  constructor (props) {
    super(props)

    this.requestedAnimationFrame = false

    this.state = {
      timestamp: props.startTs
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentWillMount () {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll (event) {
    if (!this.requestedAnimationFrame) {
      this.requestedAnimationFrame = true
      window.requestAnimationFrame(() => {
        this.setState({
          timestamp: moment(this.props.startTs)
            .add(window.scrollY / this.props.pixelsPerHour, 'hours')
            .valueOf()
        })
        this.requestedAnimationFrame = false
      })
    }
  }

  render () {
    const totalHours = moment(this.props.endTs)
      .diff(moment(this.props.startTs), 'hours')

    return (
      <div
        className={classes.scrollContainer}
        style={{
          height: `${totalHours * this.props.pixelsPerHour + window.innerHeight}px`
        }}
      >
        <div className={classes.main}>
          <Posts
            timestamp={this.state.timestamp}
          />
        </div>
        <div className={classes.ticks}>
          {
            _.range(totalHours / 12)
              .map((i) => (
                <div key={i} style={{ height: `${this.props.pixelsPerHour * 12}px` }}>
                  —
                </div>
              ))
          }
        </div>
        <Timeline
          timestamp={this.state.timestamp}
          startTs={this.props.startTs}
          endTs={this.props.endTs}
        />
      </div>
    )
  }
}

CarmenApp.propTypes = {
  startTs: PropTypes.number,
  endTs: PropTypes.number,
  pixelsPerHour: PropTypes.number
}

CarmenApp.defaultProps = {
  startTs: moment('2017-10-25').valueOf(),
  endTs: moment('2018-10-25').valueOf(),
  pixelsPerHour: 15
}

export default CarmenApp
