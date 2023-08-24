import styled from 'styled-components'

export const VideosContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: none;
`
export const NoVideosImg = styled.img`
  width: 220px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: ${props => props.color};
  font-weight: 600;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const NoVideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
  font-weight: 400;
  margin: 0;
  margin-bottom: 20px;
`
export const NoVideosRetryButton = styled.button`
  height: 40px;
  padding: 10px 20px 10px 20px;
  border: 0;
  background-color: #4f46e5;
  border-radius: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;
`
