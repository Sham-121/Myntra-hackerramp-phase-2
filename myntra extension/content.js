// content.js

// Listen for clicks on clothing images
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
      const imageUrl = e.target.src;
  
      // Example: Check if image URL is from Myntra
      if (isMyntraImage(imageUrl)) {
        // Open popup with Myntra link
        chrome.runtime.sendMessage({
          action: 'openPopup',
          imageUrl: imageUrl
        });
      }
    }
  });
  
  // Function to check if image URL is from Myntra
  function isMyntraImage(imageUrl) {
    // Implement logic to check if image URL is from Myntra
    // Example: You might check for specific URL patterns or use an API to validate
    return imageUrl.includes('myntra.com');
  }
  