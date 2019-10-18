import React, { Component } from 'react';
import './App.css';
import Card from './card';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cardNumber:'............',
      cardDate:'....',
      cardOwner:'Foulen',
      dateSlice:'....'
    
     }
    ; 
  }
   handleChangeNumber=(e)=>{
      this.setState({ cardNumber: e.target.value})
      }
    handleChangeCardDate=(e)=>{
      this.setState({ cardDate: e.target.value.slice(0,2)+'/'+ e.target.value.slice(2,4)})
      // this.setState({dateSlice:this.state.cardDate})
    }
    handleChangeCardOwner=(e)=>{
      this.setState({ cardOwner: e.target.value.toUpperCase()})
    }

  render() { 
    return (<div className='container d-flex'>
      <Card number={this.state.cardNumber} date={this.state.cardDate} owner={this.state.cardOwner} />
      <div className='container form'>
             <input type="number" class="form-control"
               aria-label="Username" maxLength="16" onChange={(e)=>this.handleChangeNumber(e)}
             />
             <input type="text" class="form-control"
               aria-label="Username" maxLength="4"
               onChange={(e)=>this.handleChangeCardDate(e)}
             />
             <input type="text" class="form-control"
               aria-label="Username" maxLength="20"
               onChange={(e)=>this.handleChangeCardOwner(e)}
             />
             
</div>

      </div>
      );
  }
}
 
export default App;
