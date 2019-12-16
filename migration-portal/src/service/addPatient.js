import { features } from '../env';
import { patients } from './data';

const addPatientService = async (patient) => {
  await fetch(`http://localhost:5000/patients`, {
    method: 'post',
    body: JSON.stringify(patient),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return true;
};

export const addPatient = async (patient) => {
  return features.stubs
    ? patients.push({ ...patient, status: 'Success', requestDate: 'Today' })
    : addPatientService(patient);
};