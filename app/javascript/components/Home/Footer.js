import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'
import styled from 'styled-components'


const Container = styled.div`
  height: 60px;
  background: url('/assets/white_n.png') 50% 50% no-repeat;
  background-size: 50px;
`
const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <Container></Container>
           &copy; {new Date().getFullYear()} Copyright: all rights reserved by <a href="https://www.youtube.com/channel/UCvasfOIImo7D9lQkb1Wc1tw/about"> ProConf </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
