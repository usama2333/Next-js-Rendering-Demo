// Next js automatically servers dynamic rendering in which when any dynamic function 
//is used in component like cookies, headers or search params
// in Dynamic rendering date is changed on build while static date is not changed on build
// Next js automatically choose the static and dynamic rendering

import { cookies } from "next/headers"

export default function AboutPage() {
    const cookieStore = cookies();

    const theme = cookieStore.get("theme");
    console.log(theme)

    console.log('About Server Components')
    return <h1>About PAge {new Date().toLocaleTimeString()}</h1>
}