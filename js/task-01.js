const categoriesEl = document.querySelector(`ul#categories`);

for (let i = 0; i < categoriesEl.children.length; i+=1){
    // console.log(categoriesEl.children[i])
    
    const categoryTitleEl = categoriesEl.children[i].querySelector(`h2`);
    console.log(`Category: ${categoryTitleEl.innerText}`)

    const categoryItemEl = categoriesEl.children[i].querySelectorAll(`li`);
    console.log(`Elements: ${categoryItemEl.length}`);

}






