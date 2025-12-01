// script.js
document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        
        // Обновляем каждый блок часов отдельно
        updateClockBlock('.x-1', now); // Текущее время
        updateClockBlock('.x-2', new Date(now.getTime() - 8 * 60 * 60 * 1000)); // -8 часов
        updateClockBlock('.x-3', new Date(now.getTime() - 11 * 60 * 60 * 1000)); // -11 часов
    }
    
    function updateClockBlock(selector, date) {
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        
        const secondDegrees = ((seconds / 60) * 360);
        const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
        const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
        
        // Обновляем стрелки для всех элементов в этом блоке
        document.querySelectorAll(`${selector} .second`).forEach(arrow => {
            arrow.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
        });
        document.querySelectorAll(`${selector} .minute`).forEach(arrow => {
            arrow.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
        });
        document.querySelectorAll(`${selector} .hour`).forEach(arrow => {
            arrow.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
        });
    }

    updateClock();
    setInterval(updateClock, 1000);
});