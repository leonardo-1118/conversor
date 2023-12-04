const currencySrc = [
    { name: 'dollar', src: 'assets/dollar-coin.png.png'},
    { name: 'euro',   src: 'assets/euro-coin.png.png'},
    { name: 'pound',  src: 'assets/libra-coin.png'},
    { name: 'real',   src: 'assets/real-coin.png.png'}
]

const currencyFlag = [
    {name: 'dollar', flag: '$'},
    {name: 'euro',   flag: '€'},
    {name: 'pound',  flag: '£'},
    {name: 'real',   flag: 'R$'}
]

const allCurrency = [
    {name: 'dollar', euro:   1.09, pound: 1.26, real:  0.21},
    {name: 'euro',   dollar: 0.92, pound: 1.16, real:  0.19},
    {name: 'pound',  dollar: 0.79, euro:  0.86, real:  0.16},
    {name: 'real',   dollar: 4.87, euro:  5.23, pound: 6.06}
]