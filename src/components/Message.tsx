import { styled, useTheme } from "styled-components";

const MessageWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${props => props.theme.modal.message.bg};
  border-radius: 5px;
  padding: 4px 6px;
  margin: 20px 0 16px 0;
`;

const MessageContent = styled.span`
  font-size: 10px;
  letter-spacing: -0.5px;
  color: ${props => props.theme.modal.message.fg};
`;

const MessageContentPrimary = styled(MessageContent)`
  font-weight: 800;
  color: ${props => props.theme.modal.message.primary};
`;

const ClockIcon = (props: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
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
        Estimated time: <MessageContentPrimary>20 seconds</MessageContentPrimary>
      </MessageContent>
    </MessageWrap>
  );
}