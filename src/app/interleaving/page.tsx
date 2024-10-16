import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      {/* while using server inside client it also convert the server into client 
      and we can loss server functionality to avoid this we can pass the server 
      component as a child in client it will retains server as a server component */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}