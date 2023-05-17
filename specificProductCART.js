const productsListString= localStorage.getItem('allItemsListFromStorage');
const productsListObj =JSON.parse(productsListString);


//Am fost redirectionati spre produsul care are in URL salvat nr Id-ului ca "creationId".
//Vrem sa ne folosim de valoarea id-ului, si deci trebuie sa selectam ce vine in URL imd dupa "?".
//Pentru asta folosim "location.search" care ne returneaza lista de parametri care urmeaza dupa "?".
const queryString=location.search;

//Acum folosim "URLSearchParams". Este o clasa ajutatoare care sparge in bucati/parametri string-ul ce contine URL-ul nostru.
//De asemenea URLSearchParams ne da cateva functii ajutatoare ca sa preluam valorile din URL care ne intereseaza
const urlParams= new URLSearchParams(queryString);

//Acum putem folosi "get" pentru a lua cheia care ne intereseaza, si respectiv valoarea ei.
const productId=urlParams.get('creationId');


//Cautam in lista noastra de produse, salvata in local storage, doar produsul care are  
//id-ul care corespunde articolului/produsului pe care a apasat utilizatorul. Cand functia
//de "find" de mai jos intalneste in lista noastra produsul cu id-ul identic cu id-ul pe care 
//s-a apasat, aceasta functie va salva datele produsului in constanta "foudProduct".
const foundProduct= productsListObj.find((item)=>{
    return item.id === parseInt(productId);
});


//Odata gasit "foundProduct", ne folosim de cheile si volorile acestuia pentru a afisa doar imaginea,
//titlul, pretul si descrierea corespunzatoare produsului gasit in lista din local storage.
//Introducem aceste date obtinute in containerul din html, in div-ul cu clasa "product-details"
const containerProduct= document.querySelector('.product-detail');
const bigContainer= document.querySelector('.bigContainer');
const pricePlusMinusButtons= document.querySelector('.pricePlusMinusButtons');
const shopActions= document.querySelector('.shop-action');


//--------------------------------------------------------------------------------------------------------//
//MAKE PRODUCT-------------------------------------------------------------------------------------------//
//Construim forma fizica a produsului utilizand datele asociate produsului gasit in lista din local storage.
//Dar folosim un "if" pentru a ne asigura ca utilizatorul nu a introdus manual in URL linkul, sau nu a modificat id-ul.
if(foundProduct){
    const titleProduct = document.createElement('h2');
    const img= document.createElement('img');
    const detailsProduct= document.createElement('p');
    const priceProduct= document.createElement('p');
    
    //Aici ne folosim de datele produsului "foundProduct" din local storage
    titleProduct.textContent=foundProduct.title;
    img.setAttribute('src', foundProduct.imgPathDesktop);
    img.setAttribute('alt', foundProduct.title);
    detailsProduct.textContent=foundProduct.details;
    priceProduct.textContent=foundProduct.price+' RON';

    bigContainer.insertBefore(titleProduct,containerProduct);
    containerProduct.insertBefore(img,pricePlusMinusButtons);
    pricePlusMinusButtons.insertBefore(detailsProduct,shopActions);
    pricePlusMinusButtons.insertBefore(priceProduct,shopActions);


    //--------------------------------------------------------------------------------------------------------//
    //BUTOANE PLUS SI MINUS--- CART// ------------------------------------------------------------------------//
    const plusButton= document.querySelector('#plus');
    const minusButton= document.querySelector('#minus');

    //Preluam de pe pag Html numarul de dupa "Count"
    const countSpan = document.querySelector('.shopCount');
    //Salvam nr preluat intr-o variabila noua (ca string mai intai):
    const countText = countSpan.textContent;
    //Salvam nr preluat intr-o variabila ca NUMBER:
    let countCurent = parseInt(countText);


    function plusOrMinus (operation){
        //Daca avem PLUS crestem "countCurent"
        if (operation==='plus'){
            // if(numberProductAdded!==undefined){
            //     numberProductAdded= numberProductAdded +1;
            //     // countSpan=countSpan+1;
            // }else{
            //     numberProductAdded=countCurent +1;
            //     // countSpan=countSpan+1;

            // }
            countCurent=countCurent+1;
        }else{
            if(countCurent>0){
                countCurent=countCurent-1;
                // if(numberProductAdded!==undefined){
                //     numberProductAdded= numberProductAdded -1;
                //     // countSpan=countSpan-1;
                // }else{
                //     numberProductAdded=countCurent- 1;
                //     // countSpan=countSpan-1;
                // }
            }
        }
        countSpan.textContent=countCurent;
    };

    plusButton.addEventListener('click', function(){
        plusOrMinus('plus');
    })
    minusButton.addEventListener('click', function(){
        plusOrMinus('minus');
    })






    //--------------------------------------------------------------------------------------------------------//
    //ADD TO CART BUTTON// ------------------------------------------------------------------------//
    const addButton=document.querySelector('.addButton');

    function addButtonPress(){
        //Preluam count-ul curent de pe pag noastra, cel care e asa cum e atunci cand dam click pe Add to cart
        let countCurentWhenAddCart = countCurent;
        //Luam din local Storage lista noastra de produse deja adaugate
        const cartProduct= localStorage.getItem('cart');
        //Transformam lista de produse din Local Storage din string in OBJECT
        let cartProductParsed=JSON.parse(cartProduct)
        //Verificam daca obiectul cu produsele din Local Storage contine cv, iar daca nu e valid, il construim acum:
        if(cartProductParsed===null){
            // console.log("gol")
            //Cream cart-ul facandu-l sa fie un obiect gol
            cartProductParsed={};
            //Acum cream cheia pentru primul produs ever adaugat in cos
            cartProductParsed["creationId="+productId]=countCurentWhenAddCart;
        }
        //Daca obiectul din Local Storage contine deja produse adaugate, il modificam
        else{
            //Verificam ce numar are asociat in cosul din Local Storage produsul pe pagina caruia ne aflam si il salvam intr-o variabila
            let countEachProductFromLocalStorageList=cartProductParsed["creationId="+productId]
            //Daca in cos inca nu avem un nr stabilit din acest tip de produs (avem o produse de tipul celui pe pag caruia suntem acum), ii cream acum un nr
            if(countEachProductFromLocalStorageList===null||countEachProductFromLocalStorageList===undefined){
                cartProductParsed["creationId="+productId]=countCurentWhenAddCart;
                console.log('nu e gol1')
                textAlert.textContent='Product added successfuly';
                alertMessage.classList.remove('hidden');
                alertMessage.classList.add('visibility');
                setTimeout(function(){ alertMessage.classList.remove('visibility');
                // console.log("Adaugat");
                alertMessage.classList.add('hidden')}, 2000)
            }//Dar daca avem deja in cart un nr de obiecte de acest tip, trebuie sa il preluam si sa adaugam la el count-ul curent de pe pag, cel de dinainte de a da click pe Add to cart
            else{
                //Modificam numarul produsului din cos, adaugand la ce era inainte count-ul curent. Pentru asta cream un nou count "newCountProductFromLocalStorageList", o copie
                let newCountProductFromLocalStorageList=countEachProductFromLocalStorageList+countCurentWhenAddCart;
                //Facem o copie a cartului din Local Storage, modificam aceasta copie, si urmeaza sa bagam copia inapoi in local storage in locul lui "cartProductParsed". Actualizam informatia din cart-ul din local storage folosindu-ne de o copie
                var cartProductParsedCopy= Object.assign({},cartProductParsed);
                //Modificam valoarea fiecarui produs (nr de iteme) asociata acestuia in copia pentru cart pe care tocmai am creat-o
                cartProductParsedCopy["creationId="+productId]=newCountProductFromLocalStorageList;
                localStorage.setItem('cart',JSON.stringify(cartProductParsedCopy));
                console.log('nu e gol2')
                textAlert.textContent='Product added successfuly';
                alertMessage.classList.remove('hidden');
                alertMessage.classList.add('visibility');
                setTimeout(function(){ alertMessage.classList.remove('visibility');
                // console.log("Adaugat");
                alertMessage.classList.add('hidden')}, 2000)
                return;
            }
        }
        localStorage.setItem('cart',JSON.stringify(cartProductParsed)); //asta era initial pusa in iniAllItems.js de prof si n-am inteles dc...apoi a pus-o aici la pag 256 din word//
        console.log("Aici am adaugat produsul in cos")
    }

   







     //------------------------------------------------------------------------------------------------------------//
    //VERIFY IF LOGGED FOR ADDING TO CART AND SHOWING CART PRODUCTS NUMBER----------------------------------------//
    //Preluare mesaj Alert-------------------//
    const alertMessage= document.getElementsByClassName('alertMessage')[0];
    const textAlert=alertMessage.children[0]
    //Preluam ce tine de textul de la Sign in//
    const signIn = document.getElementsByClassName('login')[0];
    let signInText = signIn.children[1]; 
    let signInNameUserLoged = JSON.parse(localStorage.getItem('signInNameUserLoged'))






    if(signInNameUserLoged){
        signInText.textContent=signInNameUserLoged;
    }
    const textUserLoged=signInText.textContent
    //Verificam daca e cnv logat, si daca nu e atunci vom afisa mesaj cum ca nu are in ce cos sa adauge produsele
    if(textUserLoged.includes("Hello")){
        addButton.addEventListener('click',addButtonPress)






        const cartNumber=document.getElementsByClassName('cartNumberHero')[0];
        console.log(cartNumber);
        const panels=document.getElementsByClassName('panels')[0];
        console.log(panels);
        
        
    
    
        function afterClickOnAddToCartMakeTotalOfProducts(){
    
            let nrProduse = JSON.parse(localStorage.getItem('cart'))
            console.log(nrProduse)
            // console.log(nrProduse.value)
    
    
            if(!nrProduse){
                // console.log('baa')
                let nrTotalProduseDinCart=countCurent;
                localStorage.setItem('nrTotalProduseDinCart', nrTotalProduseDinCart);
                console.log("1!!!!!!!")
                console.log("Aici am setat nr total de produse")
    
    
            }else{
                const nrProduseValues=Object.values(nrProduse)
                console.log(nrProduseValues)
                if(nrProduseValues.length===1){
                    let nrTotalProduseDinCart=nrProduseValues.reduce((a, b) => {
                        return a + b;});
                        console.log("Prima varianta")
                        
                        console.log(nrTotalProduseDinCart)
                        localStorage.setItem('nrTotalProduseDinCart', nrTotalProduseDinCart);
                        console.log("Aici am setat nr total de produse")
    
                }else{
                    let nrTotalProduseDinCart=nrProduseValues.reduce((a, b) => {
                        return a + b;});
                        console.log(nrTotalProduseDinCart)
                        localStorage.setItem('nrTotalProduseDinCart', nrTotalProduseDinCart);
                }
    
               
                // console.log(nrTotalProduseDinCart)
                // localStorage.setItem('nrTotalProduseDinCart', nrTotalProduseDinCart);
                console.log("222222222")
    
            }
          
           
            if(textUserLoged.includes("Hello")){
            setTimeout(() => {
            location.reload()}, 1500);
            }
        }
        addButton.addEventListener('click',afterClickOnAddToCartMakeTotalOfProducts)









    }else{
        function addButtonPressNotLoged(){
            textAlert.textContent='Please Log into your account before adding products in the cart!'
            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('visibility');
            setTimeout(function(){ alertMessage.classList.remove('visibility');
            alertMessage.classList.add('hidden')}, 2000)
        }
        addButton.addEventListener('click',addButtonPressNotLoged)
    }














    











}else{
    const pricePlusMinusButtons=document.getElementsByClassName('pricePlusMinusButtons')[0];
    pricePlusMinusButtons.remove();

    const productDetailDiv=document.getElementsByClassName('product-detail')[0];
    productDetailDiv.style.backgroundColor='rgb(166, 182, 172)';
    productDetailDiv.style.boxShadow ='none';


    const notFound=document.createElement('h1');
    notFound.style.color='white';
    notFound.textContent="No product found";
    containerProduct.appendChild(notFound);

    const action= document.getElementsByClassName('actions')[0];
    const addButton= document.getElementsByClassName('addButton')[0];

    action.classList.add('hidden');
    addButton.classList.add('hidden');
}










//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//
//SEARCH SI FILTRARE//

const allItemList = localStorage.getItem('allItemsListFromStorage')
const allItemListParsed = JSON.parse(allItemList);
//Am pus toata lista de produse aici, si am luat-o din local.storage (unde era salvata ca string)
//inca din documentul de initAllItems.js) si am transformat-o in obiect, ptc nu ne ajuta ca era string.


const input = document.querySelector('#textSearch');
input.addEventListener('keypress', function(e) {
    const valueSearch= input.value;
    if(e.key==='Enter'){
        const filterListByTitle = allItemListParsed.filter((item)=>{
            return item.title.toLowerCase().includes(valueSearch.toLowerCase())
       
        });

        console.log(filterListByTitle);
        const filterListByTitleString = JSON.stringify(filterListByTitle);
        localStorage.setItem('filterListByTitleLocalStorage', filterListByTitleString);
        location.replace('filteredProducts.html');
    }
});

//Ne folosim de functiile de creare produs si de paginare, si pentru asta le aducem aici//




