import React, { Component } from 'react'
import Item from './Item'
import ActiveItem from './ActiveItem'
import Smm from '../Smm'

class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const items = this.props.movie_modules.map((data)=> {
      let handleVideoChange = this.props.handleVideoChange.bind(this, data)

      return (
        data.active ?
        <ActiveItem handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} url={data.url}/> :
        <Item handleVideoChange={handleVideoChange} key={data.id} title={data.title} description={data.description} thumbs={data.thumbs}/>
         )
    })

    return(
      <div className="pb-5">
        <div className="container">
          <div className="text-center">
          <Smm/>
            <h4 className="pt-5 pb-2">Episodes</h4>
          </div>
          {items}
        </div>
      </div>
    )
  }
}

export default Table
