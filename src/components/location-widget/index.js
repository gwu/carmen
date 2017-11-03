import React from 'react'
import PropTypes from 'prop-types'

import classes from './index.scss'

const googleMapsApiKey = 'AIzaSyCREDdrOis2EQST3NSUr-cRez_7oLke9eA'

class LocationWidget extends React.Component {
  render () {
    const host = 'maps.googleapis.com'
    const path = '/maps/api/staticmap'
    const size = '200x200'
    const params = `center=${window.encodeURIComponent(this.props.location)}&zoom=10&size=${size}&maptype=roadmap`
    const url = `https://${host}${path}?${params}&key=${googleMapsApiKey}`

    return (
      <div className={classes.container}>
        <img src={url} />
      </div>
    )
  }
}

LocationWidget.propTypes = {
  location: PropTypes.string.isRequired
}

export default LocationWidget
