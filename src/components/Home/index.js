import {Link} from 'react-router-dom'
import Header from '../Header'

import {
  HomeContainer1,
  HomeHeading1,
  HomeP1,
  HomeButton,
  HomeImage1,
} from './styledComponents'

const Home = () => {
  console.log('kavya')
  return (
    <div>
      <Header />
      <HomeContainer1>
        <HomeHeading1>Welcome to Meetup</HomeHeading1>
        <HomeP1>Please register for the topic</HomeP1>
        <Link to="/register">
          <HomeButton type="button">Register</HomeButton>
        </Link>
        <HomeImage1
          alt="meetup"
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        />
      </HomeContainer1>
    </div>
  )
}

export default Home
