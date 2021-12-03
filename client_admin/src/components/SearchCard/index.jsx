import { useState } from 'react'
import { Card, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchCard = (props) => {
  const {
    label,
    items = [],
    selectedItemKey,
    keySelector,
    nameSelector,
    showKey,
    handleSubmit,
    handleAdd,
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
          Add
        </Button>
      </Card.Header>
      <ListGroup variant="flush">
        {listItems.length !== 0 ? (
          listItems
        ) : (
          <ListGroup.Item>
            <div className="text-center text-secondary">
              No {label.toLowerCase()} found 😅
            </div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  )
}

export default SearchCard
