const products=[
    {
        id:6,
        price: '900',
        title: 'Golden Chatham 3-Light Ceiling Light in Gray Driftwood',
        details: 'This 3-light ceiling light from Golden Lighting is a part of the Chatham collection and comes in gray driftwood finish. This light measures 15" wide x 11" high. This light uses three standard bulbs up to 60 watts each. This light would look best in the bath. Damp rated. Can be used in humid environments like bathrooms or covered outdoor areas.',
        imgPathDesktop: "SOURCES/CATEGORIES/ceiling/ceiling1.jpg",
    },
    {
        id:7,
        price: '1200',
        title: 'Minka Lavery Aureum 4-Light Ceiling Light in Matte White With Honey Gold',
        details: 'This 4-light ceiling light from Minka Lavery is a part of the Aureum collection and comes in a matte white with honey gold finish. It measures 20" wide x 14" high. Uses four standard dimmable bulbs up to 60 watts each. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas.',
        imgPathDesktop: "SOURCES/CATEGORIES/ceiling/ceiling2.jpg",
    },
    {
        id:8,
        price: '1500',
        title: 'Trade Winds Hutchins Semi-Flush Mount Ceiling Light in Matte Black',
        details: 'This 2-Light Hutchins Semi-Flush Mount Ceiling Light is from Trade Winds Lighting and comes in a Matte Black finish It measures 10" high x 13" long x13" wide. Dry Rated. Intended to be used for indoor locations. Bulbs not included. Made with Metal and Fabric',
        imgPathDesktop: "SOURCES/CATEGORIES/ceiling/ceiling3.jpg",
    },
    {
        id:9,
        price: '1150',
        title: 'Trade Winds Stella Star Semi-Flush Mount Ceiling Light in Natural Brass',
        details: 'This 2-Light Stella Star Semi-Flush Mount Ceiling Light is from Trade Winds Lighting and comes in a Natural Brass finish It measures 7" high x 16" long x16" wide. Dry Rated. Intended to be used for indoor locations. Bulbs not included. Made with Metal and Glass',
        imgPathDesktop: "SOURCES/CATEGORIES/ceiling/ceiling4.jpg",
    },
    {
        id:10,
        price: '1280',
        title: 'Quoizel Denning 4-Light 36" Track Lighting in Palladian Bronze',
        details: 'This 4-light ceiling light from Minka Lavery is a part of the Aureum collection and comes in a matte white with honey gold finish. It measures 20" wide x 14" high. Uses four standard dimmable bulbs up to 60 watts each. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor arThis 4-light track lighting from Quoizel is a part of the Denning collection and comes in a palladian bronze finish. Light measures 36" wide x 14" high. Uses four standard bulbs up to 50.00 watts each. For indoor use.',
        imgPathDesktop: "SOURCES/CATEGORIES/ceiling/ceiling5.jpg",
    },
];
// self.importScripts ('basic-functions-productPage.js');

// function loadScript(src){
//     const script = document.createElement ('script');
//     script.src= src;
//     document.head.prepend(script);

// }
// loadScript('basic-functions-productPage.js');



//------------------------------------------------------------------------//





const productsString = JSON.stringify(products);
localStorage.setItem('productsListInsideStorage', productsString);
const productsStringFromStorage= localStorage.getItem('productsListInsideStorage');
const productsList=JSON.parse(productsStringFromStorage);


function createElementProduct(id, title,imagine, pret){
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


    //APASAREA PE ARTICOL CA SA NE DUCA LA PRODUS//

    article.addEventListener('click', ()=>{
        //De fiecare data cand dam click pe un articol (care are title, id, price, details, imgPathDesktop)
        //o vrem sa ne salvam cumva id-ul articolului si sa il bagam 
        //in URL-ul din pagina produsului la care vom fi redirectionati.
        //Deci acum cand dam click pe articol, vom fi redirectionati spre el si in bara
        //vom avea id-ul lui salvat ca parametru cu numele de "creationId", imd dupa "?".
        location.replace('/specificProduct.html?creationId='+id);
    })

    return article;
}

const maxLenghtPerPages=8;

//CREAREA FIECAREI PAGINI DE PRODUSE SI AFISAREA ITEMELOR IN FUNCTIE DE NR PAGINII PE CARE S-A APASAT---------------------------//
function createProductsList(indexStart,list){
    const productsDiv = document.querySelector('.products');
    productsDiv.innerHTML='';        //Aici golim lista noastra de produse.//
    //Daca nu punem linia asta de cod, de fiecare data cand apasam pe nr unei pagini,//
    //o sa ne adauge in continuare itemele (e ca si cum nu trecem la o pagina noua)//
    for(let i=indexStart; i<indexStart+maxLenghtPerPages&& i<list.length;i++){
        // const item = Math.floor(Math.random()*chandeliersList.length);
        const titleProduct = list[i].title;
        const idItem= list[i].id;
        const price= list[i].price;
        const img= list[i].imgPathDesktop;
        const createdArticle = createElementProduct(idItem, titleProduct,img, price);
        productsDiv.appendChild(createdArticle);
    }
}



//CREAREA NUMERELOR PAGINILOR SI ASCULTAREA CLICK-ULUI PE ELE---------------------------//
function createPages(list){
    const container= document.querySelector('.pagesNumbers');
    const ul= document.createElement('ul');
    const pagesNumber = Math.ceil(list.length/maxLenghtPerPages);

    for(let i=0;i<pagesNumber; i++){
        const li=document.createElement('li');
        li.textContent=i + 1;
        ul.appendChild(li);
    }
    ul.addEventListener('click',(ev)=>{
        const curentPageNumber= ev.target.textContent;
        console.log(curentPageNumber);
        if(curentPageNumber.length===1){   //Fara acest if, cand apasam intre li-uri (adiac doar pe continutul ul-ului) n-o sa ne afiseze niciuna din pagini.
            const curentPageNumberParse= parseInt(curentPageNumber);
            const startIndex=(curentPageNumberParse-1)*maxLenghtPerPages;
            createProductsList(startIndex,list);
        }

    });
    container.appendChild(ul);
}

createPages(productsList);
createProductsList(0,productsList);




//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//
//SEARCH SI FILTRARE//

const allItemList = localStorage.getItem('allItemsListFromStorage')
const allItemListParsed = JSON.parse(allItemList);
console.log(allItemListParsed);
//Am pus toata lista de produse aici, si am luat-o din local.storage (unde era salvata ca string)
//inca din documentul de initAllItems.js) si am transformat-o in obiect, ptc nu ne ajuta ca era string.


const input = document.querySelector('#textSearch');
input.addEventListener('keypress', function(e) {
    const valueSearch= input.value;
    if(e.key==='Enter'){
        // const filterListByTitleArray=[];
        const filterListByTitle = allItemListParsed.filter((item)=>{
            // let foundProduct=0;
            return item.title.toLowerCase().includes(valueSearch.toLowerCase())
       
        });
        // filterListByTitleArray.push(filterListByTitle);

        console.log(filterListByTitle);
        const filterListByTitleString = JSON.stringify(filterListByTitle);
        localStorage.setItem('filterListByTitleLocalStorage', filterListByTitleString);
        location.replace('filteredProducts.html');
    }
});

//Ne folosim de functiile de creare produs si de paginare, si pentru asta le aducem aici//

