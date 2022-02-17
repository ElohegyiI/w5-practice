

  function loadEvent() {  
    console.log("Ez is.");
    
    let rootElement = document.getElementById("root");
    
    let card = function(title, year, rate) {
        
        return`
        <div class="card">
           <h2>${title}</h2>
           <span>${year}</span>
           <em>${rate}</em>
        </div>
        
        `;
    };

    /*movies.sort(function(a, b){return a.year - b.year});*/

    let renderAllCardElements = function(incomingMoviesArray) {
        let renderedCardList = `<div class=cards>`;
        /*for ciklus végigmegy a cardsarrayen
         minden lépcsőjénél hozzáadja renderlistcardhoz az adott elemet a megfelelő div cardhoz*/
        
        for (const incomingMovie of incomingMoviesArray) {
            renderedCardList += card(incomingMovie.title,incomingMovie.year, incomingMovie.rate)
            /* renderedCardList +=`
                <div class="cardarray">
                    <h2>${incomingMovie.title}</h2>
                    <span>${incomingMovie.year}</span>
                    <span>${incomingMovie.rate}</span>
                    </div>
            ` */
        }
        renderedCardList += `</div>`

        console.log(renderedCardList)
        return renderedCardList
    }
    let newGoodMovies = [];

    for (const movieSend of movies) {
        
        if (movieSend.year > 2000 && movieSend.rate > 8) {
            newGoodMovies.push(movieSend)
            /*rootElement.insertAdjacentHTML("beforeend", card(movieSend.title, movieSend.year, floorRate));*/
        }
    }
        newGoodMovies.sort(function(a, b){return a.year - b.year});
        
        rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));
    }



    window.addEventListener("load", loadEvent)