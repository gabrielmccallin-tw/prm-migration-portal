import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const app = express();
app.use(json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

const patients: {
    patientName: string,
    requestor: string,
    nhsNumber: string,
    status: string,
    requestDate: string
}[] = [];

const data = [{
    patientName: 'Dick Grayson',
    practice: 'GP Practice 1',
    telephone: '07700 900457',
    email: 'dick.grayson@example.com',
    dob: '5 January 1978',
    nhsNumber: '1234567890'
}, {
    patientName: 'Rachel Roth',
    practice: 'GP Practice 2',
    telephone: '07700 900457',
    email: 'rachel.roth@example.com',
    dob: '5 January 1978',
    nhsNumber: '2234567890'
}, {
    patientName: 'Donna Troy',
    practice: 'GP Practice 3',
    telephone: '07700 900457',
    email: 'donna.troy@example.com',
    dob: '5 January 1978',
    nhsNumber: '3234567890'
}, {
    patientName: 'Kory Anders',
    practice: 'GP Practice 4',
    telephone: '07700 900457',
    email: 'Kory.Anders@example.com',
    dob: '5 January 1978',
    nhsNumber: '4234567890'
}, {
    patientName: 'Garfield Logan',
    practice: 'GP Practice 5',
    telephone: '07700 900457',
    email: 'garfield.logan@example.com',
    dob: '5 January 1978',
    nhsNumber: '5234567890'
}];



const lookup = (nhsNumber: string) => {
    const patient = data.find(item => item.nhsNumber === nhsNumber)
    return patient ? patient : {};
};

app.get('/patients', (req, res) => {
    res.send(patients);
});

app.get('/patient-info/:nhs', (req, res) => {
    const { nhs } = req.params;
    res.send(lookup(nhs));
});

app.post('/patients', (req, res) => {
    const { patientName, requestor, nhsNumber } = req.body;
    console.log(req.body);
    const patient = {
        patientName,
        requestor,
        nhsNumber,
        status: 'Success',
        requestDate: 'Today'
    };
    patients.push(patient);

    res.send(`Added ${patientName} to list`);
});

app.delete('/patients', (req, res) => {
    patients.length = 0;
    res.send(`Deleted all patiednts`);
});

app.listen(5000);