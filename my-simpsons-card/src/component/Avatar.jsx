import { useState } from 'react';
export default function Avatar({ image, firstname, lastname }) {
    const [ count, setCount ] = useState(0);

    function handleIncrement() {
        setCount(count + 1);
        console.log(count);
    }
    return (
        <div>
            {image && <img src={image} alt={`${firstname} ${lastname}`} />}
            <p>{`${firstname} ${lastname}`}
            <button onClick={handleIncrement}>🍩</button>
            <span>{count}</span></p>
        </div>
    );
}
