// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.imageUrl) {
      // Example API call to verify the image
      fetch('https://your-backend-api.com/verify-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageUrl: message.imageUrl })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        sendResponse({ isMyntraCloth: data.isMyntraCloth });
      })
      .catch(error => {
        console.error('Error:', error);
        sendResponse({ isMyntraCloth: false });
      });
  
      // Return true to indicate you want to send a response asynchronously
      return true;
    } else if (message.notify) {
      chrome.notifications.create('', {
        title: 'Myntra Clothes Detected',
        message: 'Click here to view the item on Myntra.',
        iconUrl: message.imageUrl,
        type: 'basic'
      });
    }
  });
  