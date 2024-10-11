const apiUrl = "https://script.google.com/macros/s/AKfycbwJWgIRpeXq9dICrjfRLgxT8UPvW6KtHJoxOXrnOrxbAh30K7Wu-O7_6RVWU8K4mgWz/exec";

function submitDataJSONP(data) {
    return new Promise((resolve, reject) => {
        const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        const script = document.createElement('script');
        const timeoutDuration = 10000; // 10 seconds timeout
        let timeoutId;

        script.src = `${apiUrl}?callback=${callbackName}&data=${encodeURIComponent(JSON.stringify(data))}`;

        window[callbackName] = function(response) {
            clearTimeout(timeoutId);
            cleanup();
            resolve(response);
        };

        function cleanup() {
            if (script.parentNode) document.body.removeChild(script);
            delete window[callbackName];
        }

        script.onerror = (event) => {
            clearTimeout(timeoutId);
            cleanup();
            console.error('Script load error:', event);
            reject(new Error('JSONP request failed to load'));
        };

        timeoutId = setTimeout(() => {
            cleanup();
            reject(new Error('JSONP request timed out'));
        }, timeoutDuration);

        document.body.appendChild(script);
        console.log('JSONP request sent to:', script.src);
    });
}

async function submitDataFetch(data) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // With 'no-cors', we can't access the response content
    return { status: 'success', message: 'Request sent' };
}

document.getElementById("rsvp-submit").addEventListener("click", async (e) => {
    e.preventDefault();
    const name = document.getElementById("rsvp-name").value;
    const email = document.getElementById("rsvp-email").value;
    const whatsapp = document.getElementById("rsvp-whatsapp").value;
    const instagram = document.getElementById("rsvp-instagram").value;
    const message = document.getElementById("rsvp-message").value;
    
    const data = { name, email, whatsapp, instagram,message };
    console.log('Submitting data:', data);

    try {
        // Try JSONP first
        const result = await submitDataJSONP(data);
        console.log('JSONP Submission result:', result);
        // alert('RSVP submitted successfully via JSONP!');
    } catch (jsonpError) {
        console.error('JSONP Submission error:', jsonpError);
        
        // If JSONP fails, try fetch as a fallback
        try {
            const fetchResult = await submitDataFetch(data);
            console.log('Fetch Submission result:', fetchResult);
            // alert('RSVP submitted successfully via fetch!');
        } catch (fetchError) {
            console.error('Fetch Submission error:', fetchError);
            // alert(`Failed to submit RSVP: ${jsonpError.message}\nFetch also failed: ${fetchError.message}`);
        }
    }
});

// Test function
window.testConnection = async function() {
    try {
        const result = await submitDataJSONP({test: 'connection'});
        console.log('Test connection successful:', result);
    } catch (error) {
        console.error('Test connection failed:', error);
    }
};