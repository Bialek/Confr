import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { StyledHome, Link } from './style'
import getAzureAuthorizationUrl from '../../utils/getAzureAuthorizationUrl'
import isAuthorized from '../../utils/isAuthorized'
import { FormattedMessage } from 'react-intl'

const Login = props => {
  return isAuthorized() ? (
    <Route render={() => <Redirect to={{ pathname: '/calendar' }} />} />
  ) : (
    <StyledHome>
      <img src="confr-logo.jpg" alt="Welcome to ConfR" />
      <FormattedMessage id={'welcome'} values={{ name: 'Conf' }}>
        {txt => (
          <h1>
            {txt}
            <span>R</span>
          </h1>
        )}
      </FormattedMessage>
      <FormattedMessage id={'signIn'}>
        {txt => <Link href={getAzureAuthorizationUrl()}>{txt}</Link>}
      </FormattedMessage>
    </StyledHome>
  )
}
export default Login
