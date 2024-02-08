
const input=document.getElementById("inp").value
localStorage.setItem("task",input)
const tasky = () => {
  const parent = document.getElementById("add");

  const input = document.getElementById("inp");
  let text = input.value;
  if (text == "") {
    alert("please enter the Task");
  } else {
    let listItem = document.createElement("li");
    listItem.className = "taskList";
    listItem.innerHTML = `<div class="par" style="box-shadow:1px 1px 5px 0px ; border-radius: 10px;padding:10px;display:inline-block;width: 100%; line-height: 10px; margin-bottom:10px " >
        <span style="display: inline-block;margin-top: 10px;font-weight: bolder;"> ${text}</span>
<span style="float: inline-end;">
<button onclick="del(this)" class="btn " style="margin-right: 50px;" ><i class="fa-solid fa-trash"></i></button>
<button onclick="edit(this)" class="btn" ><i class="fa-solid fa-pen"></i></button>
</span></div>`;

    parent.appendChild(listItem);

    input.value = "";
    

  }
};


const del=(button)=>{ 
    let listItem=button.parentElement.parentElement;

    listItem.remove();

}

const edit=(button)=>{
    let listItem=button.parentElement.parentElement;
    let spanEle=listItem.querySelector('span')
    let newtext=prompt(input,spanEle.innerHTML)
    if(newtext!==null&&newtext!==''){
        spanEle.innerHTML=newtext
    }
    
}


