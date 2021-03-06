import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display/Display'
import Button from '../components/Button/Button'

class Calculator extends Component {

    state = {
         displayValue: '0',
         num1: [0,0],
         operation: null,
         result: null,
    }

    clearMemory = () => {
        this.setState({displayValue: '0'}),
        this.setState({num1: [0]}),
        this.setState({num1: [1]})
    }

    

    addDigit = (digit) => {
        if( operation.label != "-" && "+" && "*" && "/"){
        this.setState({displayValue: digit})
        this.setState({num1:[digit]})
        this.setState({displayValue: num1[0]})
        console.log(num1[0])
        }
        

    }
    setOperation = (operation) => {
        if(operation == "-"){
        let result = this.setState.num1[0] - this.setState.num2[1]
        this.setState({displayValue: result})
        return result
        
        }else if(operation == "+"){
        let result = this.setState.num1[0] + this.setState.num2[1]
        this.setState({displayValue: result})
        return result
        
        }else if(operation == "*"){
        let result = this.setState.num1[0] * this.setState.num2[1]
        this.setState({displayValue: result})
        return result        
        }else if(operation == "/"){
            let result = this.setState.num1[0] / this.setState.num2[1]
            this.setState({displayValue: result})
        return result
           
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" triple clear={this.clearMemory} />
                <Button label="/" operation click={this.setOperation} />
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
            </div>
        )
    }
}

export default Calculator