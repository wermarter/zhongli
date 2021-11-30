import { Card, ListGroup } from 'react-bootstrap'

const DetailCard = (props) => {
  // const {} = props

  return (
    <Card border="secondary">
      <Card.Header className="d-flex justify-content-between">
        <h1>Details</h1>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <h5 className="text-center">{JSON.stringify(props, null, 2)}</h5>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default DetailCard
