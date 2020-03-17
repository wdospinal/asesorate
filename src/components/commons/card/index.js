import React from 'react';

const formatText = (value) => {
  if(value.includes('%')) return value;
  if(value.includes('$')) return value;
  return value > 0 ? '+'+value : '-'+value;
}
const Card = ({ name, value }) =>
  <div className="card shadow border-left-success py-2">
    <div className="card-body">
      <div className="row align-items-center no-gutters">
        <div className="col mr-2">
          <div className="text-uppercase text-success font-weight-bold text-xs mb-1"><span>{name}</span></div>
          <div className="text-dark font-weight-bold h5 mb-0"><span>{formatText(value)}</span></div>
        </div>
        <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
        {value.indexOf('%') !== -1? 
        <div className="col">
          <div className="progress progress-sm">
            <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}><span className="sr-only">50%</span></div>
          </div>
        </div>
        : ""
        }
      </div>
    </div>
  </div>

export default Card;
