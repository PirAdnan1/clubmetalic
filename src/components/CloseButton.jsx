import React from "react";

// assest
import Close from "@/assets/Close";
function CloseButton() {
  return (
    <div className="bg-white w-[60px] cursor-pointer h-[62px] shadow-lg flex items-center justify-center rounded-[50%]">
      <div>
        <Close />
      </div>
    </div>
  );
}

export default CloseButton;
