// content.js

// Listen for clicks on clothing images
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG') {
    const imageUrl = e.target.src;

    // Example: Check if image URL is from Instagram or Pinterest
    if (isSupportedPlatform() && isMyntraImage(imageUrl)) {
      fetchMyntraProduct(imageUrl)
        .then(product => {
          if (product) {
            // Open popup with Myntra product details
            chrome.runtime.sendMessage({
              action: 'openPopup',
              product: product
            });
          } else {
            console.log('Product not found on Myntra.');
          }
        })
        .catch(error => {
          console.error('Error fetching product:', error);
        });
    }
  }
});

// Function to check if current platform is supported (Instagram or Pinterest)
function isSupportedPlatform() {
  return window.location.hostname.includes('instagram.com') ||
         window.location.hostname.includes('pinterest.com');
}

// Function to check if image URL is from Myntra
function isMyntraImage(imageUrl) {
  // Implement logic to check if image URL is from Myntra
  // Example: You might check for specific URL patterns
  return imageUrl.includes('myntra.com');
}

// Function to fetch product details from Myntra API
function fetchMyntraProduct(imageUrl) {
  return new Promise((resolve, reject) => {
    // Example: Replace with actual API call to Myntra
    // Mock API call for demonstration purposes
    setTimeout(() => {
      const productId = extractProductId(imageUrl);
      if (productId) {
        // Replace with actual API endpoint for fetching product details
        const apiUrl = `https://api.myntra.com/v1/products/${productId}`;
        
        // Mock response (replace with actual fetch call)
        const mockProduct = {
          name: 'Sample Product',
          price: '$49.99',
          image: imageUrl,
          link: `https://www.myntra.com/product/${productId}`
        };

        resolve(mockProduct);
      } else {
        reject('Invalid Myntra product URL.');
      }
    }, 1000); // Simulating delay for API response
  });
}

// Function to extract product ID from Myntra URL
function extractProductId(imageUrl) {
  // Implement logic to extract product ID from Myntra URL
  // Example: Parse URL to get product ID
  const match = imageUrl.match(/product\/(\d+)/);
  return match ? match[1] : null;
}
