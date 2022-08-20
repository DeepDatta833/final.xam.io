const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');



searchBtn.addEventListener('click', getMealList);

function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    const numb = document.getElementById('search-number').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals ){
            data.meals.forEach(meal => {
                html += `
                <div  class="card col-md-6 col-sm-12 meal-item" data-id="${meal.idMeal}" style="width: 18rem;">
                    <img src="${meal.strMealThumb}"class="card-img-top" alt="food">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    
                    
                    </div>
              </div>
                `;
            });
        }
        mealList.innerHTML = html;

        

   
});
}
