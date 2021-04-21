let input_val = document.getElementById('cityname');
let searchbtn = document.getElementById('search_btn');
let getoutput = document.getElementById('city_n');
let tempicon=document.getElementById('temp_icon');
let temp=document.getElementById('temp_degree');
let datahide=document.querySelector('.bottom_layer')
searchbtn.addEventListener('click', eventhandler);

async function eventhandler(event) {
    event.preventDefault();
    let city_val = input_val.value;
    if (city_val === '') {
        getoutput.innerText = `Plz enter the city name!  `
        datahide.classList.add('data_hide')
    }
    else {
        try {
            let url = ` http://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=613e722d7b8bcd8aeaaf4a296c10cf73`
            let response = await fetch(url);
            let data=await response.json()
            let arrdata=[data]
            // console.log(arrdata[0].main.temp)
            getoutput.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            temp.innerText=arrdata[0].main.temp;
            tempicon.innerText=arrdata[0].weather[0].main;
            //  console.log(arrdata)
            datahide.classList.remove('data_hide')

        }
        catch{
            getoutput.innerText = `Plz enter the correct city name!  `
            datahide.classList.add('data_hide')
        }

}
}
