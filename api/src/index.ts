import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const endpoints = {
    patients: 'patients',
    patient: 'patientinfo'
};

const app = express();
app.use(json());
app.use(cors({
    origin: '*'
}));

const patients: {
    patientName: string,
    requester: string,
    nhsNumber: string,
    status: string,
    requestDate: string
}[] = [];

const data = [{
    patientName: 'Richard Grayson',
    practice: 'GP Practice 1',
    telephone: '07700 900457',
    email: 'richard.grayson@example.com',
    dob: '1978-01-05T00:00:00',
    nhsNumber: '1234567890'
}, {
    patientName: 'Rachel Roth',
    practice: 'GP Practice 2',
    telephone: '07700 900457',
    email: 'rachel.roth@example.com',
    dob: '1978-01-05T00:00:00',
    nhsNumber: '2234567890'
}, {
    patientName: 'Donna Troy',
    practice: 'GP Practice 3',
    telephone: '07700 900457',
    email: 'donna.troy@example.com',
    dob: '1978-01-05T00:00:00',
    nhsNumber: '3234567890'
}, {
    patientName: 'Kory Anders',
    practice: 'GP Practice 4',
    telephone: '07700 900457',
    email: 'Kory.Anders@example.com',
    dob: '1978-01-05T00:00:00',
    nhsNumber: '4234567890'
}, {
    patientName: 'Garfield Logan',
    practice: 'GP Practice 5',
    telephone: '07700 900457',
    email: 'garfield.logan@example.com',
    dob: '1978-01-05T00:00:00',
    nhsNumber: '5234567890'
}];

const lookup = (nhsNumber: string) => {
    const patient = data.find(item => item.nhsNumber === nhsNumber)
    return patient ? patient : {};
};

app.get(`/${endpoints.patients}`, (req, res) => {
    res.send(patients);
});

app.get(`/${endpoints.patient}/:nhs`, (req, res) => {
    const { nhs } = req.params;
    res.send(lookup(nhs));
});

app.post(`/${endpoints.patients}`, (req, res) => {
    const { patientName, requester, nhsNumber } = req.body;
    const patient = {
        patientName,
        requester,
        nhsNumber,
        status: 'Success',
        requestDate: '2019-12-05T00:00:00'
    };
    patients.push(patient);

    res.send(`Added ${patientName} to list`);
});

app.delete(`/${endpoints.patients}`, (req, res) => {
    patients.length = 0;
    res.send(`Deleted all patients`);
});

app.listen(5001);