

  let months = [{
    "name": "January",
    "days": 31
  },
  {
    "name": "February",
    "days": 28
  },
  {
    "name": "March",
    "days": 31
  },
  {
    "name": "April",
    "days": 30
  },
  {
    "name": "May",
    "days": 31
  },
  {
    "name": "June",
    "days": 30
  },
  {
    "name": "July",
    "days": 31
  },
  {
    "name": "August",
    "days": 31
  },
  {
    "name": "September",
    "days": 31
  },
  {
    "name": "October",
    "days": 31
  },
  {
    "name": "November",
    "days": 30
  },
  {
    "name": "December",
    "days": 31
  }]

  
  function loadEvent() {
    
    for (const month of months) {
      
      let thisYear = 2022;

      let sect = document.getElementById('root');

      let divs = document.createElement('div');
      
      let division = document.getElementById(month.name)
      
      sect.insertAdjacentHTML("beforeend", `
        <section id="${month.name}"></section>
      
      `);  

      sect.appendChild(divs);


     divs.insertAdjacentHTML("beforeend", `
      <div class="card">
        <time datetime="YYYY">${thisYear}</time>
        <time datetime="MM">${month.name}</time>
        
      </div>

      `);

      /*if (month.days === 31) {
        for(let i = 0; i < 31; i++){

          divs.insertAdjacentHTML("beforeend", `
            <div class="card">
              <time datetime="YYYY">${thisYear}</time>
              <time datetime="MM">${month.name}</time>
              <time datetime="DD">${i+1}</time>
            </div>
          `)
        }
      } elseif (month.days === 28); {
          for(let i = 0; i < 28; i++){  
            divs.insertAdjacentHTML("beforeend", `
              <div class="card">
                <time datetime="YYYY">${thisYear}</time>
                <time datetime="MM">${month.name}</time>
                <time datetime="DD">${i+1}</time>
              </div>
              `)
          }
      } else {
          for(let i = 0; i < 30; i++) {
            divs.insertAdjacentHTML("beforeend", `
              <div class="card">
                <time datetime="YYYY">${thisYear}</time>
                <time datetime="MM">${month.name}</time>
                <time datetime="DD">${i+1}</time>
              </div>

          `);
          }
        }*/
    } 
  }
window.addEventListener("load", loadEvent);

/*window.addEventListener("load", function(){
    console.log("My second function")
})*/

