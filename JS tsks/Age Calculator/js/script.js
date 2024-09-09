// function calculateAge() 
// {
//     const today=Date();
//     const birthDateInput=document.getElementById("birthdate").value;
//     const birthDateParts=birthDateInput.split("-");
//     const birthYear=birthDateParts[0];
//     const birthMonth=birthDateParts[1];
//     const birthDay=birthDateParts[2];
//     const birthDate=new Date(birthYear,birthMonth,birthDay);

//     console.log(birthDateInput);
//     console.log(birthDateParts);
//     console.log(birthDate);

//     const ageInMiliSeconds=today-birthDate;
//     const ageInSeconds=Math.floor(ageInMiliSeconds/1000);
//     const ageInMinutes=Math.floor(ageInSeconds/60);
//     const ageInHours=Math.floor(ageInMinutes/60);
//     const ageInDays=Math.floor(ageInHours/24);
//     const ageInWeeks=Math.floor(ageInDays/7);
//     const ageInMonths=Math.floor(ageInHours/30.436875);
//     const ageInYears=Math.floor(ageInHours/365.25);
//     const resultContainer=document.getElementById("resultcontainer");

//     const result=document.getElementById("result");
//     result.innerHTML=`
//     <div class="result-items">
//         <h3>Age:</h3>
//         <p> ${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
//     </div>

//     <div class="result-items">
//         <h3>Month Passed: </h3>
//         <p> ${ageInMonths} </p>
//     </div>

//     <div class="result-items">
//         <h3>Weeks Passed: </h3>
//         <p> ${ageInWeeks} </p>
//     </div>

//     <div class="result-items">
//         <h3>Days Passed: </h3>
//         <p> ${ageInDays} </p>
//     </div>

//     <div class="result-items">
//         <h3>Hours Passed: </h3>
//         <p> ${ageInHours} </p>
//     </div>

//     <div class="result-items">
//         <h3>Minutes Passed: </h3>
//         <p> ${ageInMinutes} </p>
//     </div>
//     `;
// };


// const ageCalculatorForm=document.getElementById("ageCalculator");
// ageCalculatorForm.addEventListener("submit", (Event)=>
// {
//     Event.preventDefault();    
//     calculateAge();
// });



function calculateAge() {
    const today = new Date(); 
    const birthDateInput = document.getElementById("birthdate").value;
    const birthDateParts = birthDateInput.split("-");
    const birthYear = parseInt(birthDateParts[0]);
    const birthMonth = parseInt(birthDateParts[1]) - 1;
    const birthDay = parseInt(birthDateParts[2]);
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);

    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.getElementById("resultcontainer");
    const result = document.getElementById("result");
    result.innerHTML = `
        <div class="result-items">
            <h3>Age:</h3>
            <p> ${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
        </div>

        <div class="result-items">
            <h3>Month Passed: </h3>
            <p> ${ageInMonths} </p>
        </div>

        <div class="result-items">
            <h3>Weeks Passed: </h3>
            <p> ${ageInWeeks} </p>
        </div>

        <div class="result-items">
            <h3>Days Passed: </h3>
            <p> ${ageInDays} </p>
        </div>

        <div class="result-items">
            <h3>Hours Passed: </h3>
            <p> ${ageInHours} </p>
        </div>

        <div class="result-items">
            <h3>Minutes Passed: </h3>
            <p> ${ageInMinutes} </p>
        </div>
    `;
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});
