const serverless = require("serverless-http");
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");
const { getSecret } = require("./aws-secrets");

app.use(bodyParser.json());
app.use(cors());

async function openAiConnector(){
  const apiKey = await getSecret();
  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);
  return openai;
}
  
app.post('/chat', async(req, res) => {
  const { message } = req.body;
  openai = await openAiConnector();
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
  res.status(200).json({message:response.data.choices[0].text})
})

module.exports.handler = serverless(app);