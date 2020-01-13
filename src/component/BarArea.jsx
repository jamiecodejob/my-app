import React, { Component } from 'react';
import './barArea.css';

class BarArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            strCount: props.str,
            intCount: props.int,
            agiCount: props.agi,
            lukCount: props.luk,
        } 
    }

    addStrCount = () => {
        this.setState({
            strCount: this.state.strCount +1,
        })
    }

    minusStrCount = () => {
        if (this.state.strCount >= 1){
            this.setState({
                strCount: this.state.strCount -1,
            })
        }
    }

    addIntCount = () => {
        this.setState({
            intCount: this.state.intCount +1,
        })
    }

    minusIntCount = () => {
        if (this.state.intCount >= 1){
            this.setState({
                intCount: this.state.intCount -1,
            })
        }
    }

    addAgiCount = () => {
        this.setState({
            agiCount: this.state.agiCount +1,
        })
    }

    minusAgiCount = () => {
        if (this.state.agiCount >= 1){
            this.setState({
                agiCount: this.state.agiCount -1,
            })
        }
    }

    addLukCount = () => {
        this.setState({
            lukCount: this.state.lukCount +1,
        })
    }

    minusLukCount = () => {
        if (this.state.lukCount >= 1){
            this.setState({
                lukCount: this.state.lukCount -1,
            })
        }
    }

    render(){
        return (
            <div className="barArea">
                <div className="bar">str <button type="button" className="button" onClick={this.addStrCount}>+</button>{this.state.strCount}<button type="button" className="button" onClick={this.minusStrCount}>-</button></div>
                <div className="bar">int <button type="button" className="button" onClick={this.addIntCount}>+</button>{this.state.intCount}<button type="button" className="button" onClick={this.minusIntCount}>-</button></div>
                <div className="bar">agi <button type="button" className="button" onClick={this.addAgiCount}>+</button>{this.state.agiCount}<button type="button" className="button" onClick={this.minusAgiCount}>-</button></div>
                <div className="bar">luk <button type="button" className="button" onClick={this.addLukCount}>+</button>{this.state.lukCount}<button type="button" className="button" onClick={this.minusLukCount}>-</button></div>
            </div>
        )
    }
}
  
export default BarArea;

   