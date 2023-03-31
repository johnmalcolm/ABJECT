const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");

const secret_name = "OPENAI_API_KEY";

const client = new SecretsManagerClient({
    region: "eu-north-1",
});

async function getSecret() {
  let response;

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
      })
    );
  } catch (error) {   
    throw error;
  }
  const { OPENAI_API_KEY } = JSON.parse(response.SecretString);
  return OPENAI_API_KEY ;
}

module.exports = { getSecret };
