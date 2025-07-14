let generateImageForm = document.getElementById('generate-image-form');
let formInput = document.getElementById('input-value');
let imageContainerText = document.getElementById('imageContainerText');
let imageGenerated = document.getElementById('generated-image');
let imageContainer = document.getElementById('images-visible');

async function fetchImages(category) {
    try {
        // Unsplash Source API URL (no key needed)
        let imageUrl = `https://source.unsplash.com/600x400/?${category}`;
        
        imageContainerText.innerText = "Below is your generated Image:";
        imageContainer.style.display = "block";
        imageGenerated.src = imageUrl;
        
        console.log(imageUrl);
    }
    catch (error) {
        console.log(error);
        imageContainerText.innerText = "Error fetching image!";
    }
}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value.trim();
    if (enteredText !== "") {
        fetchImages(enteredText);
    }
    else {
        imageContainerText.innerText = "Input field can not be empty!";
    }
});
