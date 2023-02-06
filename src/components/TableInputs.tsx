import React from 'react';
import { Inputs } from '../App';


interface Props {
    inputs: Inputs,
    // change event handler does: 
    // React updates state & input same time, called Controlled Component
    // TFAE: 
    handleChangeA: React.ChangeEventHandler<HTMLInputElement>,
    handleChangeB: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleChangeP: React.ChangeEventHandler<HTMLInputElement>,
    //  p: number, a: number, b: number 
}

export default function TableInputs(props: Props) {
    const { inputs, handleChangeA, handleChangeB, handleChangeP } = props
    return (
        <div>
            <span>Modulus p: </span>
            <input type="number" value={inputs.p} onChange={handleChangeP} />
            <span>Param a: </span>
            <input type="number" value={inputs.a} onChange={handleChangeA} />
            <span>Param b: </span>
            <input type="number" value={inputs.b} onChange={handleChangeB} />

        </div>
    )
    // todo
}