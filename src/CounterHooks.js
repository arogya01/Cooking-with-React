import React, { useContext, useState } from 'react';
import {ThemeContext} from './App';
export default function CounterHooks({ initialCount }) {

    const [state, setCount] = useState({ count: initialCount })
    const style=useContext(ThemeContext);

    return (

        <div>
            <button style={style} onClick={() => { setCount({ count: state.count - 1 }) }}>-</button>
            <span>{state.count}</span>
            <button style={style} onClick={() => { setCount({ count: state.count + 1 }) }} >+</button>
        </div>

    )
}