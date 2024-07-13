// content.js

function checkForMyntraClothes() {
    const clothes = document.querySelectorAll('img'); // Assuming clothes images are in img tags
  
    clothes.forEach((img) => {
      const imageUrl = img.src;
      // Send image URL to background script for verification
      chrome.runtime.sendMessage({ imageUrl: imageUrl }, (response) => {
        if (response.isMyntraCloth) {
          // Notify user
          chrome.runtime.sendMessage({ notify: true, imageUrl: imageUrl });
        }
      });
    });
  }
  
  // Run the check when the page loads
  window.addEventListener('load', checkForMyntraClothes);
  