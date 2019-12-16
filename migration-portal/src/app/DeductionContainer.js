import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Confirmation from '../confirmation/Confirmation';
import DeductionForm from '../deduction-form/DeductionForm';
import { publicPath } from '../env';
import { addPatient } from '../service/addPatient';
import { lookup } from '../service/lookup';
import StatusList from '../status-list/StatusList';
import { getPatients } from '../service/getPatients';

const DeductionContainer = () => {
    const history = useHistory();
    const [pdsResponse, setPdsResponse] = useState();

    const [patients, setPatients] = useState([]);

    const getPatientsService = async () => {
        const patients = await getPatients('nhs');
        setPatients(patients);
    };

    useEffect(() => {
        getPatientsService();
    }, []);


    return <Switch>
        <Route exact path={`/${publicPath}`}>
            <DeductionForm submitDeduction={async (nhs) => {
                const patientInfo = await lookup(nhs);
                setPdsResponse(patientInfo);
                history.push(`/${publicPath}/confirmation`);
            }}
                validateNhsNumber={validateNhsNumber} />
        </Route>
        <Route path={`/${publicPath}/confirmation`}>
            <Confirmation data={pdsResponse} confirmDeduction={async () => {
                const { patientName, nhsNumber } = pdsResponse;
                await addPatient({ patientName, nhsNumber, requestor: '3945873948567'})
                getPatientsService();
                history.push(`/${publicPath}/activity`);
            }} />
        </Route>
        {/* <Route path="/success">
            <Success />
        </Route> */}
        <Route path={`/${publicPath}/activity`}>
            <StatusList patients={patients}/>
        </Route>
    </Switch>;
};


const validateNhsNumber = (nhsNumber) => {
    const nhsNumRegex = /^\d{10}$/;
    if (!nhsNumRegex.test(nhsNumber)) {
        return "No Patient found with that NHS Number";
    } else if (nhsNumber.charAt(0) === "9") {
        return "Patient is not in your practice";
    } else {
        return "";
    }
};

export default DeductionContainer;
