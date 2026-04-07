import { useState } from "react"


export default function Recipe() {
    const [name, setName] = useState("Cheese Burger");


    

    return (
        <main>
            <h1>Today's Recipe: {name}</h1>
        </main>
    )
}