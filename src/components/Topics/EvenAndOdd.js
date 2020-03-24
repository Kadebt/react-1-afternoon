import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
      }
    
      assignNums(userInput) {
        let arr = userInput.split(',');
        let evens = [];
        let odds = [];
    
        for ( let i = 0; i < arr.length; i++ ) {
          if ( arr[i] % 2 === 0 ) {
            evens.push( parseInt(arr[i], 10) );
          } else {
            odds.push( parseInt(arr[i], 10) );
          }
        }
    
        this.setState({ evenArray: evens, oddArray: odds });
      }
    render(){
        return(
            
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens And Odds</h4>
                <input onChange={(e) => this.handleChange(e.target.value)}className="inputLine"/>
                <button onClick={() => {this.assignNums(this.state.userInput)}} className="confirmationButton">Submit</button>
                <span  className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span  className="resultsBox">{ JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}