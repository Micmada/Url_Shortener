document.getElementById('shortenForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    
    // Validate the URL format (basic validation)
    if (!urlInput || !isValidUrl(urlInput)) {
        resultDiv.textContent = 'Please enter a valid URL.';
        return;
    }

    try {
        // Make POST request to the Flask API to shorten the URL
        const response = await fetch('http://localhost:5000/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: urlInput }),
        });

        const data = await response.json();

        if (response.status === 201) {
            // Display the shortened URL
            resultDiv.innerHTML = `Shortened URL: <a href="${data.shortened_url}" target="_blank">${data.shortened_url}</a>`;
        } else {
            // Handle errors (e.g., invalid URL, server errors)
            
            resultDiv.textContent = data.error || 'An error occurred while shortening the URL.';
        }
    } catch (error) {
        resultDiv.textContent = 'An error occurred while connecting to the server.';
        console.error('Error during fetch:', error);
    }
});

// Simple URL validation function
function isValidUrl(url) {
    const regex = /^(http|https):\/\/[a-zA-Z0-9-_.]+(\.[a-zA-Z]{2,})+/;
    return regex.test(url);
}
