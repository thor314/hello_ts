import react from 'react';
import { Inputs } from '../App';
// import {InlineMath } from 'react-katex'
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface Props {
    inputs: Inputs,
}

// 0 = - y^2 + x^3 + ax + b (mod p)
export default function TableEquation(props: Props) {
    const { inputs } = props
    return (
        <div className='equation'>
          <InlineMath math="y^2=x^3"/>
            {inputs.a === 0 ? " " : `+ ${inputs.a}x `}
            {inputs.b === 0 ? " " : `+ ${inputs.b} `}
            (mod {inputs.p}) over F{inputs.p} with some number of points
        </div>
    ) // lets go
    // todo
}