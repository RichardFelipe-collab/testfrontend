
let lister = true;
let page = 0;
const limit = 3;

let quantityValue = 0;
let ArrayIntens = [];
const option = document.querySelector("#opc-a");

option.addEventListener("click", () => {   
    document.querySelector("#side-hv").classList.toggle("hover");
});

const itemA = document.querySelector("#item-A").addEventListener("click", () => {
    lister = true;
       
    ArrayIntens = [];

    document.getElementById("items-section").innerHTML = "";

    quantityValue = Number(quantity.value);

    for(let i = 0; i < quantityValue; i++) {

        ArrayIntens.push(`
        <div class="items">
                    <div class="number">${i + 1}</div>
                    <div class="rotule">Item A${i + 1}</div>
                </div>
 `);
};

    if(quantityValue > 0) {

        List();
    }

    document.getElementById("qtde").focus();
});

const itemB = document.querySelector("#item-B").addEventListener("click", () => {
    lister = false;
    
    ArrayIntens = [];

    document.getElementById("items-section").innerHTML = "";
    quantityValue = Number(quantity.value);

    for(let i = 0; i < quantityValue; i++) {

        ArrayIntens.push(`
        <div class="items">
        <div class="number">${i + 1}</div>
        <div class="rotule">Item B${i + 1}</div>
    </div>
        `);

       
    };

    if(quantityValue > 0) {

        List();
    }

    document.getElementById("#qtde").focus();
});

const container = document.querySelector("#main");
container.onclick = function() {
    document.getElementById("#side-hv").classList.add("hover");
};


const quantity = document.getElementById("qtde");
quantity.addEventListener("change", () => {

    if(quantity.value > 0) {
        quantity.classList.remove("qtdeEmpty");
    } else {
        quantity.classList.add("qtdeEmpty"); 
    }

    ArrayIntens = [];

    document.getElementById("items-section").innerHTML = "";

    quantityValue = Number(quantity.value);

    for(let i = 0; i < quantityValue; i++) {

        lister ? ArrayIntens.push(`
            <div class="items">
                <div class="number">${i + 1}</div>
                <div class="rotule">Item A${i + 1}</div>
            </div>
        `)
        : ArrayIntens.push(`
            <div class="items">
                <div class="number">${i + 1}</div>
                <div class="rotule">Item B${i + 1}</div>
            </div>
        `);
        
    }

    List();
    
});


function List() {
    let acm = 1;
    const itens = document.getElementById("items-section");
    
    const angle = `
        <div class="align" id="align">
        <div class="align-items">
            <i class="fa fa-angle-left" aria-hidden="true" id="left"></i>
            <i class="fa fa-angle-right" aria-hidden="true"  id="right"></i>
        </div>
    </div> 
    `

    if(quantityValue > 0) {
        itens.innerHTML = angle;
    }

    for(let i = page * 3; i < ArrayIntens.length; i++) {      

        if(acm > 3) {
           
            break;
        }

        document.getElementById("align").insertAdjacentHTML("beforebegin", ArrayIntens[i]);
       
acm++;
    }
    
    const left = document.querySelector("#left").addEventListener("click", () => { 
        if(page > 0) {
            page -= 1;
            List();
        }    
        
    });
    
    const right = document.querySelector("#right").addEventListener("click", () => {
        console.log(page * 3)
        console.log(ArrayIntens.length)
        if((page + 1) * 3 <= ArrayIntens.length - 1) {
            page += 1;
            List();
        } else {
            alert("No items")
        }
    });
};


const qtd = document.querySelector("#qtde");

if(!qtd.value || qtd.value === 0) {
    qtd.classList.add("qtdeEmpty");
} 


 