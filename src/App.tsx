import React from "react";
import { css } from "@emotion/react";

function App() {
  return (
    <div>
      <div
        css={css`
          padding: 32px;
          background-color: red;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            background-color: white;
          }
        `}
      >
        Hover over me!
      </div>
    </div>
  );
}
export default App;
