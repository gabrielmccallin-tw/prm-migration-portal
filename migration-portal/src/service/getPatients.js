import { local, host } from '../features';
import { patients } from './data';

const getPatientsService = async (ods) => {
  const response = await fetch(`${host()}/patients`);
  return await response.json();
};

export const getPatients = async (ods) => {
  return local()
    ? patients
    : getPatientsService(ods);
};