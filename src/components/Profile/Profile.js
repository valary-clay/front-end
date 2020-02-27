import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaEdit } from 'react-icons/fa';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/userActionCreators';

import './styles.scss';

const moment = require('moment');

const Profile = ({ user }) => {
  const { 
    confirmed, 
    email, 
    createdon, 
    bank_account_num,
    bank_account_name,
    bank_name,
    id_num,
    first_name,
    last_name
  } = user;

  const dispatch = useDispatch();
  const errors = useSelector(state => state.user.errors);
  const loading = useSelector(state => state.user.editting);

  useEffect( () => {
    dispatch({type: 'CLEAR_ERRORS'})
  },[dispatch])

  const registered = new Date(createdon);
  const timeSinceRegisteration = moment(registered).fromNow();

  const [showUpdate, setShowUpdate] = useState(false);
  const [edit, setEdit] = useState(false);

  const toggleNotification = (e) => {
    setShowUpdate(!showUpdate);
  }

  const toggleEdit = (e) => {
    setEdit(!edit);
  }

  return (
    <section className="container profile-content">

      <div className="notification is-success" 
          style={{display: `${showUpdate? 'block': 'none'}`}}
      >
      
        <button  className="delete" onClick={toggleNotification}></button>
          Update Successful!
      </div>

    <div className="columns profile-main-section">
      <div className="column is-4 profile-info card  is-8">
        <div className="">
          <div className="email">
            <span className="title is-size-6">Email</span>
            <span className="subtitle address">{email}</span>
          </div>
        </div>

        <div className="password">
          <span>Password</span>
          <br />
          <span>●●●●●●●</span>
          <span className="change-btn">
            <button type="button">Change</button>
          </span>
        </div>
      </div>

      <div className="column is-4 card account-info">
        <div>Account Verified {confirmed ? <FaCheck /> : <FaTimes />}</div>
        <div>Member from {timeSinceRegisteration}</div>
      </div>
    </div>
    
    <div className="columns profile-main-section ">
      <div className="column is-4 profile-info card  is-12">
          <div className="title is-size-6 profile-info__bank-details">
            <span>User Information</span>
            <span onClick={toggleEdit} className="edit-icon has-text-info is-flex">
              {
                edit
                  ? <FaTimes />
                  : <FaEdit />
              }
            </span>
          </div>
          <p className="help is-danger center">{errors.error}</p>
          <div className="center has-text-primary">
            { loading? "Updating...": null }
          </div>


          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>First name</span>
          {     
           edit
            ?<Formik
              initialValues={{first_name: `${first_name || ''}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'first_name', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="first_name"/>
                  </div>
                  <div className="control">
                    <button 
                        type="submit"
                        className="button is-info" 
                        title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
            :<span className="">{first_name}</span>
          }
          </div>


          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Last name</span>
          {     
           edit
            ?<Formik
              initialValues={{last_name: `${last_name || ''}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'last_name', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="last_name"/>
                  </div>
                  <div className="control">
                    <button 
                        type="submit"
                        className="button is-info" 
                        title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
            :<span className="">{last_name}</span>
          }
          </div>


          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>ID number</span>
          {     
           edit
            ?<Formik
              initialValues={{id_num: `${id_num || ''}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'id_num', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="id_num"/>
                  </div>
                  <div className="control">
                    <button 
                        type="submit"
                        className="button is-info" 
                        title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
            :<span className="">{id_num}</span>
          }
          </div>

    <div style={{borderBottom: '2px solid #333'}} />


          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Bank name</span>
            { 
              edit
             ? <Formik
                initialValues={{bank_name: `${bank_name || ''}`}}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(updateUser(user, 'bank_name', values))
                }}
              >
                <Form>
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <Field className="input is-info" type="text" name="bank_name"/>
                    </div>
                    <div className="control">
                      <button 
                          type="submit" 
                          className="button is-info"
                          title='Click to edit'>
                        Edit
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
              : <span className="">{bank_name}</span>
            }
          </div>

          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Bank account number</span>
          {     
           edit
            ?<Formik
              initialValues={{bank_account_num: `${bank_account_num || ''}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'bank_account_num', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="bank_account_num"/>
                  </div>
                  <div className="control">
                    <button 
                        type="submit"
                        className="button is-info" 
                        title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
            :<span className="">{bank_account_num}</span>
          }
          </div>


          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Bank Account Name</span>
          {
            edit
              ?<Formik
                initialValues={{bank_account_name: `${bank_account_name || ''}`,}}
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(updateUser(user, 'bank_account_name', values, setSubmitting))
                }}
              >
                <Form>
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <Field className="input is-info" type="text" name="bank_account_name"/>
                    </div>
                    <div className="control">
                      <button 
                        type="submit"
                        className="button is-info" 
                        title='Click to edit'>
                        Edit
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
              :<span>{bank_account_name}</span>
          }
          </div>
      </div>

    </div>
    </section>
  );
};

export default Profile;

