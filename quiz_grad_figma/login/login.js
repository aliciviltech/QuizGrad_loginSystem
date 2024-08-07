
let loginBtn = document.querySelector('#loginBtn');
let signUpBtn = document.querySelector('#signUpBtn');
let emailInput = document.querySelector('#emailInput');
let passInput = document.querySelector('#passInput');
let allLoginContainer = document.querySelector('.allLoginContainer');

// to go to signup page
signUpBtn.onclick = () => {
    window.location.href = '../signup/signup.html'
}

// getting data from localStorage
let availableAccountList = JSON.parse(localStorage.getItem('storeAccountList'))

// Reset showDashboard for all users
availableAccountList.forEach(user => {
    user.showDashboard = false;
});



// loging in
loginBtn.onclick = () => {
    let targetAccount = availableAccountList.find((account) => {
        return account.userEmail === emailInput.value;
    })

    if (emailInput.value === targetAccount.userEmail && passInput.value === targetAccount.userPassword) {
        window.location.href = '../dashboard/dashboard.html';
        targetAccount.isLogin = true;
        targetAccount.showDashboard = true;
        localStorage.setItem('storeAccountList', JSON.stringify(availableAccountList))
    } else {
        alert('Incorrect Email or Password');
    }
}

