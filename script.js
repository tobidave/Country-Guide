let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.querySelector(".result");
let displayMessage = document.querySelector(".displayMessage");
let displayMessageLoading = document.querySelector(".displayMessageLoading")

searchBtn.addEventListener("click", () => {
    let countryName = "india";
    // let countryCapital = "Abuja";
    // let countryCurrency = "Naira - NGN";
    // let countryContinent = "Africa";
    // let countryLangueges = "English, Yoruba, Housa, Igbo";
    // let countryPopulation = 1203039 + "T";
    // let countryLogo = "./ssayan-majhi-WecQmKWGy8Q-unsplash.jpg";

    let finalUrl= `https://restcountries.com/v3.1/name/nigeria`;

    // result.innerHTML =`
    //         <img src="${countryLogo}" alt="${countryName} logo" class="flagImg" />
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
    // result.innerHTML = apiKey;
    console.log(finalUrl);

    fetch(finalUrl)
    .then((res) => res.json)
    .then((data) => {
            console.log(data[0])
            console.log(data[0].flags.svg)
            console.log(data[0].capita)

            result.innerHTML =`
            <img src="${data.flags.svg}" alt="${countryName}" class="flagImg" />
            <h2>${data.name.comon}</h2>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Capital:</h4>
                    <span>${data.capital}</span>
                </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Continent:</h4>
                    <span>${data.continents}</span>
                </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Population:</h4>
                    <span>${data.population}</span>
                </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Currency:</h4>
                    <span>${data.currencies[Objesct.keys(data.currencies)].name} - ${Object.keys(data.currencies)}</span>
                </div>
            <div class="wrapper">
                <div class="dataWrapper">
                    <h4>Comon Languesges:</h4>
                    <span>${Object.values(data.languages).toString().split(",").join(",")}</span>
                </div>
            </div>
         `;
    }).catch(() => {
        if(countryName.length == 0){
            result.innerHTML = `
                <h3>The input field can not be empty.</h3>
            `
        }else{
            result.innerHTML = `
            <h3>Invalid Country name.</h3>
        `
        }
    })
});
countryInp.addEventListener("input", () => {
    let ctryInp = countryInp.value
    displayMessage.innerHTML =  `
        <h1 class="displayMessageLoading">
            Searching for ${ctryInp}
        </h1>
    `
});
// countryInp.addEventListener("mouseenter", () => {
//     displayMessage.innerHTML =  `
//     <h1 class="displayMessageLoading">
//         i am inside
//     </h1>
// `  
// });
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


// `

//             `
// https://restcountries.com/v3.1/name/{name}?fullText=true
// https://restcountries.com/v3.1/name/aruba?fullText=true