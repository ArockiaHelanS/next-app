"use client";

import { useState } from "react";

export const Counter = () => {
    console.log("Inisde count component");
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>Count Value {count}</button>
    )
}