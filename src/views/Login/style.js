import styled from 'styled-components'
import { Colors } from '../../shared/Colors'

const { lightGreen600: spanTitleColor, blue500: linkBackground } = Colors

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  img {
    max-width: 250px;
  }
  span {
    color: ${spanTitleColor};
  }
  h1 {
    color: ${linkBackground};
    text-align: center;
    margin: 2em;
  }
`

const Link = styled.a`
  display: block;
  background-color: ${linkBackground};
  color: white;
  width: 18.75rem;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  border-radius: 3px;
`

export { StyledHome, Link }
