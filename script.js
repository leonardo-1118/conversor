const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')
const mainSelect = document.querySelector('.main-currency-select')
const img1 = document.querySelector('.currency-img1')
const img2 = document.querySelector('.currency-img2')
const currencyNamed1 = document.getElementById("currency-named1")
const currencyNamed2 = document.getElementById("currency-named2")
const toConvert = document.querySelector('.currency-value-to-convert')

function selectImg1() {
    const sign1 = document.querySelector(".sign-currency1")
    const selectedValue = this.value
   
    currencySrc.forEach( (currency) => {
        if (selectedValue === currency.name) {
            img1.src = currency.src
            currencyNamed1.innerHTML = currency.name
                                                     
        }                                             
    }) 

    currencyFlag.forEach( (sign) => {
        if (selectedValue === sign.name) {
            sign1.innerHTML = sign.flag  
        }                                             
    })

    if (selectedValue === currencySelect.value) {
        currencySelect.selectedIndex = (currencySelect.selectedIndex + 1) % currencySelect.options.length
    }
}

function selectImg2() {
    const sign2 = document.querySelector(".sign-currency2")
    const selectedValue = this.value
   
    currencySrc.forEach( (currency) => {
        if (selectedValue === currency.name) {
            img2.src = currency.src
            currencyNamed2.innerHTML = currency.name 
        } 
    })

    currencyFlag.forEach( (sign) => {
        if (selectedValue === sign.name) {
            sign2.innerHTML = sign.flag 
        }                                             
    })

    if (selectedValue === mainSelect.value) {
        mainSelect.selectedIndex = (mainSelect.selectedIndex + 1) % mainSelect.options.length
    }
}

function adder() {
    const inputCurrency = document.querySelector(".input-currency").value
    const converted = document.querySelector(".currency-value")
    const mainCurrency = mainSelect.value
    const secondaryCurrency = currencySelect.value
    const toConvert = document.querySelector('.currency-value-to-convert')
    
    if (inputCurrency.trim() !== "") {toConvert.innerHTML = inputCurrency}

    for (let i = 0; i < allCurrency.length; i++) {
        if (allCurrency[i].name === mainCurrency) {
            mainCurrencyObj = allCurrency[i]
            break
        }
    }

    let = mainCurrencyObj
    const exchangeRate = mainCurrencyObj[secondaryCurrency]

    if (inputCurrency.trim() !== "") {
        const result = inputCurrency / exchangeRate
        converted.innerHTML = result.toFixed(2)
    }
}

function signFormat() {
    const sign1 = document.querySelector(".sign-currency1")
    const sign2 = document.querySelector(".sign-currency2")
    const selectedValue = this.value

    currencyFlag.forEach( (sign) => {
        if (selectedValue === sign.name) {
            sign1.innerHTML = currency.name  
        }                                             
    })
    currencyFlag.forEach( (sign) => {
        if (selectedValue === sign.name) {
            sign2.innerHTML = currency.name  
        }                                             
    })
}

convertButton.addEventListener('click', adder)
mainSelect.addEventListener('change', selectImg1)
currencySelect.addEventListener('change', selectImg2)