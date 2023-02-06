import React from 'react';
import react from 'react';

// import css
import '../styles/Table.css';

// functional component returns jsx to create component
export default function Table() {
    /**
     * This is a documentation comment bois! We're documenting!
     * brute force the table values into a 2d array
     */
    function genPoints(a: number, b: number, p: number): Array<[number, number]> {
        const infty: [number, number] = [0, 0];
        let values = [infty];
        for (let x = 0; x < p; x++) {
            for (let y = 0; y < p; y++) {
                if (0 === (x ** 3 + a * x + b - y ** 2) % p) {
                    const point: [number, number] = [x, y];
                    values.push(point)
                }
            }
        }
        return values;
    }
    function genTable(a: number, b: number, p: number): Array<Array<string>> {
        const points = genPoints(a, b, p);
        const base_row = ["+", ...points.map(point => point.toString())];
        const rows: Array<Array<string>> = points.map(([x, y], i) => {
            if (i === 0) {
                return base_row;
            } else {
                return [(base_row[i].toString())].concat(Array(rows.length - 1).fill(`${0},${0}`));
            }
        });

        console.log();
        return rows;
    }
    console.log(genTable(0, 2, 7));

    return (
        // this is a react fragment, it's like a div but doesn't show up in the DOM
        // <></>
        // A prop is a property that can be passed to a component
        // the simplest way to get data throughout componentst is to psas as props
        <table>
            <thead>
                <tr>
                    The table header
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
            </tbody>
        </table>
    )
}



// class based components are too based for this world, and are uncommonly used
// also can't have two `export default` statements
// export default class FirstComponent extends React.Component{
// render(){
//     return (
//         <div>
//             <h1>First Component</h1>
//         </div>
//     )
// }
// }