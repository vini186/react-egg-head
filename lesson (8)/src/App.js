import React from 'react';
//import PropTypes from 'prop-types'; 


  class App extends React.Component {
  render() {
    return <Title text='12345678'/>     
  }
 }

const Title = (props) => <h1> Title: {props.text} </h1>

Title.propTypes ={
  text(props, propName, component){
      if(!(props, propName, component)) {
        return new Error('missing ${propName}')
      }
      if(props[propName].length < 6){
        return new Error(`${propName} was too short`)
      }
  }
}

export default App
