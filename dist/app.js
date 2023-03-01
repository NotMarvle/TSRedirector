function submit() {
    const urlInput = document.getElementById("url");
    const url = (urlInput.value);
    if (url.startsWith("https://")) {
        document.getElementById("error").innerHTML = "";
        location.href = url;
    }
    else {
        document.getElementById("error").innerHTML = "Invalid URL.";
    }
}
;
