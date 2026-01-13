import { Appointment } from "./appointment.model";
import { User } from "./user.mode";


export interface Patient {
  id: number;
  user: User;
  age?: number;               
  gender?: string;            
  contactNumber: string;      
  address?: string;         
  medicalHistory?: string;    
  createdAt?: string;        
  updatedAt?: string;        
  appointments?: Appointment[];
}