document.addEventListener('DOMContentLoaded', function() {
    let headers = document.querySelectorAll('.expandable-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            let content = this.nextElementSibling;

            if(content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
