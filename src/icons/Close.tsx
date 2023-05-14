export default function CloseIcon(props: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="32">
        <path d="m368 368-224-224"/>
        <path d="m368 144-224 224"/>
      </g>
    </svg>
  );
}