import { local, host } from '../features';
import { patients } from './data';
import { endpoints } from '../env';

const getPatientsService = async (ods) => {
  const response = await fetch(`${host()}/${endpoints.patients}`);
  return await response.json();
};

export const getPatients = async (ods) => {
  return host() === ''
    ? patients
    : getPatientsService(ods);
};