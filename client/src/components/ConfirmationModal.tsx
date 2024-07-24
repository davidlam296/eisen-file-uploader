import { FC } from 'react'
import styled from 'styled-components'
import { Icon } from './Files'
import closeIcon from '../assets/close.webp'
import { StyledButton } from './UploadButton'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.66);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Message = styled.p`
  font-size: 24px;
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`

type ModalProps = {
  show: boolean
  message: string
  onConfirm: () => void
  onClose: () => void
}

export const ConfirmationModal: FC<ModalProps> = ({ show, message, onConfirm, onClose }) => {
  if (!show) return null

  return (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <Icon src={closeIcon}/>
        </CloseButton>
        <Content>
          <Message>{message}</Message>
          <ActionContainer>
            <StyledButton onClick={onClose}>
              Cancel
            </StyledButton>
            <StyledButton onClick={onConfirm}>
              Confirm
            </StyledButton>
          </ActionContainer>
        </Content>
      </ModalWrapper>
    </Overlay>
  )
}
