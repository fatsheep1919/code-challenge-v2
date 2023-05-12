import { styled, useTheme } from "styled-components";

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
  color: ${props => props.theme.modal.amount.title};
`;

const AmountTip = styled.div`
  font-size: 12px;
  color: ${props => props.theme.modal.amount.title};
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
  color: #667586;
  padding: 2px 4px;
`;

const InputIconWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-right: solid 1px ${props => props.theme.modal.amount.input.border};
`

const CosmosIcon = () => (
  <InputIconWrap>
    <svg width="28"  height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <circle cx="16" cy="16" fill="#2e3148" r="16"/>
        <g fill="#fff" transform="translate(6 5)">
          <path d="m10.02.53c-1.295 0-2.345 4.697-2.345 10.49s1.05 10.49 2.345 10.49c1.294 0 2.344-4.697 2.344-10.49s-1.05-10.49-2.344-10.49zm.162 20.387c-.148.198-.297.05-.297.05-.596-.692-.894-1.975-.894-1.975-1.043-3.357-.795-10.564-.795-10.564.49-5.721 1.382-7.073 1.685-7.373a.185.185 0 0 1 .238-.019c.44.313.81 1.617.81 1.617 1.09 4.048.991 7.848.991 7.848.099 3.308-.546 7.01-.546 7.01-.497 2.814-1.192 3.406-1.192 3.406z"/>
          <path d="m19.118 5.8c-.645-1.124-5.24.303-10.267 3.186s-8.573 6.13-7.93 7.254c.645 1.124 5.241-.303 10.268-3.186s8.574-6.131 7.93-7.254zm-17.603 10.285c-.246-.03-.19-.234-.19-.234.302-.86 1.266-1.758 1.266-1.758 2.393-2.575 8.769-5.946 8.769-5.946 5.206-2.422 6.823-2.32 7.233-2.208a.185.185 0 0 1 .135.198c-.05.537-1 1.507-1 1.507-2.966 2.961-6.312 4.768-6.312 4.768-2.82 1.732-6.353 3.013-6.353 3.013-2.688.968-3.548.66-3.548.66z"/>
          <path d="m19.095 16.277c.65-1.12-2.887-4.383-7.898-7.288-5.01-2.904-9.604-4.348-10.253-3.226-.65 1.123 2.888 4.383 7.9 7.288 5.013 2.904 9.602 4.348 10.251 3.226zm-17.72-10.081c-.097-.228.106-.283.106-.283.897-.17 2.157.217 2.157.217 3.427.78 9.538 4.608 9.538 4.608 4.705 3.292 5.427 4.743 5.535 5.154a.185.185 0 0 1 -.103.215c-.49.225-1.805-.11-1.805-.11-4.05-1.086-7.289-3.075-7.289-3.075-2.91-1.57-5.788-3.985-5.788-3.985-2.187-1.842-2.35-2.74-2.35-2.74l-.002-.001z"/>
          <circle cx="9.995" cy="10.995" r="1.234"/>
          <circle cx="15.055" cy="6.256" r="1"/>
          <circle cx="3.306" cy="8.774" r="1"/>
          <circle cx="8.539" cy="17.856" r="1"/>
        </g>
      </g>
    </svg>
  </InputIconWrap>
);

export default function SelectAmount() {
  const theme = useTheme();
  return (
    <AmountWrap>
      <AmountHead>
        <AmountTitle>Select Amount</AmountTitle>
        <AmountTip>Available 2 ATOM</AmountTip>
      </AmountHead>
      <AmountInputWrap>
        <CosmosIcon />
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