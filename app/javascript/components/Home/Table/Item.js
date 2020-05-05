import React from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
  padding: 10px 20px;
  font-size: 16px;
  color: black !important;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 5px 5px 5px black;
  -webkit-box-shadow: 5px 5px 5px black;
  box-shadow: 2px 2px 2px black;
`

const Item = (props) => {
 return(
  <div className="row pt-4 pb-4">
    <div className="col-md-10 offset-md-1">
      <div>
        <div className="card px-5">
          <div className="row">
            <div className="col-md-4">
              <Thumbnail thumbs={props.thumbs}/>
            </div>
            <div className="col-md-8">
              <div className="pt-4 pb-4">
                <h4>#{props.title}</h4>
                <p>{props.description}</p>
                <div className="cta-wrapper">
                  <Button onClick={props.handleVideoChange} className="btn cta-btn">Смотреть</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}

export default Item
