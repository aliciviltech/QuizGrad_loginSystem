let loginBtn = document.querySelector('#loginBtn')
let signUpBtn = document.querySelector('#signUpBtn')
let userNameInput = document.querySelector('#userNameInput')
let emailInput = document.querySelector('#emailInput')
let passInput = document.querySelector('#passInput')
let confirmPassInput = document.querySelector('#confirmPassInput')
let imageInput = document.querySelector('#imageInput')
let imageContainer = document.querySelector('#imageContainer')

// to go on login page
loginBtn.onclick = () => {
    window.location.href = '../login/login.html'    
}

// getting data from local storage
let availableAccountList = JSON.parse(localStorage.getItem('storeAccountList'));

// if already logged in
if(availableAccountList){
    let checkForLogin = availableAccountList.find((user)=> user.isLogin === true)
    // if(checkForLogin.length){ window.location.href = '../dashboard/dashboard.html'}
}

let finalImageURL ;
function uploadImage(){
    return new Promise((resolve, reject)=>{
        let img = imageInput.files[0]

        if(!img){
            reject('no file selected')
        }

        let imgURL;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(img)

        fileReader.onload = ()=>{
            imageContainer.src = fileReader.result;
            imgURL = fileReader.result;
            localStorage.setItem('imgURL', imgURL);
            resolve(imgURL)
        }

        fileReader.onerror = (error) => {
            reject(error);
        };
    })
}
imageInput.onchange = ()=>{
    uploadImage().then((data)=>{
        finalImageURL = data;
    }).catch((err)=>console.log(err))
}
let accountsList = availableAccountList || [];
let userID;
if(availableAccountList.length>0){
    userID = availableAccountList[availableAccountList.length-1]['userID']
} else{
    userID=10000;
}

signUpBtn.onclick = () => {
    if(userNameInput.value.trim() !== '' && emailInput.value.trim() !== '' && passInput.value.trim() !== ''){
        if (passInput.value === confirmPassInput.value) {
            userID++;
            let accountData = {
                userID: userID,
                userName: userNameInput.value,
                userEmail: emailInput.value,
                userPassword: passInput.value,
                imgURL: finalImageURL 
            }
            accountsList.push(accountData);
            localStorage.setItem('storeAccountList', JSON.stringify(accountsList));
            window.location.href = '../login/login.html';
            console.log(uploadImage())
        } else {
            alert('password did not match');
        }
    } else{
        alert('please enter all fields correctly');
    }
}



