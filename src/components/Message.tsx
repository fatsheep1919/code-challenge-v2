import { styled, useTheme } from "styled-components";

const MessageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${props => props.theme.modal.message.bg};
  border-radius: 3px;
  padding: 6px;
  margin-top: 20px;
`;

const MessageContent = styled.div`
  font-size: 10px;
  color: ${props => props.theme.modal.message.fg};
`;

const ClockIcon = (props: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function Message() {
  const theme = useTheme();
  return (
    <MessageWrap>
      <ClockIcon color={theme?.modal.message.fg} />
      <MessageContent>
        Estimated time: 20 seconds
      </MessageContent>
    </MessageWrap>
  );
}