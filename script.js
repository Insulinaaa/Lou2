function updateCounter() {
    const startDate = new Date("2023-12-28T00:00:00");
    const now = new Date();
    const elapsed = now - startDate;

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const months = Math.floor(days / 30.44);
    const weeks = Math.floor((days % 30.44) / 7);
    const remainingDays = Math.floor(days % 7);
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    document.getElementById("months").textContent = months;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = remainingDays;
    document.getElementById("hours").textContent = remainingHours;
    document.getElementById("minutes").textContent = remainingMinutes;
    document.getElementById("seconds").textContent = remainingSeconds;
}

setInterval(updateCounter, 1000);
