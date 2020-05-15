import axios from 'axios'
import {FETCH_RULES, SET_RULE} from "./types"
import config from '../config'
import {store} from 'react-notifications-component'

// Common Action to be used by Many dispatch actions like fetchRuleList,
const fetchRuleList = async (dispatch) => {
  try {
    const res = await axios.get(config.dummyApi)
    if (res.data && res.data.rules) {
      dispatch({type: FETCH_RULES, payload: res.data.rules})
    }
  } catch (e) {
    console.log('Error', e)
  }
}

//Action to Get list of Rules
export const initRuleList = () => fetchRuleList

// Action to Set Rule on Add or Edit
export const setRule = (ruleObj) => async dispatch => {
  dispatch({ type: SET_RULE, payload: ruleObj })
}

// Action to delete rule
// API --> DELETE /api/rule/[ruleID]
export const deleteRule = (ruleId) => async dispatch => {
  let success = true
  try {
    await axios.delete(`${config.ruleApi}/${ruleId}`)
    // After delete reload the RuleList
    await fetchRuleList(dispatch)
  } catch (e) {
    console.log('Error', e)
    success = false
  } finally {
    store.addNotification({
      title: success ? 'Success' : 'Error: Try Again later',
      message: success ? 'Rule Deleted' : 'Delete Request failed',
      type: success ? 'success' :'danger',
      insert: 'top',
      container: 'top-center',
      animationIn: ['animated', 'fadeIn', 'jackInTheBox'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
        pauseOnHover: true
      }
    })
  }
}


// Action to Edit rule
// API --> PUT /api/rule/[ruleID]
export const editRule = (updatedRule) => async dispatch => {
  let success = true
  try {
    await axios.put(`${config.ruleApi}/${updatedRule.id}`, updatedRule)
    // After Edit reload the RuleList
    await fetchRuleList(dispatch)
  } catch (e) {
    console.log('Error', e)
    success = false
  } finally {
    store.addNotification({
      title: success ? 'Success' : 'Error: Try Again later',
      message: success ? 'Rule Updated' : 'Update Request failed',
      type: success ? 'success' :'danger',
      insert: 'top',
      container: 'top-center',
      animationIn: ['animated', 'fadeIn', 'jackInTheBox'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
        pauseOnHover: true
      }
    })
  }
}


// Action to Add rule
// API --> POST /api/rule
export const addRule = (addRule) => async dispatch => {
  let success = true
  try {
    await axios.post(config.ruleApi, addRule)
    // After Post reload the RuleList
    await fetchRuleList(dispatch)
  } catch (e) {
    success = false
    console.log('Error', e)
  } finally {
    store.addNotification({
      title: success ? 'Success' : 'Error: Try Again later',
      message: success ? 'Rule Added' : 'Add Request failed',
      type: success ? 'success' :'danger',
      insert: 'top',
      container: 'top-center',
      animationIn: ['animated', 'fadeIn', 'jackInTheBox'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
        pauseOnHover: true
      }
    })
  }
}