/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

            // MENU SHOW

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    // MENU HIDDEN
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Wehn we click remove
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const scrollHeader =  () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)



// //  SCROLL SECTIONS ACTIVE LINK
// const sections = document.querySelector('section[id]')

// const scrollActive = () =>{
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id'),
//               sectionClass = document.querySelector('.nav__menu a[href*=]')

//     })
// }






const calculateForm = document.getElementById('calculate-form'),
        calculateCm = document.getElementById('calculate-cm'),
        calculateKg = document.getElementById('calculate-kg'),
        calculateMessage = document.getElementById('calculate-message')



// // const calculateBmi = (e) =>{
// //     e.preventDefault()

// //     // Check if the fields Have a value
// //     if(calculateCm.value === '' || calculateKg.value === ''){
// //         // Add and remove color
// //         calculateMessage.classList.remove('color-green')
// //         calculateMessage.classList.add('color-red')

// //         // Show message
// //         calculateMessage.textContent = 'Fill in the Height and Weight'
   

// //     // Remove message three seconds
// //     setTimeout(() =>{
// //         calculateMessage.textContent = ''
// //     }, 3000)
// //   } else{
// //     // BMI Formula
// //     const cm = calculateCm.value / 100,
// //           kg = calculateKg.value,
// //           bmi = Math.round(kg / (cm * cm))

// //         //   Show your health status

// //         if(bmi < 18.5){
// //             // Add color and Display Message
// //             calculateMessage.classList.add('color-green')
// //             calculateMessage.textContent = `Your BMI is ${bmi} and you are Skinny`
// //         } else if(bmi < 25){
// //             calculateMessage.classList.add('color-green')
// //             calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
// //         } else{
// //             calculateMessage.classList.add('color-green')
// //             calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
// //         }

// //   }

// // }

// calculateForm.addEventListener('submit', calculateBmi)

 const contactFrom = document.getElementById('contact-form'),
       contactMessage = document.getElementById('contact-message'),
       contactUser = document.getElementById('contact-user')

       const sendEmail = (e) =>{
        e.preventDefault()

        // Cheak if the field has a value
        if(contactUser.value === ''){
            // Add and remove color
            contactMessage.classList.remove('color-green')
            contactMessage.classList.add('color-red')

            // Show message
            contactMessage.textContent = 'You Must Enter Your Email'

        }
       }
       contactFrom.addEventListener('submit', sendEmail)