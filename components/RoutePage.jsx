import ShowPayload from './base/ShowPayload'
import React from 'react'

export default class RoutePage extends React.Component {
  
  render() {
    return (
      <div>
        <ShowPayload props={this.props} />
      </div>
    )
  }
}
