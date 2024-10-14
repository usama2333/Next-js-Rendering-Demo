"use client";
// by default all components are server components 
// use client on top convert component into client component
// by default client component once render on the server then on the client
import { useState } from "react"

export default function DashboardPage() {
    const [name, setName] = useState("");
    console.log('Dashboard PAge')
    return(
        <div>
            <h1>Dashboard PAge</h1>
        
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello {name}!</p>
        </div>
    ) 
}