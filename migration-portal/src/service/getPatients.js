import { features } from '../env';
import { patients } from './data';

const getPatientsService = async (ods) => {
  const response = await fetch(`http://localhost:5000/patients`);
  return await response.json();
};

export const getPatients = async (ods) => {
  return features.stubs 
    ? patients
    : getPatientsService(ods);
};