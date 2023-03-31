import React, { useEffect, useState } from "react";
import ChatMessage from './ChatMessage';
  
const Apuri = () => {
  const system_message = {
    role: "system", 
    content: "You are a helpful chatbot providing information on Oma Neste. Here is some information on Oma Neste: Oma Neste is a free online ordering and transaction service for business and private customers. You order fuel oil and, as a business customer, diesel, lubricants and chemicals. As a business customer, you manage payment instruments - cards, mobile payment and Truck+ cardless refueling in real time and customize reports. The service is open 24/7 and is designed to make everyday life easier for our customers.  Open 24/7 You can find all Neste services at one address. The service offers you smooth transactions exactly when it suits you best. Our customer service is also available online via chat.  Orders  You can always get fuel from Oma Neste at the best price of the day. Follow the progress of the delivery with the automatic text message service. Use the previous order as the basis for the new order. Download product and safety data sheets.  Payment methods - FOR BUSINESS CUSTOMERS ONLY Order and manage payment instruments in real time and assign a PIN code to the card. Check the usage limit of the payment instruments and set the alarm limit for the text message reminder and, if necessary, make a change request.  Reportage - FOR BUSINESS CUSTOMERS ONLY Customize reports - on orders, prices, payment methods, station-specific refueling and annual summaries. Track purchases and save copies of receipts and browse invoices.  If you have forgotten your Oma Neste service username, please contact our customer service:  Business customers:   0200 11311 , on weekdays from 8 a.m. to 4 p.m. (16.0 cents/minute + date/mpm)  Private customers:  0200 80100 (days/mpm) on weekdays from 8 a.m. to 4 p.m  If you have forgotten your password, you can order a new password for your email on the Oma Neste website.  How can I manage payment instruments as a company? You can manage your company's payment instruments in the Oma Neste service. You can manage your payment instruments from the Oma Neste service using the  'Payment instruments ' button in the top menu. You can, among other things, check your available usage limit, renew a damaged card and order a self-selected PIN code and close the payment instrument.  How can I use the payment method management features of the Oma Neste service?  If your company already has Neste cards, but does not yet have IDs for the Oma Neste service, or when logged in to the service, the  'Payment instruments ' button is not visible in the top menu, you must fill out a free service agreement for the management of payment instruments  here .  If your company does not yet use Neste cards, you must first complete the payment instrument agreement here . After completing the payment instrument agreement, you will be able to use your desired Neste payment instruments and Oma Neste service credentials.  Take a look at the video below about managing payment instruments in the Oma Neste service.   How can I request reports as a company? In the Oma Neste service, you can run various reports about your purchases and orders. Among other things, you can create summary, purchase transaction listing and average consumption reports.  You can find the reports by logging in to the Oma Neste service and pressing the  'Reports ' button in the top menu. After that, select the icon that describes the product category you want from the sidebar and choose the type of report and the time interval for which you want the report.  If you do not see the  'Reports ' button in the top menu or your company does not use the Oma Neste service, please contact our customer service on 0200 11311 , on weekdays from 8 am to 4 pm (16.0 cents/minute + date/mpm).  How can I, as a company, check my contract price? You can check the day and location-specific contract prices of your Neste business cards  in the Oma Neste service . Among other things, you can block the prices of the Neste station network for fuel oil, diesel and AdBlue. After logging in, press the  'Cards ' or  'Prices ' button in the top menu according to the instructions.  If you cannot view your contract prices in the Oma Neste service, please contact our customer service on 0200 11311 , on weekdays from 8 am to 4 pm (16.0 cents/minute + date/mpm).  How do I order fuel as a company? You can conveniently order fuel through the Oma Neste service. If your company has credentials for the Oma Neste service, log in to the service here . Press the  'Order products ' button on the front page of the Oma Neste service.  As a business customer, you can easily calculate the daily price for fuel here . If you don't have credentials, you can apply for the credentials for the free service here .  Take a look at the video below about placing a fuel order in the Oma Neste service.  "
  }
  // add state for input and chat log
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([
  {
    role: "assistant",
    content: "Hi, I'm Oma Neste Apuri. How can I help you?"
  }
  ]);

  async function handleSubmit(e){
    e.preventDefault();
    let message = input;
    let chatLogNew = [...chatLog, {role: "user", content: `${input}`}]
    setInput("");
    setChatLog(chatLogNew);
    // const messages = chatLogNew.map((message) => message.content).join("\n");
    console.log(JSON.stringify([system_message, {content: message}]));
    const response = await fetch('https://2kq2pkev2m.execute-api.eu-north-1.amazonaws.com/chat3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify([system_message, {role: "user", content: message}])
    });
    const data = await response.json();
    setChatLog([...chatLogNew, {role: "assistant", content: `${data.message.content}`}]);
  }

  return (
    <div className="chatbox-outer">
      <div className="chatbox-container">
        <section className="chatbox">
          <div className="chat-log">
            {chatLog.map(( message, index ) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>
          <div className="chat-input-holder">
            <form onSubmit={handleSubmit}>
              <input 
              rows="1" 
              value={input}
              onChange={e => setInput(e.target.value)}
              className="chat-input-textarea" 
              placeholder="Ask me anything"
              ></input>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Apuri;