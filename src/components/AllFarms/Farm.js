import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Farm = ({ title, toggleDetailModal, toggleFundModal, farm, user }) => {

  return (
        <>
          <header className="farm-title">
            <span className="title is-size-5">{ title }</span>
            {
              farm.stage && farm.stage === 'closed'
              ? (<span className="tag is-danger">closed</span>)
              : farm.stage === 'open'
              ? (<span className="tag is-success">open</span>)
              : null
            }
          </header>
          <table className="table is-fullwidth is-stripped">
            <tbody>
              <tr>
                <th>{ farm.location &&  `Location` }</th>
                <td>{ farm.location }</td>
              </tr>
              <tr>
                <th>{ farm.price &&  `Price` }</th>
                <td>{ farm.price }</td>
              </tr>
              <tr>
                <th>{ farm.units && `units` }</th>
                <td>{farm.units}</td>
              </tr>
              <tr>
                <th>{ farm.duration && `Duration` }</th>
                <td>{ farm.duration }</td>
              </tr>
            </tbody>
          </table>
        { user.role === "0"
          ?(<button className="button is-info is-small is-outlined" 
                onClick={toggleDetailModal} style={{marginRight: '0.5em'}}>
                Details
              </button>
          )
          :null
        }
        { user.role === "1"
          ?(<button className="button is-info is-small is-outlined" 
                 style={{marginRight: '0.5em'}}>
                <Link to={`/dashboard/farms/${farm.id}`} className="farm-edit__btn">Details</Link>
              </button>
          )
          :null
        }
        {user.role === "0" 
         ? (<button className="button is-info is-small" 
            onClick={toggleFundModal}>
            Fund
          </button>)
         : null 
        }
        </>
  )
}

export default Farm;
