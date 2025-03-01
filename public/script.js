function proxy() {
    let url = document.getElementById("urlInput").value;
    if (!url.startsWith("http")) {
        url = "http://" + url;
    }
    window.location.href = "/proxy?url=" + encodeURIComponent(url);
}
