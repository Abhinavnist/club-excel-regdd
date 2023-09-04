import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const MainCont = styled.div`
.navbar{
display: flex;
align-items: center;
width: 100vw;
height: 80px;
padding-left: 20px;
background: rgba(0, 122, 255, 0.25);
}
.club-txt{
color:#007AFF;
font-family: 'Jura';
font-size: 45px;
font-weight: 600;
margin-top: -5px;
margin-left: 30px;
}
.active{
  background: #007AFF;
}
.inactive{
  
}

`

function Navbar() {
  return (
    <MainCont>
    <div className='navbar'> 
      <div className='logo-img'><Image src={"/clubexcellogo.png"} height={50} width={50}/></div>
      <div className='club-txt'>Club Excel</div>

    </div>
    </MainCont>
  )
}

export default Navbar
