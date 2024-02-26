import { useState } from "preact/hooks";

export function Counter() {
    const [counter, setCounter] = useState(0);

    const handleCounter = (value) => {
        setCounter(counter => counter + value);
    }

    return (
        <>
            <span class="text-yellow-300 text-xl mr-4">{counter}</span>
            <button class="border px-4 py-2 text-xl" onClick={() => handleCounter(+1)}>+</button>
            <button class="border px-4 py-2 text-xl" onClick={() => handleCounter(-1)}>-</button>
        </>
    )
}