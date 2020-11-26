function BeforeEnter()
{
    alert("Добро пожаловать")
}
// function odin(value)
// {
//     var text = document.getElementsById("name-input");
//     var val2 = text.value;
// }
// function dva(value)
// {
//     var number = document.getElementsById("second-call");
//     var val1 = number.value;
// }
function ButtonClickCall()
{
    alert("Мы перезвоним Вам!")
}
function ButtonClickEmail()
{
    alert("Вам на почту был отправлен код подтверждения")
}

function resize_image()
{
    var img = document.getElementById("img-clients");
    img.style.width="500px";
}
function resize_image_after()
{
    var img = document.getElementById("img-clients");
    img.style.width="100%";
}

function change_img()
{
    var hand = document.getElementById("write-hand");
    hand.style.src="http://vsednr.ru/wp-content/uploads/2018/05/bloknot-zhenshhina-pishet.jpg";
    hand.style.width="100%";
    hand.style.height="100%";
}
function change_img_after()
{
    var hand = document.getElementById("write-hand");
    hand.style.src="img/Write.png";
    hand.style.width="100%";
    hand.style.height="100%";
}
