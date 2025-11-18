// script.js
document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        
        // Обновляем все часы с разными временными зонами
        updateAllClocks('.x-1', now); // Текущее время (0 часов)
        updateAllClocks('.x-2', new Date(now.getTime() - 8 * 60 * 60 * 1000)); // -8 часов
        updateAllClocks('.x-3', new Date(now.getTime() - 11 * 60 * 60 * 1000)); // -11 часов
    }
    
    function updateAllClocks(clockClass, date) {
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        
        // Рассчитываем углы поворота для стрелок
        const secondDegrees = ((seconds / 60) * 360);
        const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
        const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
        
        // Находим ВСЕ часы по классу и обновляем их стрелки
        document.querySelectorAll(clockClass).forEach(clock => {
            const secondHand = clock.querySelector('.second');
            const minuteHand = clock.querySelector('.minute');
            const hourHand = clock.querySelector('.hour');
            
            if (secondHand) secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
            if (minuteHand) minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
            if (hourHand) hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
        });
    }

    // Обновляем время сразу при загрузке
    updateClock();
    
    // Затем обновляем каждую секунду
    setInterval(updateClock, 1000);
});// script.js
document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const now = new Date();
        
        // Обновляем все часы с разными временными зонами
        updateAllClocks('.x-1', now); // Текущее время (0 часов)
        updateAllClocks('.x-2', new Date(now.getTime() - 8 * 60 * 60 * 1000)); // -8 часов
        updateAllClocks('.x-3', new Date(now.getTime() - 11 * 60 * 60 * 1000)); // -11 часов
    }
    
    function updateAllClocks(clockClass, date) {
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        
        // Рассчитываем углы поворота для стрелок
        const secondDegrees = ((seconds / 60) * 360);
        const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
        const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
        
        // Находим ВСЕ часы по классу и обновляем их стрелки
        document.querySelectorAll(clockClass).forEach(clock => {
            const secondHand = clock.querySelector('.second');
            const minuteHand = clock.querySelector('.minute');
            const hourHand = clock.querySelector('.hour');
            
            if (secondHand) secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
            if (minuteHand) minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
            if (hourHand) hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
        });
    }

    // Обновляем время сразу при загрузке
    updateClock();
    
    // Затем обновляем каждую секунду
    setInterval(updateClock, 1000);
});