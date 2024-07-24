import React from 'react'
import styled from 'styled-components'

import { FileCard } from './FileCard'
import { useGetFilesQuery } from '../api/useGetFilesQuery'

const FileListContainer = styled.div`
  border-radius: 15px;
  background-color: white;
  min-height; 100px;
  margin: 0 5% 3% 5%;
  padding: 3% 3%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow-y: scroll;
`

export const FileList = () => {
  const { isFetching, data } = useGetFilesQuery()

  return (
    <FileListContainer>
      { isFetching ? null : (
        data?.files.map(({id, name, createdAt}) => (
          <FileCard key={id} id={id} filename={name} date={createdAt} />
        ))
      )}
    </FileListContainer>
  )
}
