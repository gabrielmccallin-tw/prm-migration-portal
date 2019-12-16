import { host, local } from '../features';
import { lookupData } from './data';

const lookupService = async (nhsNumber) => {
  const response = await fetch(`${host()}/patient-info/${nhsNumber}`);
  return await response.json();
};

export const lookup = async (nhsNumber) => {
  return local()
    ? lookupData.find(item => item.nhsNumber === nhsNumber)
    : lookupService(nhsNumber);
};