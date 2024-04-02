import {Component} from 'react'

import Header from '../Header'
// import UserContext from '../../context/UserContext'

import {
  RegisterContainer,
  RegisterContainer1,
  RegisterImage1,
  RegisterCon1,
  RegisterHeading1,
  LabelElement,
  InputElement,
  InputElement1,
  RegisterButton,
  P1,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {username: '', topic: 'ARTS_AND_CULTURE', error: ''}

  onSubmitForm = event => {
    event.preventDefault()
    const {username} = this.state

    if (username === '') {
      this.setState({error: 'Please enter your name'})
    } else {
      this.setState({error: '', username: '', topic: 'ARTS_AND_CULTURE'})
      const {history} = this.props
      history.replace('/')
    }
  }

  getInput1 = event => {
    this.setState({username: event.target.value})
  }

  getInput2 = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    const {username, topic, error} = this.state
    console.log(topic)
    return (
      <div>
        <Header />
        <RegisterContainer>
          <RegisterImage1
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <RegisterContainer1 onSubmit={this.onSubmitForm}>
            <RegisterHeading1>Let us join</RegisterHeading1>
            <RegisterCon1>
              <LabelElement htmlFor="input1">NAME</LabelElement>
              <InputElement
                value={username}
                onChange={this.getInput1}
                placeholder="Your Name"
                id="input1"
                type="text"
              />
            </RegisterCon1>
            <RegisterCon1>
              <LabelElement htmlFor="input2">TOPICS</LabelElement>
              <InputElement1
                value={topic}
                onChange={this.getInput2}
                id="input2"
              >
                {topicsList.map(each => (
                  <option key={each.id} value={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </InputElement1>
            </RegisterCon1>
            <RegisterButton type="submit">Register Now</RegisterButton>
            <P1>{error}</P1>
          </RegisterContainer1>
        </RegisterContainer>
      </div>
    )
  }
}

export default Register
