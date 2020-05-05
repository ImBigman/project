import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
import Table from './Table/Table'
import axios from 'axios'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";

class Home extends Component {
  constructor(){
    super()
    this.state = {
      movie_modules: []
    }
  }

  componentDidMount(){
    axios.get('/episodes.json')
    .then(data => {
      this.setState({ movie_modules: data.data.data})
    })
  }

  handleVideoChange(item, event) {
    event.preventDefault()

    let movie_modules = [...this.state.movie_modules]

    item.active = !item.active

    this.setState({movie_modules})
  }

  render() {
    return(
      <div>
         <Jumbotron/>
         <Table handleVideoChange={this.handleVideoChange.bind(this)} movie_modules={this.state.movie_modules}/>
         <div id='up-to-top'><ScrollUpButton /></div>
         <Footer />
      </div>

    )
  }
}

export default Home
