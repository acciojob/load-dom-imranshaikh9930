//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function() {
    const info = document.createElement("div");
    info.id = "browser-info";
    info.innerText = "DOM load success";

    document.body.innerHTML = ''; 
    document.body.appendChild(info);
});
