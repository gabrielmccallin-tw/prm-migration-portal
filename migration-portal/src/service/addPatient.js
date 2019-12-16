import { host, local } from '../features';
import { patients } from './data';

const addPatientService = async (patient) => {
  await fetch(`${host()}/patients`, {
    method: 'post',
    body: JSON.stringify(patient),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return true;
};

export const addPatient = async (patient) => {
  return local()
    ? patients.push({ ...patient, status: 'Success', requestDate: 'Today' })
    : addPatientService(patient);
};