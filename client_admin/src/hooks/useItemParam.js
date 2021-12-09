import { useEffect } from 'react'
import { useMatch, useNavigate } from 'react-router'
import usePrevious from './usePrevious'

const useItemParam = ({ selectedItemId, setSelectedItemId }) => {
  const navigate = useNavigate()
  const match = useMatch('/:resource/:itemId') // Can be customized
  const itemIdParam = match?.params?.itemId
  const resourceParam = match?.params?.resource
  const prevSelectedId = usePrevious(selectedItemId)

  useEffect(() => {
    if (selectedItemId) {
      if (itemIdParam) {
        if (itemIdParam !== selectedItemId) {
          if (prevSelectedId) {
            if (itemIdParam === prevSelectedId) {
              // Update url based on selected item
              navigate(selectedItemId.toString())
            } else {
              // Weird?
              console.log('Weird?', {
                itemIdParam,
                prevSelectedId,
                selectedItemId,
              })
            }
          } else {
            // Link from another resource
            setSelectedItemId(itemIdParam)
          }
        } else {
          // In sync, nothing changes, good!
        }
      } else {
        // First select
        navigate(selectedItemId.toString())
      }
    } else {
      if (prevSelectedId) {
        if (prevSelectedId === itemIdParam) {
          // Current item deleted, selected ID is null
          navigate(`/${resourceParam}`) // Clear param
        } else {
          // Weird?
          console.log('Weird?', {
            itemIdParam,
            prevSelectedId,
            selectedItemId,
          })
        }
      } else {
        if (itemIdParam) {
          // Fresh load selected item from entered url
          setSelectedItemId(itemIdParam)
        } else {
          // Fresh load with no param
        }
      }
    }
    // eslint-disable-next-line
  }, [selectedItemId, itemIdParam])
}

export default useItemParam
