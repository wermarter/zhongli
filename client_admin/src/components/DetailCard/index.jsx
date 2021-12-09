import {
  Card,
  Form,
  Col,
  Row,
  NavLink,
  ListGroup,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const DetailCard = (props) => {
  const {
    label,
    buttons = [],
    fields = [],
    links = [],
    listItems = [],
    listItemLabel,
    keySelector,
    nameSelector,
    linkSelector,
  } = props
  const navigate = useNavigate()
  const itemList = listItems.map((item) => (
    <ListGroup.Item key={keySelector(item)}>
      <div className="d-flex justify-content-between">
        {nameSelector(item) ?? `[unnamed ${listItemLabel.toLowerCase()}]`}
        <Link
          to={linkSelector(item)}
        >{`Go to ${listItemLabel.toLowerCase()}`}</Link>
      </div>
    </ListGroup.Item>
  ))

  return (
    <Card border="secondary">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h1 className="display-6 flex-grow-1">{label} details</h1>
        <DropdownButton variant="secondary" title="Options">
          {buttons.map(({ label, onClick }) => (
            <Dropdown.Item key={label} onClick={onClick}>
              {label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Card.Header>
      <Card.Body>
        {fields.map(({ label, content }) => (
          <Form.Group key={label} as={Row} className="mb-1">
            <Form.Label column sm="3">
              {label}:
            </Form.Label>
            <Col sm="9">
              <Form.Control
                plaintext
                readOnly
                className={content ? '' : 'text-muted'}
                value={content ?? '[not available]'}
              />
            </Col>
          </Form.Group>
        ))}
        {links.map(({ label, content, destination }) => (
          <Form.Group key={label} as={Row} className="mb-1">
            <Form.Label column sm="3">
              {label}:
            </Form.Label>
            <Col sm="9">
              {content ? (
                <NavLink className="px-0" onClick={() => navigate(destination)}>
                  {content}
                </NavLink>
              ) : (
                <NavLink className="text-muted px-0">[not available]</NavLink>
              )}
            </Col>
          </Form.Group>
        ))}
      </Card.Body>
      {itemList.length !== 0 ? (
        <ListGroup variant="flush">{itemList}</ListGroup>
      ) : null}
    </Card>
  )
}

export default DetailCard
