import { useRef, useState, useCallback } from "react"


export default function Recipe() {
    const [name, setName] = useState("Cheese Burger");
    const inputValue = useRef(null);

    const callback = useCallback(() => {
        if (!inputValue.current) return;
        setName(inputValue.current.value);
    }, [])
    

    return (
        <main>
            <h1>Today's Recipe: {name}</h1>
            
            <input type="text" ref={inputValue}/>
            <button onClick={callback} >Set Name</button>
        </main>
    )
}