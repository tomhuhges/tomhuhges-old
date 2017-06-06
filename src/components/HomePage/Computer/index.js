import React from 'react'
import three, { JSONLoader } from 'three'
import ReactThree from 'react-three'

class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const json = '../../../assets/computer/untitled-scene.json'
    const texturePath = '../../../assets/computer'
    const loader = new JSONLoader();
    const result = loader.parse(json, texturePath);
    const mesh = new three.Mesh(result.geometry, result.materials);
    console.log(mesh)
  }
  render() {
    return (
      <div id="computer">

      </div>
    )
  }
}

export default Computer
