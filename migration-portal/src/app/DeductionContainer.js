import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import DeductionForm from "../deduction-form/DeductionForm";
import Confirmation from "../confirmation/Confirmation";
import Success from "../success/Success";
import Login from "../login/Login";
import Auth from "../auth/Auth"
import NHSIdentitySandpitLogInUrl from "../config";
import StatusList from "../status-list/StatusList";

const DeductionContainer = () => {
    const history = useHistory();

    const [data, setData] = useState([]);

    const addToPatientList = async () => {
        const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
        const json = await response.json();
        setData(json);
    };

    return <Switch>
        {/* <Route exact path="/">
          <Login login={() => window.location.href = `${NHSIdentitySandpitLogInUrl}`} loginMock={() => history.push("/home")}/>
      </Route> */}
        {/* <Route path="/auth" component={Auth}> */}
        {/*<DeductionForm submitDeduction={() => history.push("/confirmation")}*/}
        {/*               validateNhsNumber={validateNhsNumber}/>*/}
        {/* </Route> */}
        <Route exact path='/'>
            <DeductionForm submitDeduction={() => {
                history.push("/confirmation");
            }}
                validateNhsNumber={validateNhsNumber} />
        </Route>
        <Route path='/confirmation'>
            <Confirmation confirmDeduction={() => {
                history.push("/success");
                addToPatientList();
            }} />
        </Route>
        <Route path="/success">
            <Success />
        </Route>
        <Route path="/activity">
            <StatusList data={data} />
        </Route>
    </Switch>;
};

// const data = [{
//     nhsNumber: 5637487498,
//     name: 'Donald Duck',
//     requestor: 123456789012,
//     requestDate: '13/12/2019',
//     status: 'Success'
// }];

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
