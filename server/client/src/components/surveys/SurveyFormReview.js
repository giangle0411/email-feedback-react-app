import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import formFields from './formFields'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions'

const SurveyFormReview = (props) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{props.formValues[name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h4>Please confirm your entries</h4>
      {reviewFields}
      <button className="grey btn-flat white-text" onClick={props.onCancel}>
        Back
      </button>
      <button
        className="right green btn-flat white-text"
        onClick={() => props.submitSurvey(props.formValues, props.history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))
