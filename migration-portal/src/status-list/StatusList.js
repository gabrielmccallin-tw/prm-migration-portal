import React, { useEffect, useState } from 'react';

const popRows = (data) => {
  return data.map(({ nhsNumber, patientName, requestor, requestDate, status }) => {
    return (
      <tr className="nhsuk-table__row">
        <td className="nhsuk-table__cell">{nhsNumber}</td>
        <td className="nhsuk-table__cell ">{patientName}</td>
        <td className="nhsuk-table__cell ">{requestor}</td>
        <td className="nhsuk-table__cell ">{requestDate}</td>
        <td className="nhsuk-table__cell ">{status}</td>
      </tr>
    )
  })
};

const StatusList = ({patients}) => {
  return (
    <div data-testid="status-list" className="nhsuk-table__panel-with-heading-tab">
      <h3 className="nhsuk-table__heading-tab">Transferred patients</h3>
      <div className="nhsuk-table-responsive">
        <table className="nhsuk-table">
          <caption className="nhsuk-table__caption">Other possible causes of your symptoms</caption>
          <thead className="nhsuk-table__head">
            <tr className="nhsuk-table__row">
              <th className="nhsuk-table__header" scope="col">NHS Number</th>
              <th className="nhsuk-table__header" scope="col">Patient Name</th>
              <th className="nhsuk-table__header" scope="col">Requested By</th>
              <th className="nhsuk-table__header" scope="col">Requested Date</th>
              <th className="nhsuk-table__header" scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="nhsuk-table__body">
            {popRows(patients)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusList;