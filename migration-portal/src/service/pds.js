const data = [{
  name: 'Dick Grayson',
  practice: 'GP Practice 1',
  telephone: '07700 900457',
  email: 'dick.grayson@example.com',
  dob: '5 January 1978',
  nhs: '1234567890'
}, {
  name: 'Rachel Roth',
  practice: 'GP Practice 2',
  telephone: '07700 900457',
  email: 'rachel.roth@example.com',
  dob: '5 January 1978',
  nhs: '2234567890'
}, {
  name: 'Donna Troy',
  practice: 'GP Practice 3',
  telephone: '07700 900457',
  email: 'donna.troy@example.com',
  dob: '5 January 1978',
  nhs: '3234567890'
}, {
  name: 'Kory Anders',
  practice: 'GP Practice 4',
  telephone: '07700 900457',
  email: 'Kory.Anders@example.com',
  dob: '5 January 1978',
  nhs: '4234567890'
}, {
  name: 'Garfield Logan',
  practice: 'GP Practice 5',
  telephone: '07700 900457',
  email: 'garfield.logan@example.com',
  dob: '5 January 1978',
  nhs: '5234567890'
}];

export const lookup = (nhs) => {
  return data.find(item => item.nhs === nhs);
};