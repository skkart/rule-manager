
export const operators = [
  {
    value: '>',
    label: '>'
  },
  {
    value: '<',
    label: '<'
  },
  {
    value: '>=',
    label: '>='
  },
  {
    value: '<=',
    label: '<='
  },
  {
    value: '=',
    label: '='
  },
  {
    value: '!=',
    label: '!='
  },
  {
    value: 'in',
    label: 'in'
  },
  {
    value: 'not in',
    label: 'not in'
  },
  {
    value: 'has',
    label: 'has'
  }
]

export const criteriaToString = (ctr) => {
  if (ctr.type === 'CriteriaJoin') {
    return ctr.join ? ` ${ctr.join} ` : ''
  }
  return ctr.key ? `( ${ctr.key} ${ctr.opr} ${ctr.value} )` : ''
}