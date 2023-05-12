import React, { useCallback } from "react";
import { styled } from "styled-components";

import { THEME_TYPE } from '@/theme';

const SwitchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const Switch = styled.div`
  position: relative;
  width: 40px;
  height: 20px;
`;

const SwitchBG = styled.div`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #e0e0e0;
  input[type=checkbox]:checked ~ && {
    background-color: #202428;
  }
`;

const SwitchInput = styled.input.attrs({ type: "checkbox", id: 'input' })`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  z-index: 99;
`;

const SwitchHandler = styled.label.attrs({ htmlFor: 'input' })`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: white;
  position: absolute;
  left: 2px;
  top: 2px;
  transition: left .3s ease;
  input[type=checkbox]:checked ~ && {
    left: 22px;
  }
`;

interface IProps {
  onChange?: (isDarkTheme: THEME_TYPE) => void;
}

export default function ThemeSwitch(props: IProps) {
  const { onChange } = props;
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked ? 'dark' : 'light');
  }, [onChange]);

  return (
    <SwitchWrap>
      <div>Light</div>
      <Switch>
        <SwitchInput onChange={handleChange}></SwitchInput>
        <SwitchBG></SwitchBG>
        <SwitchHandler></SwitchHandler>
      </Switch>
      <div>Dark</div>
    </SwitchWrap>
  );
}