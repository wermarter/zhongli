import { Modal, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const ConfirmationModal = (props) => {
  const { show, handleClose, handleSubmit, navigateTo, title, content } = props
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleClick = async () => {
    if (handleSubmit) {
      setIsSubmitting(true)
      try {
        await handleSubmit()
      } catch (e) {
        alert(e)
      }
    }
    handleClose()
    if (navigateTo) {
      navigate(navigateTo)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClick}>
          {isSubmitting && (
            <Spinner animation="border" as="span" role="status" size="sm" />
          )}
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationModal
