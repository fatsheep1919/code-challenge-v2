import React, { useState } from "react";
import { styled, ThemeProvider } from "styled-components";

import THEMES, { THEME_TYPE } from '@/theme';
import ThemeSwitch from "@/components/ThemeSwitch";
import Modal from '@/components/Modal';

import '../styles/global.css';

const PageWrap = styled.div`
  height: 100vh;
  padding: 20px;
  background: #9b9b9b;
`;

const defaultTheme: THEME_TYPE = 'light';

export default function IndexPage() {
  const [curTheme, setCurTheme] = useState(defaultTheme);

  return (
    <PageWrap>
      <ThemeSwitch onChange={(themeName) => setCurTheme(themeName)}></ThemeSwitch>
      <ThemeProvider theme={THEMES[curTheme]}>
        <Modal></Modal>
      </ThemeProvider>
    </PageWrap>
  )
}