let menu = document.querySelector('.Menu')
console.log(menu);
fetch('https://api.sampleapis.com/presidents/presidents')
.then((res) => res.json())
.then((res) => {
    res.forEach((item) => {
        menu.innerHTML += `
            <div class="card">
                <img src="${item.photo}">
                <p class="card_name">${item.name}</p>
                <p class="card_year">${item.yearsInOffice}</p>
                <p class="card_presidents">${item.vicePresidents}</p>
            </div>
        `
    })
})