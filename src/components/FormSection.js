import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { updateFarm } from '../redux/actions/farmActionCreators';

const FormSection = ({ field, edit, farm }) => {
  const dispatch = useDispatch()

  const type = field === "description"
              ? "textarea"
              : ["margin", "units", "price"].includes(field)
              ? "number"
              : field === "start_date"
              ? "date"
              : "text"


  const capitalize = (value) => {
    if (value === "start_date") {
        value = "start_date".split("_").join(" ")
    }
    return value[0].toUpperCase() + value.slice(1);
  }


  return (

    <div className="form__section">
      <label className="form__label" style={{color: '#333'}}>
        {capitalize(field)}
      </label>
      { 
        edit
       ? <Formik
          initialValues={{[field]: `${farm[field] || ''}`}}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(updateFarm(farm, field, values))
          }}
        >
          <Form>
            <div className="field has-addons">
              <div className="control is-expanded">
                <Field 
                  className="input is-info form__element" 
                  type={field==="description"? "": type }
                  name={`${field}`}
                  component={field==="description"? "textarea": ""}
                  />
              </div>
              <div className="control">
                <button 
                    type="submit" 
                    className="button is-info"
                    title='Update'>
                  Edit
                </button>
              </div>
            </div>
          </Form>
        </Formik>
        : <p className="form__element--not-editable">{farm[field]}</p>
      }
    </div>

  )
}

export default FormSection;
