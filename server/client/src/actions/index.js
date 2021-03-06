import Axios from 'axios'
import { FETCH_USER, FETCH_SURVEYS } from './types'

export const fetchUser = () => async (dispatch) => {
  const response = await Axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: response.data })
}

export const handleToken = (token) => async (dispatch) => {
  const response = await Axios.post('/api/stripe', token)
  dispatch({ type: FETCH_USER, payload: response.data })
}

export const submitSurvey = (values, history) => async (dispatch) => {
  const response = await Axios.post('/api/surveys', values)

  history.push('/surveys')
  dispatch({ type: FETCH_USER, payload: response.data })
}

export const fetchSurveys = () => async (dispatch) => {
  const response = await Axios.get('/api/surveys')
  dispatch({ type: FETCH_SURVEYS, payload: response.data })
}
