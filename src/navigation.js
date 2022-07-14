window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator(){
    console.log({location});

    if (location.hash.startsWith('#trends')){
        trendsPage()
    }else if (location.hash.startsWith('#search=')){
        searchPage();
    }else if (location.hash.startsWith('#movie=')){
        detailsPage();
    }else if (location.hash.startsWith('#category=')){
       categoriesPage()
    }else{
        homePage()
    }
}

function homePage(){
    console.log('Home!!');
headerSection.classList.remove('header-container--long');
headerSection.style.background = '';
arrowBtn.classList.add('inactive');
headerTitle.classList.remove('inactive');
headerCategoryTitle.classList.add('inactive');
searchForm.classList.remove('inactive');

trendingPreviewSection.classList.remove('inactive');
categoriesPreviewSection.classList.remove('inactive');
genericSection.classList.add('inactive');
movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function categoriesPage(){
    console.log('Categories!!');

headerSection.classList.remove('header-container--long');
headerSection.style.background = '';
arrowBtn.classList.remove('inactive');
headerTitle.classList.remove('inactive');
headerCategoryTitle.classList.remove('inactive');
searchForm.classList.add('inactive');

trendingPreviewSection.classList.add('inactive');
categoriesPreviewSection.classList.add('inactive');
genericSection.classList.remove('inactive');
movieDetailSection.classList.add('inactive');
}

function detailsPage(){
    console.log('Movie!!');
}
function searchPage(){
    console.log('Search!!');
}
function trendsPage(){
    console.log('Trends!!');
}

