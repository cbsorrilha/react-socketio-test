import React, { Component } from 'react'

const catNames = ['Mia', 'Snowy', 'Felix', 'thor']

const Cats = () => {
    console.log("hello stitches")
    return (
        <div>
            <h1>Hello, Cats!</h1>
            <ul>
                {
                    catNames.map((cat, i) => {
                        return <li key={cat + i}>{cat}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default class App extends Component {
  render() {
    return (
      <div>
          <h1>Hello, world1.</h1>
          <Cats />
      </div>
    );
  }
}
