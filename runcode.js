function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputDiv = document.getElementById('output');
    
    try {
        outputDiv.innerHTML = ''; // Clear previous output
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        outputDiv.appendChild(iframe);
        
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
    } catch (error) {
        outputDiv.innerHTML = '<p style="color: red;">Error: ' + error.message + '</p>';
    }
}