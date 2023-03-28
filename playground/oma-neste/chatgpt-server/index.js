const serverless = require("serverless-http");
const { SecretsManagerClient, GetSecretValueCommand } = require("@aws-sdk/client-secrets-manager");
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const client = new SecretsManagerClient({ region: 'eu-north-1' }); 

const params = {
  SecretId: "OPENAI_API_KEY",
};
const command = new GetSecretValueCommand(params);

(async () => {
  try {
    const data = await client.send(command);
    const { OPENAI_API_KEY } = JSON.parse(data.SecretString);
    console.log(OPENAI_API_KEY);
    
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const app = express()
    app.use(bodyParser.json());
    app.use(cors());
    const port = 8080

    app.post('/', async(req, res) => {
        const { message } =  req.body;
        console.log(message);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${message}`,
            max_tokens: 100,
            temperature: 0.5,
          });
        res.json({message:response.data.choices[0].text})
    })

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })

  } catch (error) {
    // error handling.
  } finally {
    // finally.
  }
})();

module.exports.handler = serverless(app);