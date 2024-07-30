let data = document.getElementById("meals")

$(".sideNav .toggleIcon").click(function () {
    // console.log($(".sideNav .sideLeft").outerWidth());
    $(".sideNav").animate({ left: 0 }, 500)
    $(".closeIcone").removeClass("d-none");
    $(".toggleIcon").addClass("d-none");

    for (let i = 0; i <= 4; i++) {
        $(".items li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }


})


$(".sideNav .closeIcone").click(function () {
    $(".sideNav").animate({ left: -$(".sideNav .sideLeft").outerWidth() }, 500)
    $(".closeIcone").addClass("d-none");
    $(".toggleIcon").removeClass("d-none");
    // $(".items li").animate({
    //     top: 200
    // }, 500)

    for (let i = 0; i <= 4; i++) {
        $(".items li").eq(i).animate({
            top: 200
        }, (i + 5) * 100)
    }

})

//---------------------------------------------------------------------------------------------------

async function searchName(item) {
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
    response = await x.json()
    display(response.meals)

}

function display(meals) {
    let cartoona = ""
    for (let i = 0; i < meals.length; i++) {
        cartoona += ` <div class="col-md-3 " onclick="getDetails('${meals[i].strMeal}')">
                <div class="mainMeal rounded-3">
                    <img  class="w-100" src="${meals[i].strMealThumb}" alt="">
                    <div class="layer d-flex align-items-center text-black rounded-3">
                        <h2 class="ps-2">${meals[i].strMeal}</h2>
                    </div>
                </div>
            </div>`

    }
    data.innerHTML = cartoona
}


//---------------------------------------------------------------------------------------------------
document.getElementById("categ").addEventListener("click", categ)

async function categ() {
    $(".innerScreen").fadeIn(500)
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await x.json()
    displaycategory(response.categories);
    $(".innerScreen").fadeOut(500)

}




function displaycategory(meals) {
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("firstPage").classList.remove("d-none")
    document.getElementById("contactPage").classList.add("d-none")
    document.getElementById("searchMeal").innerHTML = ""

    let cartoona = ""
    for (let i = 0; i < meals.length; i++) {
        cartoona += ` <div class="col-md-3 ">
                <div class="mainMeal rounded-3" onclick="insideMealCategory('${meals[i].strCategory}')">
                    <img  class="w-100" src="${meals[i].strCategoryThumb}" alt="">
                    <div class="layer text-center text-black rounded-3 px-2">
                        <h2 class="ps-2">${meals[i].strCategory}</h2>
                        <P>${meals[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                    </div>
                </div>
            </div>`

    }
    data.innerHTML = cartoona
}
//---------------------------------------------------------------------------------------------------

document.getElementById("area").addEventListener("click", area)

async function area() {
    $(".innerScreen").fadeIn(500)

    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response = await x.json()
    displayarea(response.meals);
    $(".innerScreen").fadeOut(500)

}




function displayarea(meals) {
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("firstPage").classList.remove("d-none")
    document.getElementById("contactPage").classList.add("d-none")
    document.getElementById("searchMeal").innerHTML = ""

    let cartoona = ""
    for (let i = 0; i < meals.length; i++) {
        cartoona += ` <div class="col-md-3 text-center" onclick="insideArea('${meals[i].strArea}')">
                <div class="mainMeal rounded-3 ">
                   <i class="fa-solid fa-house-laptop fa-4x"></i>
                    
                        <h3>${meals[i].strArea}</h3>
                    
                </div>
            </div>`

    }
    data.innerHTML = cartoona
}
//---------------------------------------------------------------------------------------------------
document.getElementById("ingred").addEventListener("click", ingrediant)

async function ingrediant() {
    $(".innerScreen").fadeIn(500)

    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await x.json()
    displayingred(response.meals.slice(0, 20));
    $(".innerScreen").fadeOut(500)

}




function displayingred(meals) {
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("firstPage").classList.remove("d-none")
    document.getElementById("contactPage").classList.add("d-none")
    document.getElementById("searchMeal").innerHTML = ""
    let cartoona = ""
    for (let i = 0; i < meals.length; i++) {
        cartoona += ` <div class="col-md-3 text-center" onclick="insideIngred('${meals[i].strIngredient}')">
                <div class="mainMeal rounded-3 ">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    
                        <h2>${meals[i].strIngredient}</h2>
                          <P>${meals[i].strDescription.split(" ").slice(0, 25).join(" ")}</p>
                  
                </div>
            </div>`

    }
    data.innerHTML = cartoona
}
//---------------------------------------------------------------------------------------------------

async function insideMealCategory(item) {
    $(".innerScreen").fadeIn(500)

    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`)
    response = await x.json()
    display(response.meals.slice(0, 20))
    $(".innerScreen").fadeOut(500)

}

// function diplayInsideMealCategory(meals) {
//     let cartoona = ""
//     for (let i = 0; i < meals.length; i++) {
//         cartoona += ` <div class="col-md-3 text-center">
//                 <div class="mainMeal rounded-3 ">
//                       <img  class="w-100" src="${meals[i].strMealThumb}" alt="">
//                     <div class="layer d-flex align-items-center text-black rounded-3">
//                         <h2 class="ps-2">${meals[i].strMeal}</h2>
//                     </div>

//                 </div>
//             </div>`

//     }
//     data.innerHTML = cartoona
// }


//---------------------------------------------------------------------------------------------------

async function insideArea(item) {
    $(".innerScreen").fadeIn(500)

    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item}`)
    response = await x.json()
    display(response.meals.slice(0, 20))
    $(".innerScreen").fadeOut(500)

}
//---------------------------------------------------------------------------------------------------

async function insideIngred(item) {
    $(".innerScreen").fadeIn(500)

    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`)
    response = await x.json()
    display(response.meals.slice(0, 20))
    $(".innerScreen").fadeOut(500)

}
// -------------------------------------------------------------------------------------------------
async function getDetails(name) {
    $(".innerScreen").fadeIn(500)

    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    response = await x.json()
    displayDetails(response.meals)
    // console.log(response.meals);
    $(".innerScreen").fadeOut(500)

}


function displayDetails(meal) {
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("firstPage").classList.remove("d-none")
    document.getElementById("contactPage").classList.add("d-none")
    document.getElementById("searchMeal").innerHTML = ""
    let recipes = ``

    for (let i = 1; i <= 20; i++) {
        if (meal[0][`strIngredient${i}`]) {
            recipes += `<li class="alert alert-info m-2 p-1">${meal[0][`strMeasure${i}`]} ${meal[0][`strIngredient${i}`]}</li>`
        }
    }


    let x = meal[0].strTags?.split(",")
    if (!x) {

        x = []
    }
    let tags = ''
    for (let i = 0; i < x.length; i++) {
        tags += `
        <li class="alert alert-danger m-2 p-2">${x[i]}</li>`
    }




    let cartoona = `  <div class="col-md-4">
                <img src="${meal[0].strMealThumb}" class="w-100 rounded-3"
                    alt="">
                <h2>${meal[0].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal[0].strInstructions}</p>
                <h3> <span class="fw-bolder">Area : </span>${meal[0].strArea}</h3>
                <h3> <span class="fw-bolder">Category : </span>${meal[0].strCategory}</h3>
                <h3 class="fw-bolder"> Recipes:</h3>
                <ul class="list-unstyled d-flex flex-wrap">
                   ${recipes}
                </ul>
                <h3 class="fw-bolder"> Tags:</h3>
                <ul class="list-unstyled d-flex flex-wrap">
              ${tags}
                </ul>
                <a target="_blank" href="${meal[0].strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal[0].strYoutube}" class="btn btn-danger ms-2">Youtube</a>
            </div>`
    data.innerHTML = cartoona
}
// ----------------------------------------------------------------------------------------------


document.getElementById("search").addEventListener("click", searchInput)

function searchInput() {
    document.getElementById("searchPage").classList.remove("d-none")
    document.getElementById("firstPage").classList.add("d-none")
    document.getElementById("contactPage").classList.add("d-none")
}
document.getElementById("nameSearch").addEventListener("keyup", byName)

async function byName() {
    $(".innerScreen").fadeIn(500)
    let term = document.getElementById("nameSearch").value
    let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await x.json()
    displayNameSearch(response.meals)
    $(".innerScreen").fadeOut(500)


}


function displayNameSearch(meals) {

    let cartoona = ""
    if (meals) {
        for (let i = 0; i < meals.length; i++) {

            cartoona += ` <div class="col-md-3 " onclick="getDetails('${meals[i].strMeal}')">
            <div class="mainMeal rounded-3">
            <img  class="w-100" src="${meals[i].strMealThumb}" alt="">
            <div class="layer d-flex align-items-center text-black rounded-3">
            <h2 class="ps-2">${meals[i].strMeal}</h2>
            </div>
            </div>
            </div>`

        }
        document.getElementById("searchMeal").innerHTML = cartoona
    } else {
        document.getElementById("searchMeal").innerHTML = ""

    }
}
// ---------
document.getElementById("firstLetter").addEventListener("keyup", first)

async function first() {
    $(".innerScreen").fadeIn(500)

    let term = document.getElementById("firstLetter").value
    if (term.length == 1) {
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
        response = await x.json()
        displayNameSearch(response.meals)
    } else {
        let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        response = await x.json()
        displayNameSearch(response.meals)

    }
    $(".innerScreen").fadeOut(500)

}



// ----------------------------------------------------------------------------------------------


document.getElementById("contact").addEventListener("click", contactInput)

function contactInput() {
    document.getElementById("searchPage").classList.add("d-none")
    document.getElementById("firstPage").classList.add("d-none")
    document.getElementById("contactPage").classList.remove("d-none")
    document.getElementById("searchMeal").innerHTML = ""

    document.getElementById("nameInput").addEventListener("focus", function () {
        nameFocus = true
    })

    document.getElementById("emailInput").addEventListener("focus", function () {
        emailFocus = true
    })

    document.getElementById("phoneInput").addEventListener("focus", function () {
        phoneFocus = true
    })

    document.getElementById("ageInput").addEventListener("focus", function () {
        ageFocus = true
    })

    document.getElementById("password").addEventListener("focus", function () {
        passFocus = true
    })

    document.getElementById("repassword").addEventListener("focus", function () {
        repassFocus = true
    })

}

let inputs = document.querySelectorAll("#contactPage input")

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", validation)

}



function nameValid() {
    if (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value)) {
        return true
    } else {
        return false
    }
}

function emailValid() {
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value)) {
        return true
    } else {
        return false

    }
}

function phoneValid() {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value)) {
        return true
    } else {
        return false
    }

}

function ageValid() {
    if (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value)) {
        return true
    } else {
        return false
    }
}

function passwordValid() {
    if (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("password").value)) {
        return true
    } else {
        return false
    }
}

function repasswordValid() {
    if (document.getElementById("repassword").value == document.getElementById("password").value) {
        return true
    } else {
        return false
    }


}
let nameFocus = false
let emailFocus = false
let phoneFocus = false
let ageFocus = false
let passFocus = false
let repassFocus = false



function validation() {
    if (nameFocus) {
        if (nameValid()) {
            document.getElementById("alertName").classList.add("d-none")

        } else {
            document.getElementById("alertName").classList.remove("d-none")

        }
    }

    if (emailFocus) {
        if (emailValid()) {
            document.getElementById("alertEmail").classList.add("d-none")
        } else {
            document.getElementById("alertEmail").classList.remove("d-none")
        }
    }

    if (phoneFocus) {
        if (phoneValid()) {
            document.getElementById("alertPhone").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("alertPhone").classList.replace("d-none", "d-block")

        }
    }

    if (ageFocus) {

        if (ageValid()) {
            document.getElementById("alertAge").classList.add("d-none")

        } else {
            document.getElementById("alertAge").classList.remove("d-none")

        }
    }

    if (passFocus) {

        if (passwordValid()) {
            document.getElementById("alertPass").classList.add("d-none")

        } else {
            document.getElementById("alertPass").classList.remove("d-none")

        }
    }
    if (repassFocus) {

        if (repasswordValid()) {
            document.getElementById("alertRepass").classList.add("d-none")

        } else {
            document.getElementById("alertRepass").classList.remove("d-none")

        }
    }


    if (nameValid() && emailValid() && phoneValid() && ageValid() && passwordValid() && repasswordValid()) {
        document.getElementById("btnSubmit").removeAttribute("disabled")
        // console.log("hellllo");
    } else {
        document.getElementById("btnSubmit").setAttribute("disabled", true)

    }



}

// --------------------------------------------------------------------------------------------------
$(document).ready(() => {
    searchName("").then(() => {
        $(".loadingScreen").fadeOut(500)
        $("body").css("overflow", "auto")
        $(".innerScreen").fadeOut(500)

    })
})