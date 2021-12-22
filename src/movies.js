const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(list) {
  const allDirector = list.map((movie)=>{
    return movie.director
  })
 
  const uniDirectors = []

allDirector.forEach(function(director) {
     if(uniDirectors.indexOf(director) < 0) {
         uniDirectors.push(director);
     }
});
  return uniDirectors
  }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.




// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
const steveMovies = movies.filter((movie)=>{
return movie.director === 'Steven Spielberg' && movie.genre.includes("Drama");
})
return steveMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(avglist) {
if (avglist.length === 0 ){
  return 0
}

  const avgScoreMovie= avglist.reduce((acc, value)=>{
    if ('score' in value){
      return acc + value.score 
    } else {
      return acc
    }
    
    }, 0);
    const average = avgScoreMovie / avglist.length;
    return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(avgDrama) {
 
  const dramaMovies = avgDrama.filter((movie)=>{
    return movie.genre.includes("Drama")
  })
  if (dramaMovies.length === 0){
    return 0
  }
 
  
    const avgScoreDrama= dramaMovies.reduce((acc, value)=>{
      if ('score' in value){
        return acc + value.score
      } else {
        return acc + 0
      }
      
      }, 0);
      const average = avgScoreDrama / dramaMovies.length;
      return Number(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(list) {

  const orderYear = [...list].sort((movie1, movie2)=>{
    if(movie1.year === movie2.year){
      // USE localeCompare
     return movie1.title.localeCompare(movie2.title)
    } else{
      return movie1.year - movie2.year
    }
    

  })
  return orderYear

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(list) {   
  const sortList = list.map((movie)=>{
    return movie.title
  })

  const movieAlpha = sortList.sort((movie1, movie2)=>{

    return movie1.localeCompare(movie2)
  })

  return movieAlpha.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
