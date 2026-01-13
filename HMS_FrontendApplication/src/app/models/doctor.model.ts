import { Appointment } from "./appointment.model";
import { User } from "./user.mode";

export interface Doctor {
  id: number;
  user: User;
  specialization: string;
  contactNumber: string;
  availability: string;       
  createdAt?: string;         
  updatedAt?: string;         
  appointments?: Appointment[];
}