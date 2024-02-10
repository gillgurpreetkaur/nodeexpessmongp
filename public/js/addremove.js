const tascontainer = document.querySelector(".task_container");
const createnewcard=()=>{
 const data={
   id:`${Date.now()}`,
   Imgurl:document.getElementById("imageurl").value,
   Title:document.getElementById("title").value,
   Message:document.getElementById("message").value
 };
 const newCard =`<div class="card" style="width: 18rem;" id='${data.id}'>
 <img src='${data.Imgurl}' class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${data.Title}</h5>
   <p class="card-text">${data.Message}</p>
   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i class="fa-solid fa-plus"></i> Add New
            </button>
            <button type="button" class="btn btn-primary" onclick="deleteitem('${data.id}')"><i class="fa-solid fa-trash text-white"></i></button>

 </div>`;
 tascontainer.insertAdjacentHTML("beforeend",newCard);
}
function deleteitem(curlem){
const datagather = document.getElementById(curlem);
if(datagather){
    datagather.parentNode.removeChild(datagather);
    console.log("deleted item");
}
else{
    console.log("not");
}
}
