import "server-only";
// by importing server only we can only use this function in server component only
export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        environment variables,
        interect with database,
        confidential infoormation
        `
    )
    return "Server Result"
}