const textenter = document.getElementById('texteNTER');
const submitBtn = document.getElementById('submitbts');
const day = document.getElementById('day');
const date = document.getElementById('dates');
const city_name = document.getElementById('city_name');
const tem = document.getElementById('tem');
const tem_Status = document.getElementById('tem_status');
//Date-Day object
const today=new Date();
const todaydate=today.getDate();
const getyear = today.getFullYear();
const todayday = today.getDay();
const month = today.getMonth();
const DaysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DaysofMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const getInfo = async(event) =>{
    event.preventDefault();
let CityData = textenter.value;
if(CityData == "")
{
    city_name.innerText="Please Enter something!!" ;
}
else{
    try{
let url=`http://api.openweathermap.org/data/2.5/weather?q=${CityData}&units=metric&appid=b0542c26026046f06070f7ec455f684b`;
const response  = await fetch(url);
const data = await response.json();
const arraydata = [data];
city_name.innerText = `${arraydata[0].name},${arraydata[0].sys.country}`;
tem.innerText=arraydata[0].main.temp;
day.innerText=`${DaysofWeek[todayday]}`;
date.innerText=`${todaydate}-${DaysofWeek[todayday]}-${getyear}`;
const tempMood = arraydata[0].weather[0].main;
if(tempMood === "Clear")
{
    tem_Status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
}
else if(tempMood === "Clouds")
{
    tem_Status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
}
else if(tempMood === "Rain")
{
    tem_Status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
}
else{
    tem_Status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";   
}
       }catch{
        city_name.innerText = `Please Enter State Name Properly `;
       }
    }
}

submitBtn.addEventListener('click',getInfo);
