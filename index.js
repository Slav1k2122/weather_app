// fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=b1bb438137c70df73626258d64f8ecae')
// .then(function (reps) { return reps.json() })
// .then(function (data) {
//      console.log(data); 
//      document.querySelector('.Hk').textContent = data.name;
//      document.querySelector('.CK').innerHTML = Math.round(data.main.temp - 273) + '&deg';
//      document.querySelector('.wK').textContent = data.weather[0]['description'];
//      document.querySelector('.img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;  
// })

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=b1bb438137c70df73626258d64f8ecae')
// .then(function (reps) { return reps.json() })
// .then(function (data) {
//      console.log(data); 
//      document.querySelector('.Hl').textContent = data.name;
//      document.querySelector('.Cl').innerHTML = Math.round(data.main.temp - 273) + '&deg';
//      document.querySelector('.wL').textContent = data.weather[0]['description'];
//      document.querySelector('.imgl').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;  
// })

// fetch('https://api.openweathermap.org/data/2.5/weather?q=Odesa&appid=b1bb438137c70df73626258d64f8ecae')
// .then(function (reps) { return reps.json() })
// .then(function (data) {
//      console.log(data); 
//      document.querySelector('.Ho').textContent = data.name;
//      document.querySelector('.Co').innerHTML = Math.round(data.main.temp - 273) + '&deg';
//      document.querySelector('.wO').textContent = data.weather[0]['description'];
//      document.querySelector('.imgo').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;  
// })

let Lviv = document.getElementById('lviv');
let Kyiv = document.getElementById('kyiv');
let Odesa = document.getElementById('odesa');

let citys = ['Lviv', 'Kyiv', 'Odesa'];

for (let city of citys) {
     console.log(city);
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1bb438137c70df73626258d64f8ecae`)
     .then(function (reps) { return reps.json() })
     .then(function (data) {
          console.log(data);
          let  wetherObj = {
               city: data.name,
               img: data.weather[0]['icon'],
               weather: data.weather[0].main, 
               temp: kelvin(data.main.temp)
          }
          console.log(wetherObj);
          document
     .getElementById(city.toLocaleLowerCase())
     .insertAdjacentHTML('afterbegin',
     `
          <h3 class="H">${wetherObj.city}</h3>
          <div class="hr"></div>
          <div class="main">
          <div class="im">
          <div class="img"><img src="https://openweathermap.org/img/wn/${wetherObj.img}@2x.png"></div>
          <span class="w">${wetherObj.weather}</span>
          </div>
          <span class="C">${wetherObj.temp + '&deg' + 'C'}</span>
          </div>
     `)
     })
     if(city === 'Kyiv'){
          document.getElementById(city.toLocaleLowerCase()).classList.add('main_city')
      }
     let children = document.getElementById(city.toLocaleLowerCase()).children;
     console.log(children);
}

function kelvin(kTemp) {
     return Math.round(kTemp - 273.15)
}

