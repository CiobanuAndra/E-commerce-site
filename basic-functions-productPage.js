




const productsString = JSON.stringify(products);
localStorage.setItem('productsListInsideStorage', productsString);
const productsStringFromStorage= localStorage.getItem('productsListInsideStorage');
const productsList=JSON.parse(productsStringFromStorage);
// console.log(chandeliersList);


function createElementChandelier(id, title,imagine, pret){
    const article = document.createElement('article');
    article.setAttribute("id",id);
    
    const h3= document.createElement('h3');
    h3.textContent=title;

    const price= document.createElement('h3');
    price.textContent=pret+' RON';
    price.setAttribute("class",'price');


    const bkg= document.createElement('img');
    bkg.setAttribute("src",imagine);


    const button =document.createElement('button');
    button.setAttribute("class",'buy');
    button.textContent='BUY NOW';

    const divTitleButton =document.createElement('div');
    divTitleButton.setAttribute("class",'divTitleButton');

    divTitleButton.appendChild(h3);
    divTitleButton.appendChild(price);
    divTitleButton.appendChild(button);

    article.appendChild(bkg);
    article.appendChild(divTitleButton);

    return article;
}

function createProductsList(list){
    const productsDiv = document.querySelector('.products');
    for(let i=0; i<list.length;i++){
        // const item = Math.floor(Math.random()*chandeliersList.length);
        const titleProduct = list[i].title;
        const idItem= list[i].id;
        const price= list[i].price;
        const img= list[i].imgPathDesktop;
        const createdArticle = createElementChandelier(idItem, titleProduct,img, price);
        productsDiv.appendChild(createdArticle);
    }
}

createProductsList(productsList);
