// Function to type a key
function typeKey(key) {
    document.getElementById('output').value += key;
}

// Function to type a phrase
function typePhrase(phrase) {
    document.getElementById('output').value += phrase + ' ';
}

// Function to clear the text area
function clearText() {
    document.getElementById('output').value = '';
}

// Function to copy text to clipboard
function copyText() {
    const textArea = document.getElementById('output');
    textArea.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}
