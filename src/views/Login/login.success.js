import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import saveToken from '../../shared/TokenStorage/saveToken'

const loginSuccess = () => {
  const lastLocation = sessionStorage.getItem('lastAppLocation')
  const defaultLocation = `/calendar`
  saveToken()

  return (
    <Route
      render={() => (
        <Redirect to={`${lastLocation ? lastLocation : defaultLocation}`} />
      )}
    />
  )
}

export default loginSuccess
