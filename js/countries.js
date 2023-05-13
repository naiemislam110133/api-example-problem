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
        countryDiv.innerHTML = `
            <h3>country name: ${country.name.common}</h3>
            <p>country details: ${country.capital ? country.capital[0] : 'Not Capital'}</p>
        `;
        countriesContainer.appendChild(countryDiv);
        
    });

}

loadCountries();