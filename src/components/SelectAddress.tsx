import { styled, useTheme } from "styled-components";

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

const ArrowRightIcon = (props: { color: string }) => (
  <ArrowIconWrap>
    <svg width="12" height="12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m0 0h24v24h-24z" opacity="0" transform="matrix(0 -1 1 0 0 24)"/>
      <path fill={props.color} d="m5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13a1 1 0 0 0 .07-.36 1 1 0 0 0 -.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0 -.09-.15l-5-6a1 1 0 0 0 -.77-.36 1 1 0 0 0 -.64.23 1 1 0 0 0 -.13 1.41l3.63 4.36h-11.86a1 1 0 0 0 0 2z" />
    </svg>
  </ArrowIconWrap>
);

const CosmosIcon = () => (
  <InputIconWrap>
    <svg width="20"  height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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

const OsmosisIcon = () => (
  <InputIconWrap>
    <svg width="20" height="20" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="210" cy="210" rx="210" ry="210" transform="rotate(180 210 210)" fill="url(#paint0_linear_613_7694)"/>
      <mask id="mask0_613_7694" maskUnits="userSpaceOnUse" x="25" y="25" width="370" height="370">
      <path d="M25 210C25 107.827 107.827 25.0001 210 25C312.173 25 395 107.827 395 210C395 312.173 312.173 395 210 395C107.827 395 25 312.173 25 210Z" fill="url(#paint1_linear_613_7694)"/>
      </mask>
      <g mask="url(#mask0_613_7694)">
      <path d="M210.939 394.032C314.708 394.032 397.643 301.456 397.643 195.201C371.547 218.181 287.313 248.751 195.433 172.53C101.895 94.9324 23.1157 128.091 23.1157 189.407C23.1157 189.407 23.0508 198.218 23.0508 201.639C23.0508 307.895 107.171 394.032 210.939 394.032Z" fill="url(#paint2_radial_613_7694)"/>
      <path d="M260.646 206.483C295.515 212.347 321.527 210.065 343.12 194.414C362.456 180.399 391.571 167.792 394.47 196.257C399.369 244.361 303.659 284.736 221.184 287.851C138.709 290.967 17.216 235.637 32.9978 156.996C34.795 148.041 39.1711 139.02 50.1302 125.758C61.6917 111.768 100.418 89.1284 136.344 103.704C193.168 121.223 197.671 195.891 260.646 206.483Z" fill="url(#paint3_radial_613_7694)"/>
      <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M162.036 163.324C181.238 153.359 194.356 133.294 194.356 110.166C194.356 77.1098 167.559 50.3125 134.503 50.3125C121.266 50.3125 109.032 54.6095 99.1212 61.8848L98.3397 60.6706C-45.4516 159.64 35.3502 335.207 100.484 370.196C111.968 372.86 108.661 362.097 102.922 343.416C90.2613 302.212 65.7641 222.483 162.036 163.324Z" fill="url(#paint4_linear_613_7694)"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_613_7694" x1="289.43" y1="410.942" x2="139.628" y2="27.3287" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="#FAE7FD"/>
      </linearGradient>
      <linearGradient id="paint1_linear_613_7694" x1="210" y1="395" x2="210" y2="25.0001" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="#FAE7FD"/>
      </linearGradient>
      <radialGradient id="paint2_radial_613_7694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.5 279.504) rotate(1.73961) scale(444.705 652.44)">
      <stop stopColor="#2D01E2"/>
      <stop offset="0.602428" stopColor="#DD4AC8"/>
      </radialGradient>
      <radialGradient id="paint3_radial_613_7694" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(172.21 13.0013) rotate(62.2299) scale(374.628 803.671)">
      <stop offset="0.505088" stopColor="#DD4AC8"/>
      <stop offset="0.917785" stopColor="#2D01E2"/>
      </radialGradient>
      <linearGradient id="paint4_linear_613_7694" x1="105.696" y1="49.3388" x2="120.613" y2="382.862" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      </defs>
    </svg>
  </InputIconWrap>
);

const EditIcon = () => (
  <InputIconWrap>
    <svg width="12" height="12" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
      <path fill="#667586" d="m6 0-1 1 2 2 1-1zm-2 2-4 4v2h2l4-4z"/>
    </svg>
  </InputIconWrap>
);

export default function SelectAddress() {
  const theme = useTheme();
  return (
    <AddressWrap>
      <Address>
        <AddressTitle>From Cosmos Hub</AddressTitle>
        <AddressInputWrap>
          <CosmosIcon />
          <AddressInput value='atom1xy5y...m6wwz9a' readOnly></AddressInput>
        </AddressInputWrap>
      </Address>
      <ArrowRightIcon color={theme?.modal.address.arrow} />
      <Address>
        <AddressTitle>To Osmosis</AddressTitle>
        <AddressInputWrap>
          <OsmosisIcon />
          <AddressInput value='osmo1xy5y...w9a' readOnly></AddressInput>
          <EditIcon />
        </AddressInputWrap>
      </Address>
    </AddressWrap>
  );
}