import { Fragment, useState } from 'react'
import { Card, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ConfirmationModal from '../ConfirmationModal'

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
  const [showWarning, setShowWarning] = useState(false)

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
    <Fragment>
      <Card border="secondary" style={{ maxHeight: '500px' }}>
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
                    setShowWarning(true)
                  }
                }}
              >
                Remove
              </Button>
            </>
          ) : null}
        </Card.Header>
        {listItems.length !== 0 ? (
          <ListGroup variant="flush">{listItems}</ListGroup>
        ) : null}
        <Card.Footer className="text-muted text-center">
          {`Found ${listItems.length} ${label.toLowerCase()}`}
        </Card.Footer>
      </Card>
      <ConfirmationModal
        title="Warning"
        content={`Please select one ${label.toLowerCase()} from the list.`}
        show={showWarning}
        handleClose={() => setShowWarning(false)}
      />
    </Fragment>
  )
}

export default ListCard
