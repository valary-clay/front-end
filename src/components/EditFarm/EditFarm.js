import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import FormSection from '../FormSection';


import './styles.scss';


const EditFarm = () => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  const toggleEdit = (e) => {
    setEdit(!edit);
    dispatch({type: 'CLEAR_ERRORS'})
  }

  const errors = useSelector(state => state.farm.errors);
  const loading = useSelector(state => state.farm.loading);
  const { id } = useParams();
  const allFarms = useSelector(state => state.farm.allFarms);

  const [farm] = allFarms.filter(farm => farm.id === parseInt(id));

  useEffect( () => {
    dispatch({type: 'CLEAR_ERRORS'})
  },[dispatch])

  return (
    <div className="add-farm-section gradient">
      <div className="add-farm-card card-main">
          <div className="title is-size-6 farm-card__title">
            <span className="add-farm-card__heading edit-farm-card__heading">
                  {`${farm.name}`}
            </span>
            <span onClick={toggleEdit} className="edit-icon has-text-info is-flex">
              {
                edit
                  ? <FaTimes />
                  : <FaEdit />
              }
            </span>
          </div>
        <div className="add-farm-card__content">
          <p className="help is-danger center is-size-5">{errors.error}</p>
        </div>
        <div className="center has-text-primary">
          { loading? "Updating...": null }
        </div>
          
      <FormSection field="name" edit={edit} farm={farm} />
      <FormSection field="location" edit={edit} farm={farm} />
      <FormSection field="description" edit={edit} farm={farm} />
      <FormSection field="start_date" edit={edit} farm={farm} />
      <FormSection field="units" edit={edit} farm={farm} />
      <FormSection field="margin" edit={edit} farm={farm} />
      <FormSection field="price" edit={edit} farm={farm} />
      <FormSection field="duration" edit={edit} farm={farm} />

      </div>

    </div>
  )

}

export default EditFarm;
