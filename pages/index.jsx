import { Component } from 'react'
import {FirstScrollHome} from '../components/firstScrollHome'
import {SecondScrollHome} from '../components/secondScrollHome'
import {ThirdScrollHome} from '../components/thidScrollHome'
import '../scss/style.scss'
import '../scss/pages/index.scss'
export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <FirstScrollHome/>
        <SecondScrollHome/>
        <ThirdScrollHome/> 
      </div>
    )
  }
}
