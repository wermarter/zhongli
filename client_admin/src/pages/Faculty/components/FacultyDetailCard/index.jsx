import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetFacultyInfoQuery } from '../../../../app/api/group/facultySlice'
import DetailCard from '../../../../components/DetailCard'
import { setIsLoading } from '../../../../app/pageSlice'

const FacultyDetailCard = ({ selectedFacultyId }) => {
  const { data: facultyInfo, isFetching } =
    useGetFacultyInfoQuery(selectedFacultyId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsLoading(true))
    } else {
      dispatch(setIsLoading(false))
    }
  }, [isFetching, dispatch])

  if (isFetching) {
    return <></>
  }

  return (
    <DetailCard
      label="Faculty"
      fields={[
        { label: 'Name', content: facultyInfo.facultyName },
        { label: 'ID', content: facultyInfo.groupId },
      ]}
      buttons={[
        {
          label: 'Edit',
          onClick: () => {
            console.log('Editing faculty')
          },
        },
        {
          label: 'Del',
          onClick: () => {
            console.log('Removing faculty')
          },
        },
      ]}
    />
  )
}

export default FacultyDetailCard
