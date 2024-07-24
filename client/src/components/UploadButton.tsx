import React, { ChangeEvent, useRef, useState } from 'react'
import styled from 'styled-components'

import { useSaveFileQuery } from '../api/useSaveFileQuery'

export const StyledButton = styled.button`
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  transition: filter .2s;
  vertical-align: middle;
  white-space: nowrap;

  &:active {
    border-width: 4px 0 0;
    background: none;
  }

  &:hover {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }
`

export const UploadButton = () => {
  const [isUploading, setIsUploading] = useState(false)
  const fileUploadRef = useRef<HTMLInputElement>(null)

  const { mutateAsync } = useSaveFileQuery()

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null

    if (!file) return

    validateAndSaveFile(file)
  }

  const validateAndSaveFile = async (file: File) => {
    setIsUploading(true)

    await mutateAsync({ name: file.name })

    setIsUploading(false)
  }

  const handleClick = () => {
    fileUploadRef.current?.click()
  }

  return (
    <>
      <input ref={fileUploadRef} onChange={handleFileUpload} type='file' hidden />
      <StyledButton onClick={handleClick} disabled={isUploading}>
        Upload File
      </StyledButton>
    </>
  )
}