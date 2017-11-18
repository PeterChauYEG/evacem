import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import FontAwesome from 'react-fontawesome'

class Map extends Component {
  render () {
    const center = {
      lat: 53.50870,
      lng: -113.53150
    }
    const config = {
      key: 'AIzaSyBqzqrvJK255PqCzP8SNVmORryt8x6tLc4'
    }
    const marker = {
      lat: 53.508704,
      lng: -113.535068
    }
    const type = 'hybrid'
    const zoom = 15

    return (
      <GoogleMapReact
        bootstrapURLKeys={config}
        defaultZoom={zoom}
        defaultCenter={center}
        mapTypeId={type}>
        <FontAwesome
          className='marker'
          name='map-marker'
          lat={marker.lat}
          lng={marker.lng}
          size='3x'
        />
      </GoogleMapReact>
    )
  }
}

export default Map
