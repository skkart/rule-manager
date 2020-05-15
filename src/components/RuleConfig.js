import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Criteria from "./Criteria"
import CriteriaJoin from "./CriteriaJoin"
import { store } from 'react-notifications-component'
import {editRule, addRule} from '../actions'
import {criteriaToString} from "../helpers/RuleConfiguration"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function RuleConfig(props) {
  const [criteriaList, setCriteriaList] = useState([])
  const [errorArr, setErrorArr] = useState([])
  const [ruleName, setRuleName] = useState('')
  const [preview, setPreview] = useState(false)


  // On Mount, Call the Rule List to fetch all Rules from BE
  useEffect(() => {
    setRuleName(props.formRule && props.formRule.name)
    setCriteriaList(props.formRule && props.formRule.conditions)
  }, [])

  const addCriteria = () => {
    // Before ADD New Criteria, Validate for no errors in form
    if (document.getElementsByClassName("error").length) {
      store.addNotification({
        message: 'Please fix all the Error before new Criteria!!!',
        type: 'warning',
        insert: 'top',
        container: 'top-center',
        animationIn: ['animated', 'fadeIn', 'jackInTheBox'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          pauseOnHover: true
        }
      })
      return
    }
    let newArr = []
    // If Criterias exists, Add JOIN condition & Criteria together
    if (criteriaList.length > 0) {
      newArr.push({
        type: 'CriteriaJoin', toString() {
          return this.join ? ` ${this.join} ` : ''
        }
      })
    }
    newArr.push({
      type: 'Criteria', key: '', value: '', opr: ''
    })
    setCriteriaList([...criteriaList, ...newArr])
  }

  const updateCriteria = (index, updatedMdl) => {
    criteriaList[index] = {...criteriaList[index], ...updatedMdl}
  }

  const updateCriteriaJoin = (index, joinVal) => {
    criteriaList[index].join = joinVal
  }

  const clickPreview = () => {
    if (document.getElementsByClassName("error").length) {
      // Show error
      store.addNotification({
        message: 'Please fix all the Error to Preview!!!',
        type: 'danger',
        insert: 'top',
        container: 'top-center',
        animationIn: ['animated', 'fadeIn', 'jackInTheBox'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          pauseOnHover: true
        }
      })
      return
    }
    setPreview(true)
  }

  const onRuleSubmit = async () => {
    const ruleObj = {
      id: props.formRule.id,
      name: ruleName,
      conditions: criteriaList
    }
    if (props.formRule.id) {
      // Edit Flow
      await props.editRule(ruleObj)
    } else {
      // Add Flow
      await props.addRule(ruleObj)
    }
    props.history.push('/dashboard')
  }

  return (
    <div className="card text-center">
      <div className="card-header">
        Rule ({props.formRule && props.formRule.id ? 'Edit' : 'Add'})
      </div>
      <div className="card-body">
        <div className="form-group">
          <div className="input-group col-md-4 p-0">
            <div className="input-group-prepend">
              <span className="input-group-text">Name</span>
            </div>
            <input type="text" className="form-control"
                   aria-describedby="inputGroupPrepend"
                   disabled={!!preview}
                   value={ruleName}
                   onChange={(e) => setRuleName(e.target.value)}
            />
          </div>
          {!ruleName &&
          <span className="error ml-3 float-left">This field is required!</span>}
        </div>
        <div className="ruleConfig mt-5 mb-5">
          {
            !preview ? (criteriaList.map((ctr, i) => (
                ctr.type === 'Criteria' ?
                  <Criteria rule={ctr} index={i} key={i} onChange={updateCriteria}/> :
                  <CriteriaJoin join={ctr.join} index={i} key={i} onChange={updateCriteriaJoin}/>
              )))
              :
              (<div className="card bg-light mb-3">
                <div className="card-header">Rule Conditions</div>
                <div className="card-body">
                  <p className="card-text">
                    {criteriaList.map((ctr, i) => (<span key={i} className="m-1">{criteriaToString(ctr)}</span>))}
                  </p>
                </div>
              </div>)
          }
        </div>
        {!preview && <a className="btn btn-success" onClick={addCriteria}><FontAwesomeIcon icon={faPlus} aria-hidden="true"/> Criteria</a>}
      </div>
      <div className="card-footer text-muted">
        {
          !preview ?
            [<button key={1} type="button" className="btn btn-danger float-left" onClick={() => props.history.push('/dashboard')}>Cancel</button>,
              <button key={2} type="button" className="btn btn-primary float-right" onClick={clickPreview}>Preview</button>]
            :
            [<button key={3} type="button" className="btn btn-danger float-left" onClick={() => setPreview(false)}>Back</button>,
              <button key={4} type="button" className="btn btn-success float-right" onClick={onRuleSubmit}>Submit</button>]
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  formRule: state.formRule
})

export default connect(
  mapStateToProps,
  {editRule, addRule})(RuleConfig)