import React from 'react';
import PropTypes from 'prop-types'; 


//class component
 class App extends React.Component {
   constructor() {
     super();
     this.state = {
       txt: 'this is the state txt',
       cat: 0
     }
   }

   update(e) {
     this.setState({txt: e.target.value})
   }

   render(){
     return(
       <div>
         <input type="text"
         onChange={this.update.bind(this)}/>
        <h1>{this.state.txt}-{this.state.cat}</h1>
       </div>
     )
   }
  }
  
export default App
