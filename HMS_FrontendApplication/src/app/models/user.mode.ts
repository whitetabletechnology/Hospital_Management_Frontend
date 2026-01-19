import { DoctorService } from "../services/doctor.service";
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
  doctor?: DoctorService;          
  patient?: Patient;        
}