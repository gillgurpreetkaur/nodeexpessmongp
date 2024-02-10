
function deleteitem(cur){
    const datatobedelete=document.getElementById(cur);
    if(datatobedelete)
    {
        datatobedelete.parentNode.removeChild(datatobedelete);
    }
    else{
        console.log("not deleted");
    }
};

const taskcontainer=document.querySelector(".task_container");
const Creatnew = ()=>{
const getdate = 
{
    id:`${Date.now()}`
};
const Newinpute =`<div class="inpitSection mt-2" id='${getdate.id}'>
<input type="text" placeholder="Enter here"  name="Apple"> <button onclick="Creatnew()"><i class="fa-solid fa-plus text-primary"></i></button> <button onclick="deleteitem('${getdate.id}')"><i class="fa-solid fa-trash text-danger"></i></button>
</div>`;
taskcontainer.insertAdjacentHTML("beforeend",Newinpute);
};
