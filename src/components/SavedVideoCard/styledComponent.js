import styled from 'styled-components'

export const SavedContainer = styled.li`
  width: 100%;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 30px;
  }
`

export const TrendingListItem = styled.div`
  //   background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`
export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
export const TrendingTitle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  width: 500px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const TrendingChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
`
export const TrendingViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
`
export const TrendingDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const RemoveButton = styled.button`
  height: 40px;
  padding: 10px 20px 10px 20px;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #3b82f6;
  border: 0;
  outline: 0;
  cursor: pointer;
  color: #fff;
  border-radius: 10px;
  align-self: flex-start;
  margin-right: 20px;
  @media screen and (max-width: 767px) {
    align-self: center;
  }
`
