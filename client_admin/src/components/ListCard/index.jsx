import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListCard = (props) => {
  const { items, keySelector, nameSelector, showKey } = props

  return (
    <Card bg="dark" text="white">
      <Card.Header className="d-flex justify-content-between align-items-end">
        Hello header
      </Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => {
          const itemKey = keySelector(item)
          const itemName = nameSelector(item)
          return (
            <ListGroup.Item
              key={itemKey}
              action
              as={Link}
              to={itemKey}
              className="user-select-none"
            >
              <div className="d-flex justify-content-between">
                <h3>{itemName}</h3>
                {showKey ?? <h5>{itemKey}</h5>}
              </div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </Card>
  )
}

export default ListCard
