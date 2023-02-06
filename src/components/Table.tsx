import React, { useState } from 'react';
import react from 'react';

// import css
// import '../styles/Table.css';

type TableProps = {
  inputs: {
    a: number,
    b: number,
    p: number
  }
}

// functional component returns jsx to create component
export default function Table(props: TableProps) {
  const { a, b, p } = props.inputs;
  const [activeCell, setActiveCell] = useState<null | [number, number]>(null);
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
    const rows = points.map(([x, y], i) => {
      if (i === 0) {
        return base_row;
      } else {
        // return an array of stringified zero-tuples of length base_row
        const row = Array(base_row[i]).concat(Array(base_row.length - 1).fill([0, 0].toString()));
        return row
      }
    });

    return rows;
  }

  return (
    // this is a react fragment, it's like a div but doesn't show up in the DOM
    // <></>
    // A prop is a property that can be passed to a component
    // the simplest way to get data throughout componentst is to psas as props
    <table>
      {/* <thead>
        <tr>
          Mad skillz table
        </tr>
      </thead> */}
      <tbody>
        {
          genTable(a, b, p).map((row, ri) => (
            ri === 0
              ? <tr>
                {
                  row.map((item, j) => (
                    <th className={activeCell && ri === activeCell[0] && j === activeCell[1] ? '' : ''}
                      onClick={() => setActiveCell([ri, j])}>
                      {item}
                    </th>
                  ))
                }
              </tr>
              : <tr>
                {
                  row.map((item, j) => (
                    j === 0
                      ? <th className={activeCell && ri === activeCell[0] && j === activeCell[1] ? '' : ''}
                        onClick={() => setActiveCell([ri, j])}>
                        {item}
                      </th>
                      : <td className={activeCell && ri === activeCell[0] && j === activeCell[1] ? '' : ''}
                        onClick={() => setActiveCell([ri, j])}>
                        {item}
                      </td>
                  ))
                }
              </tr>
          ))
        }
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