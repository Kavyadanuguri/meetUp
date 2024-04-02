import React from 'react'

const userContext = React.createContext({
  userName: '',
  topicName: '',
  onUserValue: () => {},
  onTopic: () => {},
})

export default userContext
