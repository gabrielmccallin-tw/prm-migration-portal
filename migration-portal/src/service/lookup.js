import { features } from '../env';
import { lookupData } from './data';

const lookupService = async (nhsNumber) => {
  const response = await fetch(`http://localhost:5000/patient-info/${nhsNumber}`);
  return await response.json();
};

export const lookup = async (nhsNumber) => {
  return features.stubs 
    ? lookupData.find(item => item.nhsNumber === nhsNumber)
    : lookupService(nhsNumber);
};