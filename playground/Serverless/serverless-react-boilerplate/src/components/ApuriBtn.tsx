import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ApuriBtn = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
        <button className="apuri-btn btn apuri-btn-pos">OMA NESTE APURI</button>
    )
  );
};

export default ApuriBtn;