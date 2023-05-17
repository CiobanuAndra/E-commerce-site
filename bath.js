const products=[
    {
        id:1,
        price: '380',        
        title: 'Trade Winds Raymond 3-Light Bathroom Vanity Light',
        details: 'This 3-Light Bathroom Vanity Light is from Trade Winds Lighting and comes in a Matte Black finish. It measures 8.63 high x 24 wide. Can be used in bathrooms saunas etc. Bulbs not included. Made with Metal and Glass',
        imgPathDesktop: "SOURCES/CATEGORIES/bath/bath1.jpg",
    },
    {
        id:2,
        price: '1100',        
        title: 'Mitzi Alexa 3-Light 22" Bathroom Vanity Light in Aged Brass',
        details: 'This 3-light bathroom vanity light from Mitzi is a part of the Alexa collection and comes in aged brass finish. Light measures 22" wide x 6" high. Uses three standard bulbs up to 60 watts each. This light would look best in the bathroom. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas. Includes a 1 Year Limited Manufacturer',
        imgPathDesktop: "SOURCES/CATEGORIES/bath/bath2.jpg",
    },
    {
        id:3,
        price: '250',        
        title: 'George Kovacs Saber 2-Light Bathroom Vanity Light in Brushed Nickel',
        details: 'The force of super cool bathrooms will be with you when you choose to illuminate yours with the Saber 2-light bath bar from the George Kovacs collection. Brushed nickel backplate and trim with cased etched opal glass shade 4.75" high x 20" wide; extends 4.75" from wall; can be mounted horizontally or vertically. Uses two standard light bulbs, up to 60 watts each (not included); dimmable Damp area rated; suitable for use in humid indoor areas such as bathrooms',
        imgPathDesktop: "SOURCES/CATEGORIES/bath/bath3.jpg",
    },
    {
        id:4,
        price: '950',        
        title: 'Savoy House Poppy 3-Light Bathroom Vanity Light in Matte Black with Warm Brass Accents',
        details: 'This 3-light bathroom vanity light from Savoy House is a part of the Poppy collection and comes in a matte black with warm brass accents finish. This measures 23"W x 6.5"H. This uses three 60W candelabra bulbs; not included. Damp rated: Light can be used in humid environments like bathrooms or covered outdoor areas.',
        imgPathDesktop: "SOURCES/CATEGORIES/bath/bath4.jpg",
    },
    {
        id:5,
        price: '550',        
        title: 'Savoy House Woodbury 2-Light Bathroom Vanity Light in Warm Brass',
        details: 'This 2-light bathroom vanity light from Savoy House is a part of the Woodbury collection and comes in a warm brass finish It measures 14" wide x 12" high. This light uses two standard dimmable bulbs up to 60 watts each. This light would look best in the bathroom. Damp rated. Can be used in humid environments like bathrooms or covered outdoor areas',
        imgPathDesktop: "SOURCES/CATEGORIES/bath/bath5.jpg",
    },
]

// importScripts ('basic-functions-productPage.js');



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

