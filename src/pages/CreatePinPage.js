import React from 'react'
import CreatePin from '../container/CreatePin'

const CreatePinPage = (props) => {
  return (
    <CreatePin token={props.match.params.token} />
  )
}

export default CreatePinPage
