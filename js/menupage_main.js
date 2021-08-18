"use strict";

const dts = document.querySelectorAll("dt");
dts.forEach(dt => {
    dt.addEventListener("click", ()=> {
    dt.parentNode.classList.toggle("appear");

    // dts.forEach(el => {
    //   if(dt !== el){
    //     el.parentNode.classList.remove("appear");
    //   }
    // });⇦タブを閉じたら他のdtが出るようにする命令

    });
});

{
    const open = document.getElementById("open");
    const overlay = document.querySelector(".overlay");
    const close = document.getElementById("close");

    open.addEventListener ("click", () => {
        overlay.classList.add("show");
        open.classList.add("hide");
    });

    close.addEventListener ("click", () => {
        overlay.classList.remove("show");
        open.classList.remove("hide");
    });
}
