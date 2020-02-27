import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addFarm } from '../../redux/actions/farmerActionCreators';


import './styles.scss';


const AddFarm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector(state => state.farm.errors);
  const loading = useSelector(state => state.farm.loading);
  const showNotification = useSelector(state => state.farm.showNotification);

  useEffect( () => {
    dispatch({type: 'CLEAR_ERRORS'})
  },[dispatch])

  const handleSubmit = (e, values) => {
    e.preventDefault();
    dispatch(addFarm(values, history));
  }
  const formik = useFormik({
    initialValues: {
        farmName: '',
        description:'',
        location:'',
        units:'',
        margin:'',
        price:'',
        start_date: '',
        duration: ''
      },
    validationSchema: Yup.object({
      farmName: Yup.string().required('Please provide the name of the farm'),
      description: Yup.string().required('Please provide a decription of the farm'),
      location: Yup.string().required('Please provide the location of the farm'),
      units: Yup.string().required('Please provide number of units for the farm'),
      margin: Yup.string().required('Please provide profit margin for the farm'),
      price: Yup.string().required('Please provide price per unit for the farm'),
      duration: Yup.string().required('Please provide duration till harvest for the farm'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      //dispatch(addFarm(values, history, setSubmitting));
    },
  });

  return (
    <div className="add-farm-section gradient">
      {showNotification
          ? (<div className="notification basic-notification is-success is-size-5">
              <button 
                  className="delete"
                  onClick={() => dispatch({type: 'SUCCESS'})}>
              </button>
              Farm successfully created!
            </div>
          )
          : null
      }
      <div className="add-farm-card card-main">
        <h2 className="add-farm-card__heading"> {`Add a new farm`}</h2>
        <div className="add-farm-card__content">
          <p className="help is-danger center is-size-5">{errors.error}</p>
           <form className="add-farm-form" onSubmit={(e) => {
             handleSubmit(e, formik.values)
            }
           } >

            <div className="field">
              <div className="control">
                <input 
                  id="farmName"
                  type="text" 
                  name="farmName" 
                  value={formik.values.farmName} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  className="input is-info" 
                  placeholder="Name of farm"
                />
              </div>
            { formik.touched.farmName && formik.errors.farmName? (
              <p className="help is-danger">{formik.errors.farmName}</p>
            ): null }
            </div>
        
            <div className="field">
              <div className="control">
                <input 
                  type="text" 
                  name="location" 
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input is-info"
                  placeholder="Farm location"/>
              </div>
            { formik.touched.location && formik.errors.location? (
              <p className="help is-danger">{formik.errors.location}</p>
            ): null }
            </div>


            <div className="field">
              <div className="control">
                <input 
                  type="text" 
                  name="duration" 
                  value={formik.values.duration}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input is-info"
                  placeholder="Duration till harvest"/>
              </div>
            { formik.touched.duration && formik.errors.duration? (
              <p className="help is-danger">{formik.errors.duration}</p>
            ): null }
            </div>




            <div className="field">
              <div className="control">
                <textarea
                  name="description" 
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="textarea is-info"
                  placeholder="A description of the farm, what's planted etc..."/>
              </div>
            { formik.touched.description && formik.errors.description? (
              <p className="help is-danger">{formik.errors.description}</p>
            ): null }
            </div>


            <div className="field">
              <div className="control">
                <input 
                  type="number" 
                  name="units" 
                  value={formik.values.units}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input is-info"
                  placeholder="Number of units - A unit is measured at a quarter an acre"/>
              </div>
            { formik.touched.units && formik.errors.units? (
              <p className="help is-danger">{formik.errors.units}</p>
            ): null }
            </div>


            <div className="field">
              <div className="control">
                <input 
                  type="number" 
                  name="margin" 
                  value={formik.values.margin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input is-info"
                  placeholder="Profit margin"/>
              </div>
            { formik.touched.margin && formik.errors.margin? (
              <p className="help is-danger">{formik.errors.margin}</p>
            ): null }
            </div>

            <div className="field">
              <div className="control">
                <input 
                  type="number" 
                  name="price" 
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input is-info"
                  placeholder="Price per unit"/>
              </div>
            { formik.touched.price && formik.errors.price? (
              <p className="help is-danger">{formik.errors.price}</p>
            ): null }
            </div>

        
            <div className="field">
              <label className="label">Start date</label>
              <div className="control">
                <input 
                  type="date" 
                  name="start_date" 
                  value={formik.values.start_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input is-info"
                  />
              </div>
            { formik.touched.start_date && formik.errors.start_date? (
              <p className="help is-danger">{formik.errors.start_date}</p>
            ): null }
            </div>

            <button 
              type="submit" 
              className={`button is-fullwidth button--primary ${loading? 'is-loading': ''}`}
              style={{ marginTop: '0.9rem' }}>
              Add Farm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFarm;
