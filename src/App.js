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
    return (
      <>
        <NavBar />
        <Container>
          <div className="containerCats">
            <Container
              name="Octobi Wan Catnobi"
              number="#3"
              pictureUrl="https://octodex.github.com/images/octobiwan.jpg"
            />
            />
            {Containers.map(Container => {
              return (
                <Container
                  name={Container.name}
                  number={Container.number}
                  pictureUrl={Container.imageURL}
                />
              )
            })}
          </div>
        </Container>
      </>
    )
  }
}

export default App
