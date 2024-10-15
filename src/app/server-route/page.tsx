import ImageSlider from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils"
import ClientRoutePage from "../client-route/page";
// we are not seeing any consoles on web bcz it is server component
export default function ServerRoutePage() {
    console.log('Server route render')
    const result = serverSideFunction();
    return(
        <div>
            <h1>Server Route Page</h1>
            <p>{result}</p>
            <ImageSlider/>
            {/* when we can using third party packages that takes user interection 
            it does not directly woeks in server component instead we can make our
            own component and paste the code here with "use client" and then call 
            that compoent in server component it works fine then
             */}
             {/* in short we can use client inside server thats why third party 
             code converts into client side component then use it */}
        </div>
    ) 
}