let allLoginContainer = document.querySelector('.allLoginContainer');
let addOther = document.querySelector('#addOther');

// getting data from localStorage
let availableAccountList = JSON.parse(localStorage.getItem('storeAccountList')) || [];

// Reset showDashboard for all users
availableAccountList.forEach(user => {
    user.showDashboard = false;
});
localStorage.setItem('storeAccountList', JSON.stringify(availableAccountList));

// if already logged in
let checkForLogin = availableAccountList.filter((user) => user.isLogin === true);
if (checkForLogin.length === 0) {
    window.location.href = '../login/login.html'
};

// Create user tags
checkForLogin.forEach((element, index) => {
    allLoginContainer.innerHTML += `
        <div class='userTag test' data-index='${index}'>
            <img src='${element.imgURL}' />
            <div>
                <p>${element.userName}</p>
                <p>${element.userEmail}</p>
            </div>
        </div>`;
    console.log(index, element)
});

// Attach event listeners to user tags
let userTags = document.querySelectorAll('.test');
userTags.forEach((tag) => {
    tag.onclick = () => {
        let index = tag.getAttribute('data-index');
        console.log('getattr',index);
        checkForLogin[index].showDashboard = true;
        localStorage.setItem('storeAccountList', JSON.stringify(availableAccountList));
        window.location.href = '../dashboard/dashboard.html';
        console.log(availableAccountList);
    }
});



addOther.onclick = () => {
    window.location.href = '../login/login.html'
}

