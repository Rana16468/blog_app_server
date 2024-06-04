import jwt from 'jsonwebtoken';
import config from '../config';
export const jwtHelpers=async(payload:any)=>{
    return jwt.sign(payload,config.jwt_aceess_secret as string,{expiresIn:"1d"});
}