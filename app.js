let counters = document.querySelectorAll('.counter');
let healthCondition = document.querySelector('.health');

function updateHealthData() 
{
    let heartRate= Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    let sleep= Math.floor(Math.random() * (9 - 5 + 1)) + 5;
    let water= Math.floor(Math.random() * (12 - 4 + 1)) + 4;
    let steps= Math.floor(Math.random() * (15000 - 1000 + 1)) + 1000;

    let newValues = [heartRate, sleep, water, steps];

    counters.forEach((counter, index) => 
    {

        counter.setAttribute('data-target', newValues[index]);

        counter.innerText = newValues[index];

    });
}
setInterval(updateHealthData, 2000);
