import React, { useState } from 'react'
import {
  InputField,
  TextInput,
  InputLabel,
  Line,
  HelperText,
} from './InputText.style'

const InputText = props => {
  const [text, setText] = useState('')

  return (
    <InputField>
      <TextInput
        type="text"
        value={text}
        id={props.id}
        required={props.required}
        onChange={e => setText(e.target.value)}
      />
      <Line />
      <InputLabel htmlFor={props.id} empty={text ? true : null}>
        {props.label ? props.label : 'Label'}
      </InputLabel>
      <HelperText>{props.helper ? props.helper : 'Helper text*'}</HelperText>
    </InputField>
  )
}

export default InputText
