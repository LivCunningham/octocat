import React, { Component } from 'react'

class Container extends Component {
  render() {
    return (
      <div className="containerCats">
        <img className="image-area" src={this.props.pictureUrl} />
        <section className="caption">
          <p>{this.props.number}</p>
          <div className="name-pic">
            <p>
              {' '}
              {''} <em>{this.props.name}</em> {''}{' '}
            </p>
            <img src={this.props.ImgUrl} />
          </div>
        </section>
      </div>
    )
  }
}

export default Container
