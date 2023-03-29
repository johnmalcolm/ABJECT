import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import '../figma/css/kuljetusyrityksen-tyonjohtaja-macbook-air-13-2560-x-1667.css';
import '../figma/css/styleguide.css';
import '../figma/css/globals.css';

var __html = require('../figma/dashboard.html');
var template = { __html: __html };

const DashboardPrototype = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // read the contents of the HTML file using fetch
    fetch('../figma/dashboard.html')
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      // render the HTML content using dangerouslySetInnerHTML
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    )
  );
};

export default DashboardPrototype;