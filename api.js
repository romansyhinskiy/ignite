const baseUrl = 'https://api.rawg.io/api';
const API_KEY = '122977d813094c8a9752ba186c1019cb'

const getMonth = () => {
    const month = new Date().getMonth();
    if(month < 10){
        return `0${month}`
    }else {
        return month
    }    
}

const getDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    }else {
        return day
    }    
}

const getCurrentYear = new Date().getFullYear();
const getCurrentMonth = getMonth();
const getCurrentDay = getDay();
const getCurrentDate = `${getCurrentYear}-${getCurrentMonth}-${getCurrentDay}`;
const lastYear = `${getCurrentYear - 1}-${getCurrentMonth}-${getCurrentDay}`;
const nextYear = `${getCurrentYear + 1}-${getCurrentMonth}-${getCurrentDay}`;

const popular_games = `/games?key=${API_KEY}&dates=${lastYear},${getCurrentDate}&ordering=-rating&page_size=10`

const popularGamesURL = () => `${baseUrl}${popular_games}`;

console.log(popularGamesURL())
