import React from 'react'
import styled from 'styled-components'

const Telegram = styled.div`
  height: 30px;
  background: url('/assets/telegram.svg') 50% 50% no-repeat;
  background-size: 24px;
  padding: 5px 0;
  text-decoration: none;
  cursor: pointer;
`
const Soundcloud = styled.div`
  height: 30px;
  background: url('/assets/soundcloud.svg') 50% 50% no-repeat;
  background-size: 24px;
  padding: 5px 0;
  text-decoration: none;
  cursor: pointer;
`
const Youtube = styled.div`
  height: 30px;
  background: url('/assets/youtube.svg') 50% 50% no-repeat;
  background-size: 24px;
  padding: 5px 0;
  text-decoration: none;
  cursor: pointer;
`
const Twitter = styled.div`
  height: 30px;
  background: url('/assets/twitter.svg') 50% 50% no-repeat;
  background-size: 24px;
  padding: 5px 0;
  text-decoration: none;
  cursor: pointer;
`
const Apple = styled.div`
  height: 30px;
  background: url('/assets/itunes.svg') 50% 50% no-repeat;
  background-size: 24px;
  padding: 5px 0;
  text-decoration: none;
  cursor: pointer;
`

const Smm = () => {
  return (
    <div className="col-md-10 offset-md-1 pb-3">
      <div className="row d-flex justify-content-center">
        <div className="col-md-1">
          <a onClick={(e) => { e.preventDefault(); window.location.href='https://www.youtube.com/channel/UCvasfOIImo7D9lQkb1Wc1tw/videos';}}>
            <Youtube></Youtube>
          </a>
        </div>
        <div className="col-md-1">
          <a onClick={(e) => { e.preventDefault(); window.location.href='https://soundcloud.com/proconf';}}>
            <Soundcloud></Soundcloud>
          </a>
        </div>
        <div className="col-md-1">
          <a onClick={(e) => { e.preventDefault(); window.location.href='https://podcasts.apple.com/by/podcast/podcast-proconf/id1455023466';}}>
            <Apple></Apple>
          </a>
        </div>
        <div className="col-md-1">
          <a onClick={(e) => { e.preventDefault(); window.location.href='https://twitter.com/ProconfShow';}}>
            <Twitter></Twitter>
          </a>
        </div>
        <div className="col-md-1">
          <a onClick={(e) => { e.preventDefault(); window.location.href='https://t.me/proConf%C2%A0';}}>
            <Telegram></Telegram>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Smm
