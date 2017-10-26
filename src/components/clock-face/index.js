import moment from 'moment'
import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.scss'

class ClockFace extends React.Component {
  render () {
    const hour = moment(this.props.timestamp).hour()
    const rotation = (360 * (hour % 12) / 12).toFixed(2)
    const ampm = hour < 12 ? 'am' : 'pm'

    return (
      <div>
        <div className={classes.clockFace}>
          <div
            className={classes.hourHand}
            style={{
              transform: `rotate(${rotation}deg)`
            }}
          />
          <div className={classes.minuteHand} />
          <div className={classes.ampm}>{ampm}</div>
        </div>
      </div>
    )
  }
}

ClockFace.propTypes = {
  timestamp: PropTypes.number.isRequired
}

export default ClockFace
