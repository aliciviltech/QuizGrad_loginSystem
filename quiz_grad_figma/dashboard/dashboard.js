let userName = document.querySelector('.userName');
let userMenu = document.querySelector('.userMenu');
let logout = document.querySelector('#logout');
let otherAccount = document.querySelector('#otherAccount');
let banner = document.querySelector('.banner');
let startSolving = document.querySelector('#startSolving');
let iframe = document.querySelector('iframe');
let iframeBack = document.querySelector('#iframeBack');

// getting data from localStorage
let availableAccountList = JSON.parse(localStorage.getItem('storeAccountList'))

let showUser = availableAccountList.find((user)=> user.showDashboard && user.isLogin) || [];
if(showUser.length !== 0){
    userName.innerHTML = `${showUser.userName} <div class='userImage'><img src='${showUser.imgURL}' /></div> <i class="fa-solid fa-caret-down"></i>`;
    console.log(true)
} else{
    window.location.href = '../allLogin/allLogin.html'
}

let userNameShow = false;
userName.onclick = ()=>{
    userNameShow = !userNameShow;
    if(userNameShow){
        userMenu.style.display = 'flex'
    } else{
        userMenu.style.display = 'none'
    }
} 


logout.onclick=()=>{
    let checkForLogin = availableAccountList.find((user)=> user.showDashboard && user.isLogin)
    checkForLogin.isLogin = false;
    checkForLogin.showDashboard = false;
    localStorage.setItem('storeAccountList',JSON.stringify(availableAccountList))
    window.location.href = '../index.html'
    // localStorage.clear();
}

otherAccount.onclick=()=>{
    window.location.href = '../allLogin/allLogin.html'   
}

startSolving.onclick=()=>{
    banner.style.display = 'none'
    iframe.style.display = 'block'
    iframeBack.style.display = 'block'
}
iframeBack.onclick=()=>{
    banner.style.display = 'flex'
    iframe.style.display = 'none'
    iframeBack.style.display = 'none'
}