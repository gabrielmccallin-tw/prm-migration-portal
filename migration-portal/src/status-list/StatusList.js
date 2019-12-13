import React from 'react';

// const popRows = (data) => {
//   // return data.map(({ nhsNumber, name, requestor, requestDate, status }) => {
//   return data.map(({ symbol, name, rank, price_usd, market_cap_usd }) => {
//     return (
//       <tr className="nhsuk-table__row">
//         <td className="nhsuk-table__cell">{nhsNumber}</td>
//         <td className="nhsuk-table__cell ">{name}</td>
//         <td className="nhsuk-table__cell ">{requestor}</td>
//         <td className="nhsuk-table__cell ">{requestDate}</td>
//         <td className="nhsuk-table__cell ">{status}</td>
//       </tr>
//     )
//   })
// };

const popRows = (data) => {
  return data.map(({ symbol, name, rank, price_usd, market_cap_usd }) => {
    return (
      <tr className="nhsuk-table__row">
        <td className="nhsuk-table__cell">{symbol}</td>
        <td className="nhsuk-table__cell ">{name}</td>
        <td className="nhsuk-table__cell ">{rank}</td>
        <td className="nhsuk-table__cell ">{price_usd}</td>
        <td className="nhsuk-table__cell ">{market_cap_usd}</td>
      </tr>
    )
  })
};



const StatusList = ({data}) => {
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
            {popRows(data)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusList;