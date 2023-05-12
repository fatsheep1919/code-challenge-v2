import { styled, useTheme } from "styled-components";

import SelectAddress from "./SelectAddress";
import SelectAmount from "./SelectAmount";
import Message from "./Message";

const ModalWrap = styled.div`
  width: 372px;
  height: 415px;
  border-radius: 8px;
  margin: 20px 0;
  padding: 10px 15px;
  box-sizing: border-box;
  background-color: ${props => props.theme.modal.bg};
  position: relative;
`;

const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.theme.modal.title};
`;

const ModalClose = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  background-color: ${props => props.theme.modal.close.bg};
  cursor: pointer;
`;

const CloseIcon = (props: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32">
      <path d="m368 368-224-224"/>
      <path d="m368 144-224 224"/>
    </g>
  </svg>
);

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const ButtonPrimary = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  border: none;
  margin-top: 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.modal.button.bg};
  color: ${props => props.theme.modal.button.fg};
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  border: none;
  background: transparent;
  color: #6b7a89;
  cursor: pointer;
`;

export default function Modal() {
  const theme = useTheme();
  return (
    <ModalWrap>
      <ModalClose>
        <CloseIcon color={theme?.modal.close.fg} />
      </ModalClose>
      <ModalTitle>Deposit ATOM</ModalTitle>
      <ModalContent>
        <SelectAddress></SelectAddress>
        <SelectAmount></SelectAmount>
      </ModalContent>
      <Message />
      <ButtonPrimary>Transfer</ButtonPrimary>
      <Button>Cancel</Button>
    </ModalWrap>
  );
}
