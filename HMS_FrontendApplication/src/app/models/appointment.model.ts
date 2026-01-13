import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";
import { Status } from "./status.model";

export interface Appointment {
  id: number;
  patient: Patient;
  doctor: Doctor;
  appointmentDate: string; 
  appointmentTime: string; 
  status?: Status;         
  createdAt?: string;      
  updatedAt?: string;      
}