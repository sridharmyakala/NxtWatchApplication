import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  width: 100%;
  max-width: 1110px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`

export const FormContainer = styled.form`
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#181818')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 450px;
  padding: 30px;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 90%;
    padding: 20px;
  }
`
export const WebsiteLogoLightContainer = styled.img`
  display: ${props => (props.isTrue ? 'inline' : 'none')};
  width: 100px;
  align-self: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const WebsiteLogoDarkContainer = styled.img`
  display: ${props => (props.isTrue ? 'none' : 'inline')};
  width: 100px;
  align-self: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.lightMode ? ' #475569' : ' #f1f1f1')};
  font-weight: 500;
  margin-bottom: 6px;
  margin-top: 20px;
`
export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.lightMode ? ' #475569' : ' #f1f1f1')};
  font-weight: 400;
  width: 90%;
  outline: none;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.lightMode ? ' #d7dfe9' : ' #7e858e')};
  background-color: transparent;
  height: 35px;

  border-radius: 10px;
  padding: 5px 0px 5px 20px;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`
export const Checkbox = styled.input`
  background-color: transparent;
  height: 16px;
  width: 16px;
  outline: none;
  cursor: pointer;
`
export const CheckboxLabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.lightMode ? ' #475569' : ' #f1f1f1')};
  font-weight: 400;
  margin-left: 5px;
`
export const LoginButton = styled.button`
  width: 95%;
  margin-top: 20px;
  height: 40px;
  border: 0;
  background-color: #3b82f6;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0000;
  margin: 0;
  margin-top: 6px;
`
