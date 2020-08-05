import React from 'react';

const SalaryCalculatorResult = (props) => {
    const { basic, hra, da, tax, salary } = props,
        salaryStyle = salary >= 10000 ? 'goodSalary' : 'poorSalary',
        salaryEle = (<td className={salaryStyle}>{salary}</td>);
    return (
        <div className="field">
            <table>
                <tbody>
                    <tr>
                        <td>{basic}</td>
                        <td>{hra}</td>
                        <td>{da}</td>
                        <td>{tax}</td>
                        {salary > 0 ? salaryEle : null}
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default SalaryCalculatorResult;