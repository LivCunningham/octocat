import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Container from './components/Container'

const Containers = [
  {
    name: 'Octobi Wan Catnobi',
    number: '#3',
    pictureUrl: 'https://octodex.github.com/images/octobiwan.jpg'
  }
]

class App extends Component {
  render() {
    console.log('here')
    return (
      <>
        <NavBar />

        <div className="containerCats">
          {Containers.map(cat => {
            return (
              <Container
                name={cat.name}
                number={cat.number}
                pictureUrl={cat.pictureUrl}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default App
