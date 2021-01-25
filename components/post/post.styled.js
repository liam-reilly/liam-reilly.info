import styled from "styled-components"
import { device } from "../../style/device"

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 1rem auto 1rem auto;
  padding: 1rem;
  border: 2px solid ${({theme}) => theme.alternativeHighlight};
  font-size: 1.4rem;
  
  .header {
    display: grid;
    grid-template-columns: 5rem auto 5rem;
    align-items: center;
  }

  hr {
    display: block;
    border: 0 solid #000;
    border-bottom: 1px solid #C21F39;
    width: 100%;
  }

  .calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 5rem;
    min-height: 5rem;
    background-color: ${({theme}) => theme.alternativeHighlight};
    color: ${({theme}) => theme.background};
    font-size: 1.75rem;
  }

  .title {
    color: ${({theme}) => theme.alternativeHighlight};
    margin: 0 0 0 1rem;
    font-size: 2rem;
  }
  
  p {
    line-height: 2.5rem;
  }

  p:first-child {
    margin-top: 1rem;
  }
  p:last-child {
    margin-bottom: 1rem;
  }

  .post_link {
    font-size: 1.4rem;
    padding: .5rem 0 .5rem 0;
  }

  .post_link a {
    color: #C21F39;
    border-bottom: #C21F39 1px dashed;
  }
  .post_link a:visited {
    color: #C21F39;
  }

  @media only screen and ${device.tablet} {
    font-size: 2rem;

    p {
      line-height: 3rem;
    }

    .title {
      font-size: 3rem;
    }
    
    .post_link {
      font-size: 2rem;
      padding: .5rem 0 .5rem 0;
    }
  }
  
`

export default StyledPost