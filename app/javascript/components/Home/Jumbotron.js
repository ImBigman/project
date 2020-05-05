import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 320px;
  background: url('/assets/headers_n.png') 50% 70% no-repeat;
  background-size: 48%;
  padding: 50px 0;
  color: #fff;
`
const Header = styled.h1`
  color: black;
  font-weight: 700;
  font-size: 2vw;
  line-height: 52px;
`

const Jumbotron = () => {
  return (
    <Section className="home-section--1">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-1 mr-2">
            <Header>видео с канала</Header>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Jumbotron
