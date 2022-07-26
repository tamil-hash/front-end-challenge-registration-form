import React from "react";

import { ReactComponent as SuccessIcon } from "assets/successIcon.svg";

const SuccessPage = () => {
  return (
    <div className="success-container">
      <SuccessIcon />
      <h1>You have Registered Successfully!</h1>
    </div>
  );
};

export default SuccessPage;
