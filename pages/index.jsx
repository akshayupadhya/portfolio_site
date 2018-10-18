import { Component } from 'react'
import { OneScroll } from '../components/OneScroll'
import {FirstScrollHome} from '../components/firstScrollHome'
import {SecondScrollHome} from '../components/secondScrollHome'
import '../scss/style.scss'
import '../scss/pages/index.scss'
export default class Home extends Component {
  render () {
    return (
      <div className="home">
        {/* <OneScroll className="first">
          name ,intro,resume,gitHub and twitter Links
        </OneScroll>  */}
        {/* <OneScroll>
          projects
        </OneScroll>  */}
        <FirstScrollHome/>
        <SecondScrollHome/>
        <OneScroll>
          About this project?maybe.... why not(talking about CSS grid,github api for projects to diplay stars and description,talking about projects route)
        </OneScroll> 
      </div>
    )
  }
}
