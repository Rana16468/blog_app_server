import { userInfo } from "os";
import prisma from "../shared/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtHelpers } from "../utils/jwtHelper";
interface userInfo {name:string,email:string,password:string}

  
export const resolvers = {
    Query: {
        users:async(parent:any,args:any,context:any)=>{

        const result=await prisma.user.findMany({});
        return result;

     }
    },
    Mutation:{
        singup:async(parent:any,args: userInfo, context:any)=>{

            const isExistUser=await prisma.user.findFirst({
                where:{
                    email:args.email
                }
            });
            console.log(isExistUser);
            if(isExistUser){
                return {
                    userError:"Already This Email Registred",
                     token:null
                }
            }
               const hashPassword=await bcrypt.hash(args.password,12);
                    args.password=hashPassword
           const user=await prisma.user.create({
            data:args
           });
        
           const token=await jwtHelpers({userId:user.id,email:user.email});
           return  {
            token
           }
        },
        singin:async(parent:any,args:any,context:any)=>{
            const user=await prisma.user.findFirstOrThrow({
                where:{
                    email:args.email
                }
            });
            if(!user){
                return {
                    userError:"InCorrect Password",
                    token:null
                }
            }
          const isCorrectPassword=await bcrypt.compare(args.password,user.password);
          if(!isCorrectPassword){
            return {
                userError:"User Not Founded",
                token:null
            }
          }
          const token=await jwtHelpers({userId:user.id,email:user.email});
          return {
            userError:null,
            token
          }
        }

    }
  };