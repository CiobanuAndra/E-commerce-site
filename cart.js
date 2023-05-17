//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//
//SEARCH SI FILTRARE//

const allItemList = localStorage.getItem('allItemsListFromStorage')
const allItemListParsed = JSON.parse(allItemList);
// console.log(allItemListParsed);
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




//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//
//CONSTRUIREA PRODUSELOR DIN CART//

//Luam lista de produse din Local Storage ca sa stim ce afisam
var cart = JSON.parse(localStorage.getItem('cart'))
console.log(cart)

// if(cart){
   
// }


























if(cart){
    //Din aceasta lista extragem cheile (adica din obiectul de "cart") pentru a le folosi la search-ul nostru prin obiectul "cart"
    const productsKeysTest=Object.keys(cart);
    console.log(productsKeysTest)
    //Facem o proba si incercam sa aflam cantitatea de produse "productsKeys[1]"
    const produsTest=cart[productsKeysTest[1]]
    if(produsTest){
        console.log(produsTest)

    //Acum testam folosind REGEXP si incercam sa aflam Id-ul produsului din stringul care reprezinta cheia aferenta produsului, cheie din obiectul "cart"
    const numberIDproductTest = productsKeysTest[1].replace(/[^0-9]/g, '');
    console.log(numberIDproductTest)
    }




    //ITERATE OBJECT- rezulta obiectul cu produsele, si cheile vor fi stringuri de tipul "creationId=2"
    let productsKeys=Object.keys(cart);
    let productsKeysTestul=productsKeys.sort(function(a, b){return a-b});

    console.log(productsKeys)
    console.log(productsKeysTestul)



    //Construim un array gol in care o sa punem ID-urile din cheile noastre din obiectul de sus (adica ID-ul fiecarui produs din cosul din Local Storage)
    let productsIDListHelper=[];
    
    for(const i in productsKeys){
        const numberIDproductTest = productsKeys[i].replace(/[^0-9]/g, '');
        console.log(numberIDproductTest)
        productsIDListHelper.push(numberIDproductTest);
        // console.log(productsIDList)
        var productsIDList=Object.assign([],productsIDListHelper);

    }
    // let productsIDListTest=productsIDList.sort(function(a, b){return a-b});

    console.log(productsIDListHelper)
    console.log(productsIDList)

    // console.log(productsIDListTest)



    //Construim un array care sa contina nr de produse asociat ficarui tip de produs
    // const quantityOfProduct=Object.values(cart);
    // console.log(quantityOfProduct)


    const quantityOfProductNeordered=Object.values(cart);
    // const quantityOfProduct=quantityOfProductNeordered.sort(function(a, b){return a-b});
    console.log(quantityOfProductNeordered)
    // console.log(quantityOfProduct)




    //Constuim lista de produse (array de obiecte) si toate proprietatile care ne trebuie pentru ele
    //Mai intai luam din local Storage toata lista noastra cu toate produsele de pe site (am luat-o mai sus la linia 6)

    let produsele=[];
    for(let i=0;i<allItemListParsed.length;i++){
        for(let j=0;j<=productsIDList.length;j++){

            if((allItemListParsed[i].id).toString()===productsIDList[j]) {
                let gasit=allItemListParsed[i];
                produsele.push(gasit)
                var produseleDinCartFINAL=Object.assign([],produsele);
            }
        }
    };
    console.log(produseleDinCartFINAL)
    const products=produseleDinCartFINAL
    // [
    // {
    //     id:31,
    //     price: '250',        
    //     title: 'The Great Outdoors Trescott 20" Outdoor Wall Light in Black',
    //     details: 'This outdoor wall light from The Great Outdoors is a part of the Trescott collection and comes in a black finish. Light measures 7" wide x 20" high. Uses one standard bulb up to 60 watts. Wet rated. Can be exposed to rain, snow and the elements.',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight1.jpg",
    // },
    // {
    //     id:32,
    //     price: '180',        
    //     title: 'Savoy House Dawson 1-Light Wall Sconce in Warm Brass',
    //     details: 'This 1-light wall sconce from Savoy House is a part of the Dawson collection and comes in a warm brass finish. This measures 4.75"W x 17.875"H. This uses one 60W candelabra bulb; not included. Damp rated: Light can be used in humid environments like bathrooms or covered outdoor areas.',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight2.jpg",
    // },
    // {
    //     id:33,
    //     price: '620',        
    //     title: 'Meridian 1-Light Wall Sconce in Brushed Nickel',
    //     details: 'This 1-light wall sconce by Meridian Lighting comes in a brushed nickel finish. This measures 5"W x 10.5"H. This uses one 60W bulb; not included. Damp rated: Light can be used in humid environments like bathrooms or covered outdoor areas',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight3.jpg",
    // },
    // {
    //     id:34,
    //     price: '250',        
    //     title: 'Meridian 1-Light Wall Sconce in Natural Brass',
    //     details: 'This 1-light wall sconce by Meridian Lighting comes in a natural brass finish. This measures 10"W x 16"H. This uses one 60W bulb; not included. Damp rated: Light can be used in humid environments like bathrooms or covered outdoor areas',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight4.jpg",
    // },
    // {
    //     id:35,
    //     price: '450',        
    //     title: 'Teign - Brass & Opal Adjustable Scandi Wall Light/Pendant Light',
    //     details: 'Art Deco and Scandi styles combine beautifully in these adjustable wall light/Pendant Light. Mount them on the wall or the ceiling. Handcrafted opal glass glass shades are perfect detailing',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight5.jpg",
    // },
    // {
    //     id:36,
    //     price: '920',        
    //     title: 'Crystorama Medford Wall Sconce in Matte Black',
    //     details: 'This wall sconce from Crystorama is a part of the Medford collection and comes in a matte black finish. It measures 7" wide x 14" high. This light uses one standard dimmable bulb up to 60 watts. For indoor use. This light includes a 1 year warranty subject to terms and conditions.',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight6.jpg",
    // },
    // {
    //     id:37,
    //     price: '1210',        
    //     title: 'Crystorama Madison Wall Sconce in Aged Brass',
    //     details: 'This wall sconce from Crystorama is a part of the Madison collection and comes in a aged brass finish. It measures 10" wide x 13" high. This light uses one standard dimmable bulb up to 60 watts. For indoor use. This light includes a 1 year warranty subject to terms and conditions.',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight7.jpg",
    // },
    // {
    //     id:38,
    //     price: '980',        
    //     title: 'Mitzi Renee 20" Wall Sconce in Polished Nickel and Black',
    //     details: 'This wall sconce from Mitzi is a part of the Renee collection and comes in polished nickel and black finish. It measures 6" wide x 20" high. Uses one standard bulb up to 40 watts. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas. Includes a 1 Year Limited Manufacturer Warranty',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight8.jpg",
    // },
    // {
    //     id:39,
    //     price: '870',        
    //     title: 'George Kovacs George s Reading Room 6 Wall Lamp in Copper Bronze Patina',
    //     details: 'This wall lamp from George Kovacs is a part of the George s Reading Room collection and comes in a copper bronze patina finish. Light measures 22" long x 14" wide x 6" high. Uses one bulb up to 8 watts. For indoor use. This item can be plugged in or hardwired.',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight9.jpg",
    // },
    // {
    //     id:40,
    //     price: '980',        
    //     title: 'Mitzi Renee 20" Wall Sconce in Polished Nickel and Black',
    //     details: 'This wall sconce from Mitzi is a part of the Riley collection and comes in polished copper finish. Light measures 6" wide x 24" high. Uses one standard bulb up to 60 watts. Damp Rated. Can be used in humid environments like bathrooms or covered outdoor areas. Includes a 1 Year Limited Manufacturer Warranty This is a plug-in light.',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight10.jpg",
    // },
    // {
    //     id:41,
    //     price: '820',        
    //     title: 'Trade Winds Arlington Wall Sconce in Warm Brass',
    //     details: 'This 1-Light Arlington Wall Sconce is from Trade Winds Lighting and comes in a Natural Brass finish. It measures 12" high x 6.5" wide. Damp Rated. Can be used in bathrooms saunas etc. Bulbs not included. Made with Metal and Glass',
    //     imgPathDesktop: "SOURCES/CATEGORIES/wallLights/wallLight11.jpg",
    // },
    
    // ];


    // importScripts ('basic-functions-productPage.js');



    const productsString = JSON.stringify(products);
    localStorage.setItem('productsListInsideStorage', productsString);
    const productsStringFromStorage= localStorage.getItem('productsListInsideStorage');
    // console.log(productsStringFromStorage)

    const productsList=JSON.parse(productsStringFromStorage);
    console.log(productsList)

    // if(signInNameUserLoged){
    //     signInText.textContent=signInNameUserLoged;
    // }


    //Verificam daca avem un utilizator logat deja luand value din local Storage. Daca avem, facem ca 
    //la fiecare reload de pag sau cand schimbam pag, sa ne pastreze acelasi text in loc de butonul Sign In 
    const signIn = document.getElementsByClassName('login')[0];
    // const signInForm = document.getElementsByClassName('signIn')[0];
    // const myAccount= document.getElementsByClassName('myAccount')[0];

    let signInText = signIn.children[1]; 
    let signInNameUserLoged = JSON.parse(localStorage.getItem('signInNameUserLoged'))
    // console.log(signInNameUserLoged)

    if(signInNameUserLoged){
        // console.log(typeof(signInNameUserLoged))
        signInText.textContent=signInNameUserLoged;
    }
    const textUserLoged=signInText.textContent


    if(textUserLoged.includes("Hello")){
        function createElementProduct(id, title,imagine, pret,numberOfSpecificProduct){
            const article = document.createElement('article');
            article.setAttribute("id",id);
            
            const h3= document.createElement('h3');
            h3.textContent=title;
        
            const price= document.createElement('h3');
            price.textContent=pret+' RON';
            price.setAttribute("class",'price');
        
        
            const bkg= document.createElement('img');
            bkg.setAttribute("src",imagine);
        

            const imgClose=document.createElement('img');
            imgClose.setAttribute("class",'closeButton');

            article.appendChild(imgClose);

            // console.log(Object.keys(cart)["creationId=12"])
            // if()
            // console.log(Object.values(cart)["creationId=12"])




            //REMOVE ITEM---------------------------------------------------------------//
            function removeItem(event){
                // console.log(cart[creationId=43])
                // const cart = localStorage.getItem('cart')

                article.removeEventListener("click",toProduct)
                console.log(event.target)
                const elemSters=event.target.parentElement
                const idProductErased=event.target.parentElement.id;
                console.log(elemSters)
                console.log(idProductErased)

                let elementDupaCareCautam='creationId='+idProductErased;
                // console.log(elementDupaCareCautam)
                // console.log(typeof elementDupaCareCautam)
                // console.log(cart[elementDupaCareCautam])
                



                // // let cart = JSON.parse(localStorage.getItem('cart')['creationId=31'])
                // // console.log(Object.keys(cart))
                // console.log(cart)

                // // console.log(Object.keys(cart[0]))

                // console.log('creationId='+idProductErased)
                // console.log(cart[])



                // // console.log(cart)
                // // console.log(Object.keys(cart))
                // function getKeyByValue(object, value) {
                //     return Object.keys(object).find(key => object[key] === value);
                // }
                //   const PROBA = getKeyByValue(cart, idProductErased  )
                //   console.log(PROBA)
                // for(let i=0;i<=Object.keys(cart).length;i++){
                    // if(Object.keys(cart)[i]===idProductErased){
                    //     console.log('true')
                    // }else{
                    //     console.log('false')
                    // }
                    // console.log(Object.keys(cart)[i])
                    // let produsVerificat= Object.keys(cart)[i]
                    // if(produsVerificat.includes(id)){
                    //     console.log("avem produsul"+id)
                    //     // return
                    //     // let 
                    // }

                // }
                // console.log(event.target)
                elemSters.remove(cart[elementDupaCareCautam])
                delete cart[elementDupaCareCautam];
                // localStorage.removeItem(elementDupaCareCautam)
                // let newCart=delete cart.age[elementDupaCareCautam];

                console.log(cart)
                localStorage.setItem('cart',JSON.stringify(cart));
                

                setTimeout(() => {
                    location.reload()}, 1500);


            }
            imgClose.addEventListener("click",removeItem)







        
        
            let numberItems =document.createElement('h2');
            numberItems.setAttribute("class",'numberItems');

            numberItems.textContent="X"+numberOfSpecificProduct;
          
        
        
            const divTitleButton =document.createElement('div');
            divTitleButton.setAttribute("class",'divTitleButton');
        
            const divPriceAndQuantity =document.createElement('div');
            divPriceAndQuantity.setAttribute("class",'divPriceAndQuantity');
        
            
        
            divTitleButton.appendChild(h3);
        
            divPriceAndQuantity.appendChild(price);
            divPriceAndQuantity.appendChild(numberItems);
        
            divTitleButton.appendChild(divPriceAndQuantity);
        
            // divTitleButton.appendChild(button);
        
        
            article.appendChild(bkg);
            article.appendChild(divTitleButton);
        
        
            //APASAREA PE ARTICOL CA SA NE DUCA LA PRODUS//
         function toProduct(){
            location.replace('/specificProduct.html?creationId='+id);
            

         }
            article.addEventListener('click', toProduct
                //De fiecare data cand dam click pe un articol (care are title, id, price, details, imgPathDesktop)
                //o vrem sa ne salvam cumva id-ul articolului si sa il bagam 
                //in URL-ul din pagina produsului la care vom fi redirectionati.
                //Deci acum cand dam click pe articol, vom fi redirectionati spre el si in bara
                //vom avea id-ul lui salvat ca parametru cu numele de "creationId", imd dupa "?".
            )
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
                // const idItem= Object.values(cart)[i];

                // console.log(idItem)

                const price= list[i].price;
                const img= list[i].imgPathDesktop;

                // const idHelper=list[i].id
                // // console.log(idHelper)
                // console.log(Object.keys(cart)[i])



                const numberOfSpecificProduct=(Object.values(cart)[i]);
                // console.log(numberOfSpecificProduct)


                 

                const createdArticle = createElementProduct(idItem, titleProduct,img, price,numberOfSpecificProduct);
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
    
    
    








    }else{
        console.log("NU ESTI LOGAT!")
        

    }



}





