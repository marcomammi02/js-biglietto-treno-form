const eleName = document.querySelector(".name");
const eleKm = document.querySelector(".km");
const eleAge = document.querySelector(".age");
const eleBoxForm = document.querySelector(".box_form");
const eleBoxTicket = document.querySelector(".box_ticket");
const eleBtnGenerate = document.querySelector(".btn_generate");
const eleBtnDelete = document.querySelector(".btn_delete");


eleBtnGenerate.addEventListener("click", function() {
    const km = parseFloat(eleKm.value);
    const standardPrice = parseFloat(0.21 * km);
    const age = eleAge.value;
    let discount = 0;


    if (age === "under") {
        discount = 20;
    } else if(age === "over") {
        discount = 40;
    }

    if (eleName.value === "" || eleKm.value === "" || eleAge.value === "none"){
        eleBoxTicket.innerHTML = ("Compila i campi superiori...");
    } else {
        let totalPrice = standardPrice - ((standardPrice / 100) * discount);
        totalPrice = totalPrice.toFixed(2);
        eleBoxTicket.innerHTML = ("Il costo del tuo biglietto è di " + totalPrice + " €.")
    }
});

eleBtnDelete.addEventListener("click", function() {
    document.location.reload();
});