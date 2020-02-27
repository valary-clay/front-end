import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus} from 'react-icons/fa';
import { useDispatch, useSelector  } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fundFarm } from '../../redux/actions/farmActionCreators';

const FundPage = ({ farm }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch({type: 'CLEAR_ERRORS'})
  },[dispatch])


  const errors = useSelector(state => state.farm.errors);
  const loading = useSelector(state => state.farm.loading);

  const totalMargin = 1 + Number(farm.margin/100);
  let [units, setUnits] = useState(1);
  let [total, setTotal] = useState(() => 1 * farm.price);
  let [payout, setPayout] = useState(() => totalMargin * farm.price);

  const increment = () => {
    if (units >= farm.units){
      return;
    } else {
      units = units + 1;
      total = units * farm.price;
      payout = (totalMargin) * total;
      setUnits(units);
      setTotal(total);
      setPayout(payout);
    }
  }

  const decrement = () => {
    if (units <= 0){
      return;
    } else {
      units = units - 1;
      total = units * farm.price;
      payout = (totalMargin) * total
      setUnits(units);
      setTotal(total);
      setPayout(payout);
    }
  }

  const confirmTransaction = () => {
    let data = {name: farm.name, status: 'pending', id: farm.id, units, amount: total, payout}
    dispatch(fundFarm(history, data));
  }

  return (
    <div className="fund-page">

      <div className="farm-details">
        <table className="table">
          <tbody>
            <tr>
              <th>{`Name of farm`}</th>
              <td>{ farm.name || '' }</td>
              <td></td>
            </tr>
            <tr>
              <th>{`Number of units`}</th>
              <td>
                  { units }
              </td>
              <td>
                  <span className="icon" title="Click to increment" onClick={increment}>
                      <FaPlus/>
                  </span>
                  <span className="icon" title="Click to decrement" onClick={decrement}>
                    <FaMinus/>
                  </span>
              </td>
            </tr>
            <tr>
              <th>Unit Price</th>
              <td>{ farm.price }</td>
              <td></td>
            </tr>
            <tr>
              <th>{`Total`}</th>
              <td>{ total }</td>
              <td></td>
            </tr>
            <tr>
              <th>{`ROI`}</th>
              <td>{`${farm.margin}% in 9 months`}</td>
              <td></td>
            </tr>
            <tr>
              <th>{`Expected Payout`}</th>
              <td>{ payout }</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <div className="payment-details">
        <p className="notification is-warning">
          Please complete the bank transfer using the account information below.
          Ensure to pay the exact amount for the farm you are funding.
        </p>
        <div className="is-size-5 center title">
          <span>Total Payable: </span>
          <span>{ total }</span>
        </div>

        <table className="table">
          <tbody>
            <tr>
              <th>Account Name</th>
              <td>One Acre Fund</td>
            </tr>
            <tr>
              <th>{`Account Number`}</th>
              <td>28749405212333</td>
            </tr>
            <tr>
              <th>{`Bank name`}</th>
              <td>Kenya Commercial Bank</td>
            </tr>
          </tbody>
        </table>

        <button  
          className={`button is-primary ${loading? 'is-loading': ''}`}
          onClick={confirmTransaction}
        >
          Confirm Transacttion
        </button>
        <p className="help is-danger">{`${errors.error || ''}`}</p>
      </div>
      
    </div>
  );
}


export default FundPage;
