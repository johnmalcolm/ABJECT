module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hey Koshka & Jesus"
      },
      null,
      2
    ),
  };
};
