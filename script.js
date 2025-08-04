document.addEventListener("DOMContentLoaded", function () {
    // Animate progress bar
    setTimeout(() => {
        document.querySelector(".progress").style.width = "100%";
    }, 500);

    // Countdown Timer
    const countdownEl = document.getElementById("countdown");
    const launchDate = new Date("2025-08-10T00:00:00").getTime(); // Change this date

    const updateCountdown = () => {
        const now = new Date().getTime();
        const diff = launchDate - now;

        if (diff <= 0) {
            countdownEl.innerText = "We're Live!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.innerText = `Launching in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Theme Toggle
    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
});
