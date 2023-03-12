const sections = document.querySelectorAll('.section'); //array length 5
const sectBtns = document.querySelectorAll('.controls'); //array length 1
const sectBtn = document.querySelectorAll('.control'); //array length 5
const allSections = document.querySelector('.main-content'); //length 1


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){ //will go over each element in the array
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
            this.className += ' active-btn';
        })
    }

    //Sections Active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active') //add active class to the one that was clicked

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();
