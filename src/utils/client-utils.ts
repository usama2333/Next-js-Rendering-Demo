import "client-only";
// by importing client-only we can restrict the component to not use in sever component 
export const clientSideFunction = () => {
    console.log(
        `use window object,
        use localstorage
        `
    )
    return "CLient Result"
}