import styled from 'styled-components'

export const ListItemContainer = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  background: none;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const ProfileImg = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  margin: 18px;
`
export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin: 0;
  margin-bottom: 10px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => props.color};
  margin: 0;
  margin-bottom: 10px;
`
export const ViewsAndDate = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: ${props => props.color};
  margin: 0;
  margin-bottom: 30px;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
