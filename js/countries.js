const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountres(data))
    // akhankar data ta array of object abr object of array thakte pare abar object of object thake pare
}


const displayCountres = countries =>{
    // for(const country of countries){
    //     console.log(country);
    // } akhane array ase array ke for loop ba for each jekone akta diye korle hobe amra aktu vinno rokom kore korte chacce 

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>country name: ${country.name.common}</h3>
            <p>country details: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick = "loadCountryInfo('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
        
    });
}

const loadCountryInfo = (code) =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log("countries details code:", code);

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>Name: ${country.name.common}</h2>
        <img src = "${country.flags.svg}">
    `
}


loadCountries();