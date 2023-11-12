const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals))
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <!-- Button trigger modal -->
            <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn      btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Details
            </button>
          </div>
        </div>
        `
        mealsContainer.appendChild(mealDiv);

    });
}

const searchMeals = () =>{
    const textSearch = document.getElementById('search-input').value;
    const textSearch2 = document.getElementById('search-input');
    textSearch2.value = ''; 
    loadMeals(textSearch);
    
    // loadMeals('textSearch');

    // console.log(typeof(textSearch))
    
}

const loadMealDetail = (idMeal) =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal =>{
  document.getElementById('exampleModalLabel').innerText = meal.strMeal;

  document.getElementById('modal-body').innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}" alt="">
  `;
}

loadMeals('chi');