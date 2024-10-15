"use client"
// client side first rendered on server side then on client side
// we can see consoles on web 
// import { serverSideFunction } from "@/utils/server-utils"

export default function ClientRoutePage() {
    console.log('Client side route')
    // const result = serverSideFunction();
    return(
        <div>
            <h1>Client Route Page</h1>
            {/* <p>{result}</p> */}
        </div>
    ) 
}