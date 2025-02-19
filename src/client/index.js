import { handleAddTrip } from "./js/app";


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./js/service-worker.js')
            .then(reg => console.log("Service Worker registered:", reg))
            .catch(err => console.error("Service Worker registration failed:", err));
    });
}


document.getElementById('add-trip').addEventListener('click', handleAddTrip);
