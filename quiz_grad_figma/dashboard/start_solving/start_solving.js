let quizesContainer= document.querySelector('.quizesContainer')
let searchInput= document.querySelector('#searchInput')
let checkEvent= document.querySelector('.checkEvent')
let user= document.querySelector('.user')
let back= document.querySelector('#back')
// let quizCard= document.querySelector('.quizCard')
// let quizCard= document.querySelector('.quizCard')

let quizesObj = [
    {
        id: 1,
        title: 'HTML Quiz',
        descriptiton: 'This is MCQs based quiz including all HTML Topics.'
    },
    {
        id: 2,
        title: 'CSS Quiz',
        descriptiton: 'This is MCQs based quiz including all CSS Topics.'
    },
    {
        id: 3,
        title: 'JavaScript Quiz',
        descriptiton: 'This is MCQs based quiz including all JavaScript Topics.'
    },
    {
        id: 4,
        title: 'TypeScript Quiz',
        descriptiton: 'This is MCQs based quiz including all TypeScript Topics.'
    }
]

quizesObj.forEach((values)=>{
    quizesContainer.innerHTML+= `<div class='quizCard'>
        <h3>${values.title}</h3><p>${values.descriptiton}</p>
        </div>`
})

searchInput.onchange = ()=>{
    let filteredQuiz = quizesObj.filter((values)=>{
        let data = values.title.toLowerCase().trim();
        let searchingItem = searchInput.value.toLowerCase().trim();
        return data.includes(searchingItem);
    })
    quizesContainer.innerHTML = ''   
    filteredQuiz.forEach((values)=>{
        quizesContainer.innerHTML += `<div class='quizCard'>
        <h3>${values.title}</h3><p>${values.descriptiton}</p>
        </div>` 
    })       
}

searchInput.addEventListener('input', (event)=>{
    let filteredQuiz = quizesObj.filter((values)=>{
        let data = values.title.toLowerCase().trim() ;
        let searchingItem = event.target.value.toLowerCase().trim();
        return data.includes(searchingItem);
    })
    quizesContainer.innerHTML = ''   
    filteredQuiz.forEach((values)=>{
        quizesContainer.innerHTML += `<div class='quizCard'>
        <h3>${values.title}</h3><p>${values.descriptiton}</p>
        </div>` 
    }) 
})


// getting data from localStorage
let availableAccountList = JSON.parse(localStorage.getItem('storeAccountList'))

let showUser = availableAccountList.find((user)=> user.showDashboard && user.isLogin) || [];
if(showUser.length !== 0){
    user.innerHTML = `${showUser.userName} <div class='userImage'><img src='${showUser.imgURL}' /></div> <i class="fa-solid fa-caret-down"></i>`;
} else{
    window.location.href = '../allLogin/allLogin.html'
}

back.onclick=()=>{
    
}