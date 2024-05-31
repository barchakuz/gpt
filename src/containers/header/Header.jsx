import React, { useState } from 'react';
import './header.css';
import people from '../../assets/Group81.png';
import ai from '../../assets/Illustration.png';

function Header() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGetStarted = async () => {
    try {
      if (!apiKey) {
        alert('Please enter your ChatGPT API key.');
        return;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred. Please try again later.');
    }
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
  };

  return (
    <>
      <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

          <div className="gpt3__header-content__input">
            <input type="text" placeholder="Enter Your Message for Chat GPT" value={message} onChange={handleMessageChange} />
            <input type="text" placeholder="Enter your ChatGPT API key" value={apiKey} onChange={handleApiKeyChange} />
            <button type="button" onClick={handleGetStarted}>Get Started</button>
          </div>

          <div className="gpt3__header-content__people">
            <img src={people} alt="People" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="AI" />
        </div>
      </div>

      {response && (
        <div className="response">
            
              <p>{response}</p>
    
        </div>
      )}
    </>
  );
}

export default Header;
