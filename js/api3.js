// JavaScript to populate the region dropdown
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const dropdownContainer = document.getElementById('dropdown-container');

regions.forEach(region => {
    const option = document.createElement('li');
    option.classList.add('dropdown-item');
    option.innerHTML = `<a href="#" onclick="loadData('${region}')">${region}</a>`;
    dropdownContainer.appendChild(option);
});

// Rest of your code remains the same for now
const loadData = (region) => {
    url = `https://restcountries.com/v3.1/region/${region}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = countries => {
    const countryContainer = document.getElementById('country-container');
    countryContainer.innerHTML = '';
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${country.flags.png}" alt="">
        
        <div class="card-body">
            <h5 class="card-title">Name: ${country.name.common}</h5>
            <p class="card-text">Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <p class="card-text">Aria: ${country.area}</p>
            <p class="card-text">Population: ${country.population}</p>
            <a href="${country.maps.googleMaps}" class="btn btn-primary" target=_blank>Map</a>
        `;
        countryContainer.appendChild(div);

    })
}
