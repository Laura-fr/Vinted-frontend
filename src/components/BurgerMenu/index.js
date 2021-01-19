import React, { useState } from "react";

import { AlignJustify } from "react-feather";

import "./index.css";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="burger-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AlignJustify />
      </button>
    </div>
  );
};

export default BurgerMenu;
