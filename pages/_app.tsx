import { Home } from "../src/components/Home";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light">
          <Home />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
