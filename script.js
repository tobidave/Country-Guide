let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.querySelector(".result");
let displayMessage = document.querySelector(".displayMessage");
let displayMessageLoading = document.querySelector(".displayMessageLoading")
const date = document.getElementById('date')
const currentYear = new Date().getFullYear()

date.textContent = currentYear

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    // let countryCapital = "Abuja";
    // let countryCurrency = "Naira - NGN";
    // let countryContinent = "Africa";
    // let countryLangueges = "English, Yoruba, Housa, Igbo";
    // let countryPopulation = 1203039 + "T";
    // let countryLogo = "./ssayan-majhi-WecQmKWGy8Q-unsplash.jpg";

    // let finalUrl= `https://restcountries.com/v3.1/name/${countryName}`;
    let finalUrl= `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    let flagsvg = `https://countryflagsapi.com/svg/${countryName}`;

    // result.innerHTML =`
    //         <img src="${flagsvg}" alt="${countryName} logo" class="flagImg" />
    //         <h2>${countryName}</h2>
    //         <div class="wrapper">
    //             <div class="dataWrapper">
    //                 <h4>Capital:</h4>
    //                 <span>${countryCapital}</span>
    //             </div>
    //         <div class="wrapper">
    //             <div class="dataWrapper">
    //                 <h4>Continent:</h4>
    //                 <span>${countryContinent}</span>
    //             </div>
    //         <div class="wrapper">
    //             <div class="dataWrapper">
    //                 <h4>Population:</h4>
    //                 <span>${countryPopulation}</span>
    //             </div>
    //         <div class="wrapper">
    //             <div class="dataWrapper">
    //                 <h4>Currency</h4>
    //                 <span>${countryCurrency}</span>
    //             </div>
    //         <div class="wrapper">
    //             <div class="dataWrapper">
    //                 <h4>Langueges:</h4>
    //                 <span>${countryLangueges}</span>
    //             </div>
    //         </div>
    //      `

    displayMessage.style.display = "none";
    console.log(finalUrl);

    // fetch(finalUrl)
    // .then((res) => res.json())
    // .then((data) => {
    //         console.log(data)


    //  });
    fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {
            console.log(data[0])
            console.log(data[0].flags.svg)
            console.log(data[0].fifa)
            console.log(data[0].capital)
            console.log(data[0].continents)
            console.log(data[0].population)
            console.log(data[0].currencies)
            console.log(data[0].timezones)
            let CommonName = countryName.toUpperCase();
        
            // <img src="${data[0].flags.svg}" alt="${countryName}" class="flagImg" />
            result.innerHTML =`
                    <img src="${data[0].flags.svg}" alt="${countryName}" class="flagImg materialboxed responsive-img" />
                    <h2>${CommonName}</h2>
                    <div class="re-group">
                        <div class="wrapper">
                            <div class="dataWrapper">
                                <h4>Capital:</h4>
                                <span>${data[0].capital}</span>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="dataWrapper">
                                <h4>Continent:</h4>
                                <span>${data[0].continents}</span>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="dataWrapper">
                                <h4>Population:</h4>
                                <span>${data[0].population}</span>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="dataWrapper">
                                <h4>Currency:</h4>
                                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="dataWrapper">
                                <h4>Comon Languesges:</h4>
                                <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
                            </div>
                        </div>
                    </div>
                    `;
                }).catch(() => {
                    if (countryName.length == 0){
                        result.innerHTML =  ` 
                            <h3>The input field can not be empty.</h3>
                        `
                    }else{
                        result.innerHTML =  ` 
                            <h3>Invalid  input field.</h3>
                        `
                    }
                })
                
});
            countryInp.addEventListener("input", () => {
                    let ctryInp = countryInp.value
    displayMessage.innerHTML =  `
        <h1 class="displayMessageLoading">
            Searching for <span class="search">${ctryInp} </span>
        </h1>
    `
});
countryInp.addEventListener("mouseleave", () => {
    displayMessage.innerHTML =  `
    <h1 class="displayMessageLoading">
        .......
    </h1>
`
});
countryInp.addEventListener("mouseenter", () => {
    let ctryInp = countryInp.value
    displayMessage.innerHTML =  `
        <h1 class="displayMessageLoading">
            Searching for ${ctryInp}
        </h1>
    `
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });