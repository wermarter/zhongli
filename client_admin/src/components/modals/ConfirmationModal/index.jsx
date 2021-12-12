import { Modal, Button, Spinner } from 'react-bootstrap'
import { useState } from 'react'

const ConfirmationModal = ({
  show,
  handleClose,
  handleSubmit,
  handleError,
  title,
  content,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleClick = async () => {
    if (handleSubmit) {
      setIsSubmitting(true)
      try {
        await handleSubmit()
      } catch (e) {
        if (handleError) {
          handleError(e)
        }
      }
    }
    // handleClose()
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
