import React from 'react'
import { useLazyGetStudentsQuery } from '../app/api/user/studentSlice'
import { Button } from 'react-bootstrap'

const SussyComponent = () => {
  const [trigger, query] = useLazyGetStudentsQuery()
  const { data: students, isFetching, isLoading } = query

  if (isFetching || isLoading) {
    return <div>Loading data...</div>
  }

  return (
    <div>
      {JSON.stringify(students)}
      <Button
        onClick={() => {
          trigger({}, { preferCacheValue: true })
        }}
      >
        Retrieve
      </Button>
    </div>
  )
}

export default SussyComponent
