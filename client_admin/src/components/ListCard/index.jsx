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
    showButtons,
    handleAdd,
    handleRemove,
  } = props

  const [query, setQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState({})

  const listItems = items
    .filter(
      (item) =>
        keySelector(item).toUpperCase().includes(query.toUpperCase()) ||
        nameSelector(item).toUpperCase().includes(query.toUpperCase()),
    )
    .map((item) => {
      const itemKey = keySelector(item)
      const itemName = nameSelector(item)
      const isActive = itemKey === keySelector(selectedItem)
      return (
        <ListGroup.Item
          key={itemKey}
          action
          className="user-select-none"
          onClick={() => setSelectedItem(item)}
          active={isActive}
        >
          <div className="d-flex justify-content-between">
            {itemName}
            <Link
              style={
                isActive
                  ? {
                      color: '#fff',
                    }
                  : {}
              }
              to={linkSelector(item)}
            >{`Go to ${label.toLowerCase()}`}</Link>
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
        {showButtons ? (
          <>
            <Button variant="secondary" className="mx-1" onClick={handleAdd}>
              Add
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                if (keySelector(selectedItem)) {
                  handleRemove()
                } else {
                  alert(`Please select one ${label.toLowerCase()}.`)
                }
              }}
            >
              Del
            </Button>
          </>
        ) : null}
      </Card.Header>
      <ListGroup variant="flush">{listItems}</ListGroup>
      <Card.Footer>
        <div className="text-center text-secondary">
          {`Found ${listItems.length} ${label.toLowerCase()}`}
        </div>
      </Card.Footer>
    </Card>
  )
}

export default ListCard
