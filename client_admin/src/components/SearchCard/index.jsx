import { useEffect } from 'react'
import { useState } from 'react'
import { Card, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'

const SearchCard = ({
  label,
  items = [],
  selectedItemKey,
  keySelector,
  nameSelector,
  showKey,
  onSearch,
  onAdd,
  onSelect,
}) => {
  useEffect(() => {
    if (!selectedItemKey) {
      // On mount, if no item selected, get something
      onSearch(selectedItemKey)
    }
    // eslint-disable-next-line
  }, [])

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
          onClick={() => onSelect(item)}
          className="user-select-none"
        >
          <div className="d-flex justify-content-between">
            {itemName}
            {showKey ? <div>{itemKey}</div> : null}
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
            onSearch(query)
            setQuery('')
          }}
        >
          Find
        </Button>
        <Button variant="secondary" onClick={onAdd}>
          Add
        </Button>
      </Card.Header>
      {listItems.length !== 0 ? (
        <ListGroup variant="flush">{listItems}</ListGroup>
      ) : null}
      <Card.Footer className="text-muted text-center">
        {`Found ${listItems.length} ${label.toLowerCase()}`}
      </Card.Footer>
    </Card>
  )
}

export default SearchCard
