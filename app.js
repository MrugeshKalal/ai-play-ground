document.getElementById('submitBtn').addEventListener('click', function() {
    const prompt = document.getElementById('promptInput').value.trim();
    const outputDiv = document.getElementById('aiOutput');
    if (!prompt) {
        outputDiv.textContent = 'Please enter a prompt.';
        return;
    }
    // Simulate AI response
    outputDiv.textContent = 'AI says: ' + simulateAIResponse(prompt);
});

function simulateAIResponse(prompt) {
    // Simple simulation: echo prompt with a message
    return `You asked: "${prompt}". This is a simulated AI response.`;
}
