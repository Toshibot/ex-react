import React from "react";
const LoadData = (uri, method, data) => {
  var request = {
    url: uri,
    type: method,
    accepts: "application/json",
    cache: false,
    dataType: "json",
    data: JSON.stringify(data),
    headers: { "X-Auth-Token": process.env.API_KEY },
    error: function(jqXHR) {
      console.log("ajax error " + jqXHR.status);
    }
  };

  return $.ajax(request);
};

export default LoadData;
