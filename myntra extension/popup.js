// popup.js

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'openPopup') {
      const imageUrl = message.imageUrl;
  
      // Example: Generate Myntra product link based on image URL
      const productLink = generateMyntraLink(imageUrl);
  
      // Update popup with product link
      document.getElementById('productLink').href = productLink;
      document.getElementById('productLink').textContent = productLink;
    }
  });
  
  // Example function to generate Myntra product link
  function generateMyntraLink(imageUrl) {
    // Implement logic to generate Myntra product link based on image URL
    // Example: Construct link to Myntra product page
    return `https://www.myntra.com/product?url=${encodeURIComponent(imageUrl)}`;
  }
  