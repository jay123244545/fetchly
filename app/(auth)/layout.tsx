import { auth } from "@/lib/auth"
import { redirect } from "next/dist/client/components/navigation"
import { headers } from "next/dist/server/request/headers"


const AuthLayout = async  ({ children }: { children: React.ReactNode }) => {
   
   const session = await auth.api.getSession({
   headers: await headers()})
   
   if (session) {
    return redirect("/")}
   
    return (
        <div>{children}</div>
    )
}

export default AuthLayout