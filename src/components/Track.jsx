const { Card } = require("react-bootstrap")

const Track = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Text>
          <h6>{props.title}</h6>
          <small>{props.artistName}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Track