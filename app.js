
const videoInput = document.getElementById("videoInput");
const videoPreview = document.getElementById("videoPreview");
const status = document.getElementById("status");
const testButton = document.getElementById("testButton");

let currentVideoURL = null;

testButton.addEventListener("click", function () {
    status.textContent = "JAVASCRIPT CONNECTED SUCCESSFULLY!";
});

videoInput.addEventListener("change", function () {
    const file = videoInput.files[0];

    if (!file) return;

    if (currentVideoURL) {
        URL.revokeObjectURL(currentVideoURL);
    }

    currentVideoURL = URL.createObjectURL(file);

    videoPreview.src = currentVideoURL;
    videoPreview.hidden = false;

    status.textContent = "Video uploaded successfully!";
});

console.log("DARKOSIES VIDEO ENHANCER INITIALIZED");
