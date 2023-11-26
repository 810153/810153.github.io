document.addEventListener("DOMContentLoaded",function(){
    let uploadBtn = document.getElementById("upload");
    let textContent = document.getElementById("textContent");
    uploadBtn.addEventListener("click",function(){
        let message = document.createElement("div");
        message.classList.add("copyArea");
        message.id="showMessage";
        message.innerHTML = 
        `<div class="row rounded-5 p-4">
            <div class="col d-flex bg-secondary rounded-top-4">
                <div calss = "col-1 "></div>
                <div class = "col-3 "></div>
                <div class = "col-1 "></div>
                <div class = "col-5 "></div>
                <button class = "btn btn-danger btn-sm d-flex" id="deleteMessage">刪除</button>
            </div>
            <div class = "parent-element text-wrap bg-white p-3 rounded-1 text-break">
                <div class = "w-auto d-inline-block parent-element" id = "copyText"></div>
            </div>
        </div>`;
        message.querySelector("#copyText").textContent = textContent.value;
        let placeMessage = document.getElementById("placeMessage");
        placeMessage.appendChild(message);
        message.querySelector("#deleteMessage")
        message.addEventListener("click", function(){
            message.parentNode.removeChild(message);
        });
    })
});
