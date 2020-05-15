import React, {useState} from 'react'

export default function CriteriaJoin(props) {
  const [join, setJoin] = useState(props.join)

  const onJoinChange = (e) => {
    setJoin(e.target.value)
    props.onChange(props.index, e.target.value)
  }

  return (
    <div className="text-center m-5">
      <div className="input-group ml-4">
        <div className="input-group-prepend">
          <label className="input-group-text">Action</label>
        </div>
        <select className="custom-select" value={join} onChange={onJoinChange}>
          <option value="">Choose ...</option>
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </div>
      {!join &&
      <span className="error ml-5 float-left">This condition is required!</span>}
    </div>
  )
}