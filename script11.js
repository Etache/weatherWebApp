// let imgUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=Bishkek,KG&lang=ru&key=b243323206c94a609e57dbbfcd78f583&units=S'
// fetch("https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=bishkek%2CKyrgyzstan&lat=42.87&lon=74.59&cnt=15&units=metric%20or%20imperial&lang=ru", {
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-key": "4613906626msh3ef3a52f788ce0fp1c01e0jsn96ef5dec1531",
//       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
//     }
//   })
//   .then(response => {
//     console.log(response);
//       return response.json()
//     })
//     .then(data =>{
//     console.log(data)
//     document.querySelector('.city h1').innerHTML = data.city.name + ', ' + data.city.country
//     document.querySelector('.minTemp').innerHTML = Math.floor(data.list[0].temp.min - 273) + '&deg;'
//     document.querySelector('.maxTemp').innerHTML = Math.floor(data.list[0].temp.max - 273) + '&deg;'
//     document.querySelector('.temp p').innerHTML = Math.floor(data.list[0].temp.day - 273) + '&deg;'
//     document.querySelector('.wind p').innerHTML = 'Ветер: ' + Math.floor(data.list[0].speed) + ' м/с'
//     document.querySelector('.fallout span').innerHTML = data.list[0].humidity+ '%'
//     document.querySelector('.icon p').innerHTML = data.list[0].weather[0].description
//     document.querySelector('#weekDayTemp2').innerHTML = Math.floor(data.list[1].temp.day -273) + '&deg;'
//     document.querySelector('#weekDayTemp3').innerHTML = Math.floor(data.list[2].temp.day -273) + '&deg;'
//     document.querySelector('#weekDayTemp4').innerHTML = Math.floor(data.list[3].temp.day -273) + '&deg;'
//     document.querySelector('#weekDayTemp5').innerHTML = Math.floor(data.list[4].temp.day -273) + '&deg;'
//     document.querySelector('#weekDayTemp6').innerHTML = Math.floor(data.list[5].temp.day -273) + '&deg;'
//     document.querySelector('#weekDayTemp7').innerHTML = Math.floor(data.list[6].temp.day -273) + '&deg;'

//     })
//     .catch(err => {
//     console.error(err);
//     });



let url = 'http://api.weatherunlocked.com/api/forecast/42.87,74.59?app_id=999207aa&lang=ru&app_key=1e1afdbf0250f7f24b35028b7a0b77cb'

function dated(date){
  if(date == 1){
    return 'Понедельник'
  }else if(date == 2){
    return 'Вторник'
  }
  else if(date == 3){
    return 'Среда'
  }
  else if(date == 4){
    return 'Четверг'
  }
  else if(date == 5){
    return 'Пятница'
  }
  else if(date == 6){
    return 'Суббота'
  }
  else if(date == 0){
    return 'Воскресенье'
  }
}

fetch(url)
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    console.log(data)
    // document.querySelector('.dateToDay').textContent = data.Days[0].date
    // document.querySelector('.dayToDay').textContent = dated(new Date().getDay())
    // document.querySelector('.wind p').textContent = 'Ветер: ' + data.Days[0].windspd_max_kmh + 'км/ч'
    // document.querySelector('.fallout span').textContent = Math.floor((data.Days[0].humid_max_pct + data.Days[0].humid_min_pct)/2) + '%'
    // let iconSrc = data.Days[0].Timeframes[0].wx_icon
    // document.querySelector('.icon img').setAttribute('src', `imgs/set/${iconSrc.substring(0,iconSrc.length - 3)}png`)
    // document.querySelector('.icon p').textContent = data.Days[0].Timeframes[0].wx_desk
    // document.querySelector('.max span').textContent = data.Days[0].temp_max_c
    // document.querySelector('.min span').textContent = data.Days[0].temp_min_c
    // document.querySelector('').textContent = Math.floor((data.Days[0].temp_max_c + data.Days[0].temp_min_c)/2)

    document.querySelector('.dateToDay').textContent = data.Days[0].date
    document.querySelector('.dayToDay').textContent = dated(new Date().getDay())
    document.querySelector('.wind p').textContent = 'Ветер: ' + data.Days[0].windspd_max_kmh + 'км/ч'
    document.querySelector('.fallout span').textContent = Math.floor((data.Days[0].humid_max_pct + data.Days[0].humid_min_pct)/2)+ '%'
    let iconSrc = data.Days[0].Timeframes[0].wx_icon
    document.querySelector('.icon img').setAttribute('src',`imgs/set/${iconSrc.substring(0,iconSrc.length - 3)}png`)
    document.querySelector('.icon p').textContent = data.Days[0].Timeframes[0].wx_desc
    document.querySelector('.maxTemp').textContent = data.Days[0].temp_max_c + '°'
    document.querySelector('.minTemp').textContent = data.Days[0].temp_min_c + '°'
    document.querySelector('.temp p').innerHTML = Math.floor((data.Days[0].temp_max_c + data.Days[0].temp_min_c)/2)+ ' &deg'

    for(let i=1;i<6;i++){
      let pimax = `<p>${data.Days[i].temp_max_c}</p>`
      let pimin = `<p>${data.Days[i].temp_min_c}</p>`
      let srcic = data.Days[i].Timeframes[2].wx_icon
      let imgx = `<img src="imgs/set/${srcic.substring(0,srcic.length - 3)}png">`
     document.querySelector('.week').insertAdjacentHTML('beforeend',`<div class="daysOf">${pimax}${imgx}${pimin}</div>`)
    }
  })


  //доделать приложение, прочитать про promiss