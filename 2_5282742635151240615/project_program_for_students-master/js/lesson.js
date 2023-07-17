const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneInput.value = '+996 '

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = ' NOT OK'
        phoneResult.style.color = 'red'
    }
})

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block');
const tabsParent = document.querySelector('.tab_content_items');
const tabs = document.querySelectorAll('.tab_content_item');
let currentTab = 0;
let intervalId;

const hideTabContent = () => {
    tabContent.forEach((element) => {
        element.style.display = 'none';
    });
    tabs.forEach((element) => {
        element.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const startSlider = () => {
    intervalId = setInterval(() => {
        hideTabContent();
        currentTab = (currentTab + 1) % tabs.length;
        showTabContent(currentTab);
    }, 3000);
};

const stopSlider = () => {
    clearInterval(intervalId);
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab) {
                hideTabContent();
                currentTab = tabIndex;
                showTabContent(tabIndex);
                stopSlider();
            }
        });
    }
};

startSlider();

