import { FC } from 'react'
import styled from 'styled-components'
import arrow from '../assets/arrow.png'

import { UploadButton } from './UploadButton'
import { FileList } from './FileList'

const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const FilesHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3% 5%;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

const TitleLabel = styled.h2`
  margin: 0;
`

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`

const FilesMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  flex-grow: 1;
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.5% 5%;
`

export const Files: FC = () => {
  return (
    <FilesContainer>
      <FilesHeader>
        <Title>
          <Icon src={arrow} />
          <TitleLabel>File Uploader</TitleLabel>
        </Title>
      </FilesHeader>
      <FilesMain>
        <ActionContainer>
          <UploadButton />
        </ActionContainer>
        <FileList />
      </FilesMain>
    </FilesContainer>
  )
}

