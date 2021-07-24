let submit = document.getElementById('submitBtn');
let cityName = document.getElementById('cityName');
let city_name = document.getElementById('city_name');
let temp = document.getElementById('temp');
let temp_status = document.getElementById('temp_status');
let top_layer = document.getElementById('top_layer');
let day = document.getElementById('day')
let today_date = document.getElementById('today_date');

const chal = async (e) => {
    e.preventDefault();
    let cityName_val = cityName.value
    if (cityName_val === "") {
        city_name.innerText = "Plz enter the city name";
    }
    else {
        try {

            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName_val}&units=metric&appid=5719a97381f9fae5499da59113e83a75`
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            const arrdata = [data]
            
            

            city_name.innerText = arrdata[0].name;
            temp.innerText = arrdata[0].main.temp;
            // temp_icon = temp_status.innerText
            temp_icon = arrdata[0].weather[0].main;
            console.log(temp_icon);


            if (temp_icon == "Clear") {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color:yellow;font-size:8rem; margin-left : 40px; "></i>'
            }
            else if (temp_icon == "Clouds") {
                temp_status.innerHTML = ' <i <i class="fas fa-cloud" style="color: #eff1ef;font-size:8rem; margin-left : 40px; "></i>'
            }
            else if (temp_icon == "Rain") {
                temp_status.innerHTML = '<i class="fas fa-cloud-showers-heavy" style="color:grey;font-size:8rem ; margin-left : 40px;"></i>'
            }
            else {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="font-size:8rem ; margin-left : 40px; "></i>'
            }
        }



        catch {
            city_name.innerText = "Plz enter the valid city name";
        }
    }
}

submit.addEventListener('click', chal)

