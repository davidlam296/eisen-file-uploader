import { FC, useState } from 'react'
import styled from 'styled-components'
import { Icon } from './Files'
import X from '../assets/x.svg'
import { useDeleteFileQuery } from '../api/useDeleteFileQuery'
import { ConfirmationModal } from './ConfirmationModal'
import { formatDate } from '../utils/dateUtils'

const StyledCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 0 calc(16.666% - 10px);
  flex-direction: row;
  border-radius: 15px;
  background-color: #ADD8E6;
  border: 1px solid black;
  box-shadow: 2px 2px lightgray;
  height: 100px;
  padding: 10px 10px;
  gap: 2px;
  max-width: calc(16.666% - 10px);
  min-width: 200px;
`

const DeleteIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FileDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 5px;
  overflow-y: scroll;
  padding-right: 10px;
`

const FileDateLabel = styled.p`
  margin: 0;
`

const FileNameLabel = styled.p`
  margin: 0;
  word-break: break-word;
`

type FileCardProps = {
  id: number
  filename: string
  date: Date
}

export const FileCard: FC<FileCardProps> = ({ id, filename, date }) => {
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  const { mutateAsync } = useDeleteFileQuery()

  const handleClick = () => {
    if (loading) return

    setShowModal(true)
  }

  const handleDelete = async () => {
    setShowModal(false)
    setLoading(true)

    await mutateAsync(id)

    setLoading(false)
  }

  return (
    <StyledCard>
      <FileDataContainer>
        <FileDateLabel>{formatDate(date)}</FileDateLabel>
        <FileNameLabel>{filename}</FileNameLabel>
      </FileDataContainer>
      <DeleteIconContainer>
        <Icon src={X} onClick={handleClick}/>
      </DeleteIconContainer>
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        message={'Are you sure you want to delete this file?'}
      />
    </StyledCard>
  )
}