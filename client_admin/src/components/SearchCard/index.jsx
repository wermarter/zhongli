import { useState } from 'react'
import { Card, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchCard = (props) => {
  const {
    itemName,
    items = [],
    selectedItemKey,
    keySelector,
    nameSelector,
    showKey,
    handleSubmit,
    handleAdd,
  } = props

  const [query, setQuery] = useState('')

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <FloatingLabel label={itemName}>
          <Form.Control
            placeholder="placeholder"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </FloatingLabel>
        <Button
          variant="secondary"
          className="mx-1"
          onClick={() => {
            handleSubmit(query)
            setQuery('')
          }}
        >
          Find
        </Button>
        <Button variant="secondary" onClick={handleAdd}>
          +
        </Button>
      </Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => {
          const itemKey = keySelector(item)
          const itemName = nameSelector(item)
          if (
            itemKey.toUpperCase().includes(query.toUpperCase()) ||
            itemName.toUpperCase().includes(query.toUpperCase())
          ) {
            return (
              <ListGroup.Item
                key={itemKey}
                active={itemKey === selectedItemKey}
                action
                as={Link}
                to={itemKey}
                className="user-select-none"
              >
                <div className="d-flex justify-content-between">
                  {itemName}
                  {showKey ? <div>[{itemKey}]</div> : null}
                </div>
              </ListGroup.Item>
            )
          }
          return null
        })}
      </ListGroup>
    </Card>
  )
}

export default SearchCard
