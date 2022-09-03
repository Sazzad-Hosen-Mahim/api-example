const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    const  countryContainer = document.getElementById('countries-container');
    countries.forEach(mahim => {
        // console.log(mahim);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        // console.log(mahim);
        countryDiv.innerHTML= `
        <h3>Country Name: ${mahim.name.common}</h3>
        <p>Capital: ${mahim.capital ? mahim.capital[0] : 'No Capital'} </p>
        <button onclick="loadCountryDetail('${mahim.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    })

}

loadCountryDetail =(code) => {
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code);
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h3>Country Name: ${country.name.common}</h3>
    <img src="${country.flags.png}">
    
    `
}

loadCountries();