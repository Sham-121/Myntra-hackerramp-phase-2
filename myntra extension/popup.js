// popup.js

// Listen for messages from content script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'openPopup' && message.product) {
    const product = message.product;
    displayProductDetails(product);
  }
});

// Function to display product details in popup
function displayProductDetails(product) {
  const productDetailsDiv = document.getElementById('productDetails');
  if (product) {
    const productHtml = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <p><strong>${product.name}</strong></p>
      <p>Price: ${product.price}</p>
      <a class="product-link" href="${product.link}" target="_blank">View on Myntra</a>
    `;
    productDetailsDiv.innerHTML = productHtml;
  } else {
    productDetailsDiv.innerHTML = '<p>Product details not available.</p>';
  }
}
