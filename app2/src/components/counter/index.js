import React, { useState } from 'react'

export default function Counter({ title }) {
    const [count, setCount] = useState(0)

    return <>
        <span>{title || '제목이 와야 합니다'}</span>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Up!</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Down!</button>
    </>
}