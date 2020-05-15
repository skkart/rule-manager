import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {initRuleList, deleteRule, setRule} from '../actions'
import {criteriaToString} from "../helpers/RuleConfiguration"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'


function Dashboard(props) {
  const [loading, setLoading] = useState(false)

  const initRuleList = async () => {
    try {
      setLoading(true)
      if (!props.rules || !props.rules.length) {
        await props.initRuleList()
      }
    } catch (e) {
      console.log('Failed to load user chats', e)
    } finally {
      setLoading(false)
    }
  }


  // On Mount, Call the Rule List to fetch all Rules from BE
  useEffect(() => {
    initRuleList()
  }, [])

  const renderEquation = (cond) => (
    cond.map((ctr, i) => (<span key={i} className="m-1">{criteriaToString(ctr)}</span>))
  )

  const editRuleAction = (rl, i) => {
    props.setRule(rl)
    props.history.push('/edit')
  }

  const deleteRuleAction = async (rl, i) => {
    await props.deleteRule(rl.id)
  }

  const loadRuleTable = () => (
    <div className="table-responsive-md mt-4">
      <table className="table table-info table-hover table-bordered">
        <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Rule Name</th>
          <th scope="col">Conditions</th>
          <th scope="col" style={{width: '80px'}}>Action</th>
        </tr>
        </thead>
        <tbody>
        {props.rules && props.rules.map((rl, i) => (
          <tr key={rl.id}>
            <th scope="row">{i}</th>
            <td>{rl.name}</td>
            <td>{renderEquation(rl.conditions)}</td>
            <td>
              <span className="m-1 mr-2 pointer" onClick={() => editRuleAction(rl, i)}><FontAwesomeIcon icon={faEdit}
                                                                                                  aria-hidden="true"/></span>
              <span className="m-1 pointer" onClick={() => deleteRuleAction(rl, i)}><FontAwesomeIcon icon={faTrash}
                                                                                               aria-hidden="true"/></span>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="dashbord">
      {
        loading ? (
          <div className="m-5 text-center">
            <div className="spinner-border text-primary text-center" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          loadRuleTable()
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  rules: state.rules
})

export default connect(
  mapStateToProps,
  {initRuleList, deleteRule, setRule})(Dashboard)