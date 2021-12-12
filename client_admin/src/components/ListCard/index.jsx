import { Fragment, useState } from 'react'
import { Card, FloatingLabel, Form, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ConfirmationModal from '../modals/ConfirmationModal'
import AddItemModal from './AddItemModal'

const ListCard = ({
  label,
  items,
  keySelector,
  nameSelector,
  linkSelector,
  showButtons,
  handleRemove,
  handleAdd,
  handleSearchItems,
}) => {
  const [query, setQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState({})
  const [showSelectWarning, setShowSelectWarning] = useState(false)
  const [showRemoveWarning, setShowRemoveWarning] = useState(false)
  const [showAddModal, setShowAddModal] = useState()
  const itemKeys = items.map((item) => keySelector(item))

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
              <Button
                variant="secondary"
                className="mx-1"
                onClick={() => setShowAddModal(true)}
              >
                Add
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  if (keySelector(selectedItem)) {
                    setShowRemoveWarning(true)
                  } else {
                    setShowSelectWarning(true)
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
        show={showSelectWarning}
        handleClose={() => setShowSelectWarning(false)}
      />
      <ConfirmationModal
        title={`Remove ${label.toLowerCase()}?`}
        content="This action cannot be undone. List will be updated."
        show={showRemoveWarning}
        handleClose={() => setShowRemoveWarning(false)}
        handleSubmit={async () => {
          await handleRemove(selectedItem)
        }}
      />
      <AddItemModal
        label={label}
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        handleAdd={handleAdd}
        handleSearchItems={async (query) => {
          const itemList = await handleSearchItems(query)
          return itemList.filter((item) => !itemKeys.includes(item.value))
        }}
      />
    </Fragment>
  )
}

export default ListCard
