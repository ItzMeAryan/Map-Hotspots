function initMap() {
    const places = {
        Fazilka: { lat: 30.6978, lng: 74.1787, info: 'Fazilka is a city in Punjab, India.' },
        Jalandhar: { lat: 31.3260, lng: 75.5762, info: 'Jalandhar is a city in Punjab, India.' },
        NewDelhi: { lat: 28.6139, lng: 77.2090, info: 'New Delhi is the capital city of India.' }
    };

    const map = L.map('map').setView([30.6978, 74.1787], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (const [name, location] of Object.entries(places)) {
        const marker = L.marker([location.lat, location.lng]).addTo(map)
            .bindPopup(`<b>${name}</b><br>${location.info}`)
            .on('click', () => {
                document.getElementById('place-name').textContent = name;
                document.getElementById('place-info').textContent = location.info;
            });
    }
}

window.onload = initMap;
