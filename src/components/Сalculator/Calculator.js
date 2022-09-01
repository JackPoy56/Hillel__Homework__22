import React from 'react';

import './Calculator.css';
import MathItem from './MathItem/MathItem';
import Numbers from './Numbers/Numbers';
import Screen from './Screen/Screen';

import {numbers, operations} from './helpers';

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentNumber: '',
            operation: null,
            prevNumber: null,
            finish: false
        };
    }

    add = () => {
        let result = +this.state.currentNumber + +this.state.prevNumber;
        if (isNaN(result)) {
            result = 'Error';
        }
        if (this.state.finish === false) {
            this.setState(() => ({currentNumber: '', prevNumber: result }));
        } else {
            this.setState(() => ({currentNumber: result, finish: false, operation: null, prevNumber: ''}));
        }
    }

    sub = () => {
        let result = +this.state.prevNumber - +this.state.currentNumber;
        
        if (isNaN(result)) {
            result = 'Error';
        }
        if (this.state.finish === false) {
            this.setState(() => ({currentNumber: '', prevNumber: result }));
        } else {
            this.setState(() => ({currentNumber: result, finish: false, operation: null, prevNumber: ''}));
        }
    }

    div = () => {
        let result = +this.state.prevNumber / +this.state.currentNumber;
        
        if (isNaN(result)) {
            result = 'Error';
        }
        if (this.state.finish === false) {
            this.setState(() => ({currentNumber: '', prevNumber: result }));
        } else {
            this.setState(() => ({currentNumber: result, finish: false, operation: null, prevNumber: ''}));
        }
    }

    mult = () => {
        let result = +this.state.prevNumber * +this.state.currentNumber;
        
        if (isNaN(result)) {
            result = 'Error';
        }
        if (this.state.finish === false) {
            this.setState(() => ({currentNumber: '', prevNumber: result }));
        } else {
            this.setState(() => ({currentNumber: result, finish: false, operation: null, prevNumber: ''}));
        }
    }

    interest = () => {
        let result = (+this.state.prevNumber / 100) * +this.state.currentNumber;
        
        if (isNaN(result)) {
            result = 'Error';
        }
        if (this.state.finish === false) {
            this.setState(() => ({currentNumber: '', prevNumber: result }));
        } else {
            this.setState(() => ({currentNumber: result, finish: false, operation: null, prevNumber: ''}));
        }
    }

    degree = () => {
        const x = +this.state.prevNumber;
        const y = +this.state.currentNumber;
        let result = Math.pow(x,y);
       
        if (isNaN(result)) {
            result = 'Error';
        }
        if (this.state.finish === false) {
            this.setState(() => ({currentNumber: '', prevNumber: result }));
        } else {
            this.setState(() => ({currentNumber: result, finish: false, operation: null, prevNumber: ''}));
        }
    }

    mathOperetions = () => {
        if (this.state.prevNumber != null && this.state.operation === 'add') {
            this.add();
        }
        if (this.state.prevNumber != null && this.state.operation === 'sub') {
            this.sub();
        }
        if (this.state.prevNumber != null && this.state.operation === 'div') {
            this.div();
        }
        if (this.state.prevNumber != null && this.state.operation === 'mult') {
            this.mult();
        }
        if (this.state.prevNumber != null && this.state.operation === 'interest') {
            this.interest();
        }
        if (this.state.prevNumber != null && this.state.operation === 'degree') {
            this.degree();
        }
    }

    render() {
        return (
        <div className="Calculator">
            <Screen value={this.state.currentNumber}/>
            <div className="container">
                <div className="wrapper-numbers">
                    {numbers.map(symbol =>(
                        <Numbers onClick={() => { 
                            if (this.state.prevNumber === '') return;
                            if (this.state.currentNumber.length > 11) return;
                            if (this.state.currentNumber.charAt(0) === '0' && this.state.currentNumber.charAt(1) !== '.') return;
                            this.setState({currentNumber: this.state.currentNumber + symbol});   
                        }} key={symbol} num={symbol}/>                
                    ))}
                    <Numbers onClick={() => {
                        if (this.state.prevNumber === '') return;
                        if (!this.state.currentNumber.includes('.')){
                            this.setState({currentNumber: this.state.currentNumber + '.'});  
                        }
                    }} num='.'/>
                    <Numbers onClick={() => {
                            this.setState(() => ({finish: true}), this.mathOperetions);
                    }} num='='/>
                </div>
                <div className="wrapper-math-item">
                    {operations.map(oper => (
                        <MathItem onClick={() => {
                            if (oper.id === 'delete') {
                                this.setState(() => ({currentNumber: '', operation: null, finish: false, prevNumber: null}));
                            } else if (oper.id === 'root') {
                                this.setState(() => ({currentNumber: Math.sqrt(this.state.currentNumber), finish: false, prevNumber: this.state.currentNumber}));
                            } else {
                                this.setState(() => ({currentNumber: '', operation: oper.id, prevNumber: this.state.currentNumber}));
                                this.mathOperetions();                      
                            }
                        }} key={oper.id} operation={oper.operation}/>
                    ))}
                </div>  
            </div>
        </div>
        )
    }
}

export default Calculator;