import styled, { css } from 'styled-components'

const InputField = styled.div`
  position: relative;
  margin-bottom: 2.6rem;
  width: 18.75rem;
`

const InputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 0.75rem;
  font-size: 1.125rem;
  color: #000;
  transition: all 0.2s ease-in-out;

  ${props =>
    props.empty &&
    css`
      top: -0.75rem;
      opacity: 0.6;
      font-size: 0.75rem;
    `}
`

const Line = styled.div`
  position: relative;
  width: 100%;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    bottom: 1px;
    background: #007ac9;
    transition: all 0.3s ease-in-out;
  }

  ::before {
    left: 50%;
  }

  ::after {
    right: 50%;
  }
`

const TextInput = styled.input`
  display: block;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.12);
  width: 100%;
  padding: 1.5rem 0.75rem 0.75rem 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px 5px 0px 0px;

  :focus {
    outline: none;
  }

  :focus ~ ${InputLabel} {
    top: -0.75rem;
    opacity: 0.6;
    font-size: 0.75rem;
  }

  :focus ~ ${Line}::before, :focus ~ ${Line}::after {
    width: 50%;
  }
`
const HelperText = styled.div`
  font-size: 0.75rem;
  padding-top: 0.125rem;
  padding-left: 0.75rem;
`
export { InputField, InputLabel, TextInput, Line, HelperText }
