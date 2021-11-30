import { useState } from 'react'
import { Card, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListCard = (props) => {
  const {
    label,
    items = [],
    keySelector,
    nameSelector,
    linkSelector,
    showKey,
    showButton,
    handleAdd,
    handleRemove,
  } = props

  const [query, setQuery] = useState('')

  const listItems = items
    .filter(
      (item) =>
        keySelector(item).toUpperCase().includes(query.toUpperCase()) ||
        nameSelector(item).toUpperCase().includes(query.toUpperCase()),
    )
    .map((item) => {
      const itemKey = keySelector(item)
      const itemName = nameSelector(item)
      return (
        <ListGroup.Item
          key={itemKey}
          action
          as={Link}
          to={linkSelector(item)}
          className="user-select-none"
        >
          <div className="d-flex justify-content-between">
            {itemName}
            {showKey ? <div>[{itemKey}]</div> : null}
          </div>
        </ListGroup.Item>
      )
    })

  return (
    <Card border="secondary">
      <Card.Header className="d-flex justify-content-between">
        <FloatingLabel className="flex-grow-1" label={label}>
          <Form.Control
            placeholder="placeholder"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FloatingLabel>
        {showButton ? (
          <>
            <Button variant="secondary" className="mx-1" onClick={handleAdd}>
              +
            </Button>
            <Button variant="secondary" onClick={handleRemove}>
              -
            </Button>
          </>
        ) : null}
      </Card.Header>
      <ListGroup variant="flush">
        {listItems.length !== 0 ? (
          listItems
        ) : (
          <ListGroup.Item>
            <h5 className="text-center">No result :)</h5>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  )
}

export default ListCard
