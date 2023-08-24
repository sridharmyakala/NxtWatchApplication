import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  min-height: 100vh;
`
export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.color};
  font-weight: 600;
  text-align: center;
  margin: 0;
  margin-top: 10px;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  font-weight: 400;
  text-align: center;
  margin: 0;
  margin-top: 10px;
`
export const FailureRetryBtn = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`
