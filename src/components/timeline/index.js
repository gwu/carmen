import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'

import ClockFace from 'components/clock-face'

import classes from './index.scss'

class Timeline extends React.Component {
  render () {
    const progress = (this.props.timestamp - this.props.startTs) /
      (this.props.endTs - this.props.startTs)

    return (
      <div className={classes.timeline}>
        <div
          className={classes.cursor}
          style={{ top: `${(10 + progress * 80).toFixed(2)}%` }}
        >
          <div className={classes.date}>
            {moment(this.props.timestamp).format('ddd MMM DD, YYYY')}
          </div>
          <div className={classes.clock}>
            <ClockFace timestamp={this.props.timestamp} />
          </div>
        </div>
      </div>
    )
  }
}

Timeline.propTypes = {
  startTs: PropTypes.number.isRequired,
  endTs: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired
}

export default Timeline
