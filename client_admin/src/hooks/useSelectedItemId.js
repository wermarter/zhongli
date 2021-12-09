import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router'

const useSelectedItemId = (selectedItemIdSelector, setSelectedItemId) => {
  const navigate = useNavigate()
  const match = useMatch('/:resource/:itemId')

  const dispatch = useDispatch()
  const selectedItemId = useSelector(selectedItemIdSelector)

  useEffect(() => {
    const itemIdParam = match?.params?.itemId
    // Set new selected item
    if (itemIdParam && itemIdParam !== selectedItemId) {
      if (itemIdParam !== 'deleted') {
        dispatch(setSelectedItemId(itemIdParam))
      } else {
        dispatch(setSelectedItemId(null))
        // window.location.href = `/${match.params.resource}`
      }
    }
    // Redirect to selected item
    if (!itemIdParam && selectedItemId) {
      navigate(selectedItemId.toString())
    }
  }, [dispatch, setSelectedItemId, selectedItemId, navigate, match])

  return selectedItemId
}

export default useSelectedItemId
