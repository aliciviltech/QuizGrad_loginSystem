
let menuBars = document.querySelector('.menuBars');
let signUp = document.querySelector('#signUp');
let login = document.querySelector('#login');
let nav = document.querySelector('.nav');

let menuBarsShow=false
menuBars.onclick = ()=>{
    menuBarsShow=!menuBarsShow;
    if(menuBarsShow){
        nav.classList.add('moveNav');
    } else{
        nav.classList.remove('moveNav');
    }
}

// getting data from localStorage
let availableAccountList = JSON.parse(localStorage.getItem('storeAccountList'));

// check for Dashboard
let checkForDashboard = availableAccountList.filter((user) => user.showDashboard === true);
if(checkForDashboard.length !== 0){
    window.location.href = './dashboard/dashboard.html'
}

// check for is Login?
let checkForLogin = availableAccountList.filter((user) => user.isLogin === true);
if(checkForLogin.length !== 0){
    login.onclick = ()=>{
        window.location.href = './allLogin/allLogin.html'
    }
} else{
    login.onclick=()=>{
        window.location.href = './login/login.html'
    }
}
