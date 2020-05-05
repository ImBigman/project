import React from 'react'
import styled from 'styled-components'

const Thumbs = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -moz-box-shadow: 5px 5px 5px black;
  -webkit-box-shadow: 5px 5px 5px black;
  box-shadow: 2px 2px 2px black;
`
const Thumbnail = (props) => {
  return (
    <div className="pt-4 pb-4">
        <Thumbs  src={props.thumbs}></Thumbs>
    </div>
  )
}

export default Thumbnail
