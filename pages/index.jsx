import { Component } from 'react'
import OneScroll from '../components/OneScroll'
// require('../styles.css')
import  "../scss/style.scss";
export default class Home extends Component {
  render () {
    return (
      <div>
        <OneScroll className="first">
          name ,intro,resume,gitHub and twitter Links
        </OneScroll> 
        <OneScroll>
          projects
        </OneScroll> 
        <OneScroll>
          About this project?maybe.... why not(talking about CSS grid,github api for projects to diplay stars and description,talking about projects route)
        </OneScroll> 
      </div>
    )
  }
}
