import { Doctor } from "../services/doctor";
import { Patient } from "../services/patient";
import { Role } from "./role.model";


export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;       
  role: Role;
  createdAt?: string;       
  updatedAt?: string;     
  doctor?: Doctor;          
  patient?: Patient;        
}