import { styled } from "styled-components";

import CosmosIcon from "@/icons/Cosmos";

const AmountWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const AmountHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const AmountTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.modal.amount.title};
`;

const AmountTip = styled.span`
  font-size: 12px;
  color: ${props => props.theme.modal.amount.title};
`;

const AmountTipPrimary = styled(AmountTip)`
  font-weight: 500;
`;

const AmountInputWrap = styled.div`
  display: flex;
  border: solid 1px ${props => props.theme.modal.amount.input.border};
  border-radius: 5px;
`;

const AmountInput = styled.input.attrs({ value: 2 })`
  flex: 1;
  display: block;
  padding: 12px;
  background: transparent;
  color: ${props => props.theme.modal.amount.input.fg};
  border: none;
  outline: none;
`;

const AmountInputPostfix = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
`;

const AmountInputUnit = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.modal.amount.input.fg};
`;

const AmountInputUnitDesc = styled.div`
  font-size: 10px;
  color: gray;
`;

const AmountInputTagsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const AmountInputTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.modal.amount.tag.bg};
  border-radius: 3px;
  font-size: 8px;
  font-weight: 500;
  color: #667586;
  padding: 2px 6px;
`;

const InputIconWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-right: solid 1px ${props => props.theme.modal.amount.input.border};
`;

export default function SelectAmount() {
  return (
    <AmountWrap>
      <AmountHead>
        <AmountTitle>Select Amount</AmountTitle>
        <AmountTip>Available <AmountTipPrimary>2 ATOM</AmountTipPrimary></AmountTip>
      </AmountHead>
      <AmountInputWrap>
        <InputIconWrap><CosmosIcon size={28} /></InputIconWrap>
        <AmountInput readOnly />
        <AmountInputPostfix>
          <AmountInputUnit>ATOM</AmountInputUnit>
          <AmountInputUnitDesc>
           ≈ $1,013
          </AmountInputUnitDesc>
        </AmountInputPostfix>
      </AmountInputWrap>
      <AmountInputTagsWrap>
        <AmountInputTag>Max</AmountInputTag>
        <AmountInputTag>1/2</AmountInputTag>
        <AmountInputTag>1/3</AmountInputTag>
      </AmountInputTagsWrap>
    </AmountWrap>
  );
}
