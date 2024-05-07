document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = ''
    const imageFile = document.getElementById('image-input').files[0];
    if (imageFile) {
        const formData = new FormData();
        formData.append('param_0', imageFile);

        // Update the URL to your API endpoint
        fetch('https://api-inference.huggingface.co/models/Schmucas/horse_jump_model', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please select an image file.');
    }
});

function displayResult(data) {
    const resultDiv = document.getElementById('result-display');
    resultDiv.innerHTML = 'Result: ' + data.result;
}
