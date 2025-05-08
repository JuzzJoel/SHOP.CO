let dropdown__icon = document.querySelector(".dropdown__icon");
let dropdown__menu = document.querySelector(".dropdown__content");

dropdown__icon.addEventListener("click",showDropdown)

function showDropdown(){
  dropdown__menu.style.display =
   dropdown__menu.style.display === "block" ? "none" : "block";
}



//if (dropdown__icon && dropdown__menu) {
  //  dropdown__icon.addEventListener("click", () => {
    //    dropdown__menu.style.display = dropdown__menu.style.display === "block" ? "none" : "block";
    //});
//} else {
  //  console.error("Dropdown icon or menu not found");
//}
