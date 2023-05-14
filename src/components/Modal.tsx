import { styled, useTheme } from "styled-components";

import CloseIcon from "@/icons/Close";
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
  width: 22px;
  height: 22px;
  border-radius: 3px;
  background-color: ${props => props.theme.modal.close.bg};
  cursor: pointer;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
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

const ButtonPrimary = styled(Button)`
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${props => props.theme.modal.button.bg};
  color: ${props => props.theme.modal.button.fg};
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
        <SelectAddress />
        <SelectAmount />
      </ModalContent>
      <Message />
      <ButtonPrimary>Transfer</ButtonPrimary>
      <Button>Cancel</Button>
    </ModalWrap>
  );
}
