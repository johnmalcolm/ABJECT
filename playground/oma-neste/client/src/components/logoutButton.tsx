import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn" onClick={() => logout({ logoutParams: { returnTo: 'https://2sq3j3h7ub.execute-api.eu-north-1.amazonaws.com/dev/' } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;