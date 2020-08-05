import React, { Component, Fragment } from 'react';
import SalaryCalculatorInput from './SalaryCalculatorInput';
import SalaryCalculatorResult from './SalaryCalculatorResult';
import './index.css';

class SalaryCalculator extends Component {
    state = {
        basic: 0,
        hra: 0,
        da: 0,
        tax: 0,
        salary: 0
    };

    onBtnCalculateClick = () => {
        const { basic, hra, da, tax } = this.state;
        const net = basic + hra + da,
            gross = net * ((100 - tax) / 100);
        this.setState({ salary: gross });
    }
    render() {
        const { basic, hra, da, tax, salary } = this.state;

        return (
            <Fragment>
                <h1>Salary Calculator</h1>
                <hr />
                <section>
                    <SalaryCalculatorInput
                        labelText="Basic :"
                        onValueChange={value => this.setState({ basic: value })}
                    />
                    <SalaryCalculatorInput
                        labelText="HRA :"
                        onValueChange={value => this.setState({ hra: value })}
                    />
                    <SalaryCalculatorInput
                        labelText="DA :"
                        onValueChange={value => this.setState({ da: value })}
                    />
                    <SalaryCalculatorInput
                        type="range"
                        labelText="Tax :"
                        min="0"
                        max="30"
                        defaultValue="0"
                        onValueChange={value => this.setState({ tax: value })}
                    />

                    <div className="field">
                        <input type="button" value="Calculate"
                            onClick={this.onBtnCalculateClick} />
                    </div>
                    <SalaryCalculatorResult {...this.state} />
                </section>
            </Fragment>
        )
    }
}

export default SalaryCalculator;