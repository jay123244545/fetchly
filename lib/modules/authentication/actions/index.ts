"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/dist/server/request/headers";


export const currrentUser = async () => {
    try {
        const session  = await auth.api.getSession({
            headers:await headers()
        })

        if (!session?.user?.id){
            return null;
        }
        const user = await db.user.findUnique({
            where: {
                id: session.user.id
            },
            select: {
                id:true,
                email:true,
                name:true,
                image:true,
                createdAt:true,
                updatedAt:true
            }
        })
return user;
            
    }catch (error) {

    }
}