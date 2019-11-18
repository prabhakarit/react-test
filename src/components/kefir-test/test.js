import React from 'react';
import Kefir from 'kefir';
//import FromStream from './fromstream';

export default function KefirTest()
{ 
    const numbers = Kefir.sequentially(100, [1, 2, 3]);
    const numbers2 = numbers.map(x => x * 2);
    const numbers3 = numbers2.filter(x => x !== 4);
    console.log("printing numbers...");
    numbers3.onValue(x => {
        //logger.log(x);
        //console.log(x);
        return (
            <div>numbers3 {x}</div>
        );
    });

    const dateStream = Kefir.interval(1000).map(() => new Date().toString());
    console.log("printing datestream...");
    dateStream.onValue(x=> {
        //logger.log(x);
        //console.log(x);
        return (
            <div>dateStream {x}</div>
        );
    });

    return (
        <div>
            <h2>Using kefir, creating, modifying and consuming streams</h2>
        </div>
    );
}
