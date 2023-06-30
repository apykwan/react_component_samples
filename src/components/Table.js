import { Fragment } from 'react';

export default function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map(column => {
    if (column.header) return <Fragment key={column.label}>{column.header()}</Fragment>;
    
    return <th key={column.label}>{column.label}</th>;
});

  const renderedRow = data.map(rowData => {
    const renderedCells = config.map(column => (
      <td key={column.label}>{column.render(rowData)}</td>
    ));

    return <tr className="border-b" key={keyFn(rowData)}>{renderedCells}</tr>
  });

  return <table className="table-auto">
    <thead>
      <tr className="border-b-2">
        {renderedHeaders}
      </tr>
    </thead>
    <tbody>
      {renderedRow}
    </tbody>
  </table>;
}