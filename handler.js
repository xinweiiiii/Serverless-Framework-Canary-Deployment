"use strict";

module.exports.testCanaries = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Test version 6",
      },
      null,
      2
    ),
  };
};
