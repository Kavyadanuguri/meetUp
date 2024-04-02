import {NotContainer1, Heading1, Paragraph, Image1} from './styledComponents'

const NotFound = () => {
  console.log('k')
  return (
    <NotContainer1>
      <Image1
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <Heading1>Page Not Found</Heading1>
      <Paragraph>
        We are sorry, the page you requested could not be found.
      </Paragraph>
    </NotContainer1>
  )
}

export default NotFound
