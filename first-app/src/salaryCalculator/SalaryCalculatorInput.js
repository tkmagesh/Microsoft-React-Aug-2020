import React, { useEffect } from 'react';

const SalaryCalculatorInput = ({ labelText, onValueChange, type = "number", ...attrs }) => {
    useEffect(() => {
        console.log('component is mounted / updated');
        return () => {
            console.log('component is unmounted');
        }
    }, [labelText]);
    console.log('SalaryCalculatorInput rendering for ', labelText)
    return (
        <div className="field">
            <label htmlFor="">{labelText}</label>
            <input
                type={type}
                {...attrs}
                onChange={evt => onValueChange(evt.target.valueAsNumber)} />
        </div>
    )
};

export default SalaryCalculatorInput;