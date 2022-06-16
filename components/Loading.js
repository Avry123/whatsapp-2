import { Circle } from "better-react-spinkit"
import styled from 'styled-components'

function Loading() {
  return (
    <CenterElements>
        <CenterStuff>
          <Logo
            src="https://cdn-icons-png.flaticon.com/512/124/124034.png?w=740&t=st=1655185586~exp=1655186186~hmac=7c42328dc96115aa97757b7813367783d665d6395e1cd4d01719d9eb3b976f5f" 
            alt="whatsapp logo"
          />
          <Circle color="#3CBC28" size={60} />   
        </CenterStuff>
    </CenterElements>
  )
}

export default Loading


const CenterElements = styled.div`
height: 100vh;
display: grid;
place-items: center;
`

const Logo = styled.img`
height: 200px;
margin-bottom: 10px;
`

const CenterStuff = styled.div`
width: 100vw;
display: grid;
place-items: center;
`
