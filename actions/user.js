"use server"

import {auth} from "@clerk/nextjs/server"
import { db } from "@/lib/prisma";
export async function updateUser(data) {
  const {userId}=await auth();
  if(!userId) throw new Error("Unauthorized")

    const user =await db.User.findUnique({
      where:{
        clerkUserId:userId,
      }
    })
    if(!user) throw new Error("User Not found");
    try {
    const result=await db.$transaction(async()=>{
       //find if the industry exists
      //if industry doesnt exist create it with defalut values 
      //update the user
    },
  {
    timeout:10000,
  })
      return result.user;
    } catch (error) {
      console.error("Error updating user and industry:",error.message);
      throw new Error("Failed to update profile")
      
    }
  
}