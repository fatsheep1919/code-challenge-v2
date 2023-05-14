import { styled, useTheme } from "styled-components";

import ArrowIcon from "@/icons/Arrow";
import EditIcon from "@/icons/Edit";
import CosmosIcon from "@/icons/Cosmos";
import OsmosisIcon from "@/icons/Osmosis";

const AddressWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Address = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const AddressTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.modal.address.title};
`;

const AddressInputWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  background-color: ${props => props.theme.modal.address.input.bg};
  padding: 0 10px 0 8px;
`;

const AddressInput = styled.input`
  width: 100%;
  display: block;
  padding: 12px 0;
  background: transparent;
  letter-spacing: -0.5px;
  color: ${props => props.theme.modal.address.input.fg};
  font-size: 10px;
  border: none;
  outline: none;
`;

const ArrowIconWrap = styled.div`
  padding-top: 25px;
`;

const InputIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

export default function SelectAddress() {
  const theme = useTheme();
  return (
    <AddressWrap>
      <Address>
        <AddressTitle>From Cosmos Hub</AddressTitle>
        <AddressInputWrap>
          <InputIconWrap><CosmosIcon size={20} /></InputIconWrap>
          <AddressInput value='atom1xy5y...m6wwz9a' readOnly></AddressInput>
        </AddressInputWrap>
      </Address>
      <ArrowIconWrap>
        <ArrowIcon color={theme?.modal.address.arrow} />
      </ArrowIconWrap>
      <Address>
        <AddressTitle>To Osmosis</AddressTitle>
        <AddressInputWrap>
          <InputIconWrap><OsmosisIcon /></InputIconWrap>
          <AddressInput value='osmo1xy5y...w9a' readOnly></AddressInput>
          <InputIconWrap>
            <EditIcon />
          </InputIconWrap>
        </AddressInputWrap>
      </Address>
    </AddressWrap>
  );
}