import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router'

const useSelectedItemId = (selectedItemIdSelector, setSelectedItemId) => {
  const navigate = useNavigate()
  const match = useMatch('/:resource/:itemId')
  const itemIdParam = match?.params?.itemId

  const dispatch = useDispatch()
  const selectedItemId = useSelector(selectedItemIdSelector)

  useEffect(() => {
    // Set new selected item
    if (itemIdParam && itemIdParam !== selectedItemId) {
      dispatch(setSelectedItemId(itemIdParam))
    }
    // Redirect to selected item
    if (!itemIdParam && selectedItemId) {
      navigate(selectedItemId.toString())
    }
  }, [itemIdParam, dispatch, setSelectedItemId, selectedItemId, navigate])

  return selectedItemId
}

export default useSelectedItemId
