const chart = document.querySelector("#chart").getContext('2d');

//new
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [23586, 46313, 12349, 76424, 56734, 98633, 45321, 87658, 34215, 87641, 98124],
                borderColor: 'red',
                borderWidth: 2 
            },
            {
                label: 'ETH',
                data: [34567, 78416, 68462, 79805, 45612, 70891, 46254, 60893, 12376, 34526, 28674],
                borderColor: 'blue',
                borderWidth: 2 
            }
        ]
    },
    options: {
        responsive: true
    }
})


//sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})



//change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})