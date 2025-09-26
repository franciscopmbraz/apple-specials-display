import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.id = 'retell-widget';
    script.src = 'https://dashboard.retellai.com/retell-widget.js';
    script.type = 'module';
    script.setAttribute('data-public-key', 'public_key_eb4bf768d1be6e7f8a524');
    script.setAttribute('data-agent-id', 'agent_2d87f74f88a6addf6529ba09e5');
    script.setAttribute('data-title', 'Worten Assistant');
    script.setAttribute('data-color', '#6ee7b7');
    script.setAttribute('data-bot-name', 'Worten Assistant');
    script.setAttribute('data-popup-message', 'Hi! How can I help you today?');
    script.setAttribute('data-show-ai-popup', 'true');
    script.setAttribute('data-show-ai-popup-time', '5');
    script.setAttribute('data-auto-open', 'false');

    // Append to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('retell-widget');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default ChatBot;