const loadAllCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayAllCountries(data))
}

const displayAllCountries = Countries =>{
    const allCountriesDiv = document.getElementById('All-countries');
    // console.log(Countries);
    // for(const country of Countries){
    //     console.log(country);
    // }

    Countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">
        Details
        </button>
        `;
        allCountriesDiv.appendChild(countryDiv);
    });
}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCountryDetails(data[0]))
}

const showCountryDetails = Country =>{
    const detailsContainer = document.getElementById('country-detail');
    detailsContainer.innerHTML = `
    <h3>Name: ${Country.name.common}</h3>
    <img src="${Country.flags.png}" alt="">
    `
}

loadAllCountries();