const mainPage = document.querySelector('.content');
const pageOne = document.querySelector('#page-one');
const pageTwo = document.querySelector('#page-two');
const pageThree = document.querySelector('#page-three');
const pageFour = document.querySelector('#page-four');
const nextBtn = document.querySelector('#next');
const backBtn = document.querySelector('#back');
const markOption = document.querySelectorAll('.sidebar > div >.number');
let index = 0;
nextBtn.addEventListener('click',next);
backBtn.addEventListener('click',back);
let pages =[buildPageOne,buildPageTwo,buildPageThree,buildPageFour];
let icons  =[pageOne,pageTwo,pageThree,pageFour];



function clearSelectedBar(){
    markOption.forEach(element=>{
        element.style.backgroundColor = 'transparent'
        element.style.color = '#fff';
    })
}

function render(myFun){
    let modal = myFun();
    clear();
    mainPage.insertAdjacentHTML('afterBegin', modal);
}

function clear(){
    mainPage.innerHTML = ''
}

function next(){
    clearSelectedBar()
    render(pages[index]);
    icons[index].querySelector('.number').style.backgroundColor = '#FFFFFF';
    icons[index].querySelector('.number').style.color = '#000';
   if (index > pages.length-1) {
     index =0;
   }else{
    index++;
   }
    
}

function back(){
    clearSelectedBar()
    render(pages[index-1]);
    icons[index-1].querySelector('.number').style.backgroundColor = '#FFFFFF';
    icons[index-1].querySelector('.number').style.color = '#000';
    if(index < 0){
        index = pages.length-1;
    }else{
        index--;
    }
   
}

function buildPageOne(){
    return `
        <div class="infoSection">
            <h1 class="heading">Personal info</h1>
            <p>please provide your name, email address, and phone number</p>
            <label for="name">Name</label>
            <input type="text" placeholder="e.g, Nathanim tadele">

            <label for="email">Email Address</label>
            <input type="email" placeholder="e.g, nathan@gmail.com">

            <label for="number">Phone Number</label>
            <input type="text" placeholder="e.g, +251942581962">
        </div> 
    `
}

function buildPageTwo(){
    return `
    <div class="plan">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly biling</p>

    <div class="plans">
      <div class="arcade">
          <img src="../assets/images/icon-arcade.svg" alt="">
          <div class="values">
              <h3>Arcade</h3>
              <p>$9/mo</p>
              <h6>2 months free</h6>
          </div>
      </div>

      <div class="advanced">
          <img src="../assets/images/icon-advanced.svg" alt="">
          <div class="values">
              <h3>Advanced</h3>
              <p>$12/mo</p>
                  <h6>2 months free</h6>
          </div>
      </div>

      <div class="pro">
          <img src="../assets/images/icon-pro.svg" alt="">
          <div class="values">
              <h3>Pro</h3>
              <p>$15/mo</p>
                  <h6>2 months free</h6>
          </div>
      </div>
    </div>

    <div class="toggle">
        <h4 class="monthly">Monthly</h4>
        <div class="toggle-btn" id="toggle-btn" onclick=on()>
          <input type="checkbox">
           <span></span>
        </div>
        <h4 class="yearly">yearly</h4>
    </div>
  </div> 
    
    `
}

function buildPageThree(){
    return `
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experiance.</p>
    <div class="services">
        <div class="online">
            <input type="checkbox">
            <div class="con">
                <h4>Online service</h4>
                <p>Access to muliplayer games</p>
            </div>
            <h3>+$1/mo</h3>
        </div>

        <div class="storage">
            <input type="checkbox">
            <div class="con">
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
            </div>
            <h3>+$2/mo</h3>
        </div>

        <div class="customizable">
            <input type="checkbox">
            <div class="con">
                <h4>Customizable profile</h4>
                <p>Extra 1TB of cloud save</p>
            </div>
            <h3>+$2/mo</h3>
        </div>
    </div>
        
    `
}


function buildPageFour(){

    return `
    <h1>Finishing up</h1>
    <p>Double-check everything looks OK before confirming</p>

    <div class="checkout">
        <div class="arcade">
            <div>
                <h3>Arcade ( <span>Yearly</span> )</h3>
                <a href="#">Change</a>
            </div>
            <p class="price">$ <span>90</span>/yr</p>
        </div>
        <div class="online">  
           <h3>Online service</h3>
           <p class="price">$ <span>10</span>/yr</p>
        </div>

        <div class="online">  
            <h3>Online service</h3>
            <p class="price">$ <span>20</span>/yr</p>
         </div>
    </div>
     <div class="total">
        <h3>Total per( <span>Year</span> )</h3>
        <p>$ <span>120</span>/yr</p>
     </div>
    `
}

function on(){
        const monthly = document.querySelector('.monthly');
        const yearly = document.querySelector('.yearly');
        const checkbox = document.querySelector('.toggle input')
        const innerBall = document.querySelector('.toggle span');

        if (checkbox.checked) {
            monthly.style.color = 'hsl(213, 96%, 18%)'
            yearly.style.color = 'hsl(231, 11%, 63%)'
            checkbox.checked = false;
            innerBall.style.transform = 'translateX(0%)'
        }
        else{
            yearly.style.color = 'hsl(213, 96%, 18%)'
            monthly.style.color = 'hsl(231, 11%, 63%)'
            checkbox.checked = true;
            innerBall.style.transform = 'translateX(153%)'
        }
}

render(pages[0]);
