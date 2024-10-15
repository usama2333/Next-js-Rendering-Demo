import { serverSideFunction } from "@/utils/server-utils"
// we are not seeing any consoles on web bcz it is server component
export default function ServerRoutePage() {
    console.log('Server route render')
    const result = serverSideFunction();
    return(
        <div>
            <h1>Server Route Page</h1>
            <p>{result}</p>
        </div>
    ) 
}