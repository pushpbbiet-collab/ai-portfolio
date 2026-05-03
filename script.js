document.addEventListener("DOMContentLoaded", () => {
    // Accordion functionality
    const accItems = document.querySelectorAll(".acc-item");
    
    accItems.forEach(item => {
        const header = item.querySelector(".acc-header");
        if(header) {
            header.addEventListener("click", () => {
                // For a real app, toggle expanded state and change icon
                item.classList.toggle("expanded");
            });
        }
    });

    // Simple tracker animation (just visual)
    const playBtn = document.querySelector(".play-btn");
    const pauseBtn = document.querySelector(".pause-btn");
    const stopBtn = document.querySelector(".stop-btn");
    
    playBtn.addEventListener("click", () => {
        document.querySelector(".circle-progress").style.animation = "spin 2s linear infinite";
    });
    
    pauseBtn.addEventListener("click", () => {
        document.querySelector(".circle-progress").style.animation = "none";
    });

    stopBtn.addEventListener("click", () => {
        document.querySelector(".circle-progress").style.animation = "none";
        document.querySelector(".tracker-text h2").innerText = "00:00";
    });
});
