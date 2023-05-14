export default function ArrowIcon(props: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m0 0h24v24h-24z" opacity="0" transform="matrix(0 -1 1 0 0 24)"/>
      <path fill={props.color} d="m5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13a1 1 0 0 0 .07-.36 1 1 0 0 0 -.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0 -.09-.15l-5-6a1 1 0 0 0 -.77-.36 1 1 0 0 0 -.64.23 1 1 0 0 0 -.13 1.41l3.63 4.36h-11.86a1 1 0 0 0 0 2z" />
    </svg>
  );
}