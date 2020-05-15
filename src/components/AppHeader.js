import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {useLocation, Link, withRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faCogs} from '@fortawesome/free-solid-svg-icons'
import {setRule} from "../actions"


function AppHeader(props) {

  useEffect(() => {
    props.history.push('/dashboard')
  }, [])

  const addRule = async () => {
    await props.setRule({
      name: '',
      conditions: []
    })
    props.history.push('/add')
  }

  const location = useLocation()
  const urlPath = location.pathname
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/dashboard"> <FontAwesomeIcon icon={faCogs} aria-hidden="true"/> Rule Manager</Link>
      {
        urlPath.indexOf('/add') === -1 &&
        <button type="button"
                className="btn btn-success float-right add-button"
                onClick={addRule}>
          <FontAwesomeIcon icon={faPlus} aria-hidden="true"/>
        </button>
      }
    </nav>
  )
}

export default connect(
  null,
  {setRule})(withRouter(AppHeader))