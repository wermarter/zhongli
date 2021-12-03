import {
  Card,
  Button,
  Form,
  Col,
  Row,
  ButtonGroup,
  NavLink,
  ListGroup,
} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const DetailCard = (props) => {
  const {
    label,
    buttons = [],
    fields = [],
    links = [],
    listItems = [],
    listItemLabel = 'additional info',
    keySelector,
    nameSelector,
    linkSelector,
  } = props
  const navigate = useNavigate()
  const itemList = listItems.map((item) => (
    <ListGroup.Item key={keySelector(item)}>
      <div className="d-flex justify-content-between">
        {nameSelector(item) ?? `Unnamed ${listItemLabel.toLowerCase()}`}
        <Link
          to={linkSelector(item)}
        >{`Go to ${listItemLabel.toLowerCase()}`}</Link>
      </div>
    </ListGroup.Item>
  ))

  return (
    <Card border="secondary">
      <Card.Header className="d-flex justify-content-between">
        <h1 className="display-6 flex-grow-1">{label} details</h1>
        <ButtonGroup>
          {buttons.map(({ label, onClick }) => (
            <Button key={label} variant="secondary" onClick={onClick}>
              {label}
            </Button>
          ))}
        </ButtonGroup>
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
                value={content ?? '😭not available😭'}
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
                <NavLink onClick={() => navigate(destination)}>
                  {content}
                </NavLink>
              ) : (
                <NavLink className="text-muted">😭not available😭'</NavLink>
              )}
            </Col>
          </Form.Group>
        ))}
      </Card.Body>
      <ListGroup variant="flush">
        {itemList.length !== 0 ? (
          itemList
        ) : (
          <ListGroup.Item>
            <div className="text-center text-secondary">
              No {listItemLabel.toLowerCase()} found 😅
            </div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  )
}

export default DetailCard
