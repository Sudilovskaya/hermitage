$(document).ready(function (){
var volumeButton = $(".volume-button");
var menuButton = $(".button");
//Input text click event 
$("#text_field1").click(function()
{
    if($("#text_field1").val() == "Поиск по событиям...")
    {
        $("#text_field1").val("");
    }
});

$("#text_field2").click(function()
{
    if($("#text_field2").val() == "Поиск по фамилии...")
    {
        $("#text_field2").val("");
    }
});

$("#text_field3").click(function()
{
    if($("#text_field3").val() == "Поиск...")
    {
        $("#text_field3").val("");
    }
});
//кнопка изменения тома
volumeButton.on('click', toggleModal);

function toggleModal() { 
    $('.volume1-button').toggleClass('is-open');
  }
menuButton.on('click', toggleModal1);

});
//бургер-меню
const menuButton = document.querySelector(".burger-menu-button");
const menu = document.querySelector(".opened-menu");
const menuCloseButton = document.querySelector(".close-button");

menuButton.addEventListener("click", ()=> {
  menu.classList.add("is-active");
  menuCloseButton.add("is-active");
});
menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("is-active");
});
