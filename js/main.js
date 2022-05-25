let taskInput = document.getElementById("taskInput")
let addTaskbtn = document.getElementById("addTaskbtn")
let noTasks = document.getElementById("noTasks")
let allTasks = document.getElementById("allTasks")
let validMessage = document.getElementById("validMessage")
let closeValidMessagebtn = document.getElementById("closeValidMessagebtn")
let model = document.getElementById("model")
let showModelBtn = document.getElementById("showModelBtn")

let addTaskFunction = ()=> {
   taskData = taskInput.value;
   if (taskData.trim() == "" || taskInput.value.length < 4 || taskInput.value.length > 20){
      closeValidMessageFunc();
   } else{
      noTasks.classList.add('none')
      allTasks.innerHTML += `
      <div class= 'alert alert-info'>
         ${taskData}
         <i class=" removeBtn fa-regular fa-trash-can"></i>
      </div>
      `
      validMessage.classList.add('none');
      taskInput.value = ""
      showModelBtnFunction()

   }
}

let closeValidMessageFunc = () => {
   validMessage.classList.toggle('none');
}
addTaskbtn.addEventListener('click' ,  addTaskFunction)
closeValidMessagebtn.addEventListener('click' , closeValidMessageFunc )

document.addEventListener('click' , function(e) {
   if (e.target.classList.contains('removeBtn')){
      e.target.parentElement.remove();
      checkNoTasksShow()
   }
})


let checkNoTasksShow = () => {
   if (allTasks.childElementCount == 0){
      noTasks.classList.remove('none')
   } 
}


let showModelBtnFunction=()=>{
    model.classList.toggle('block')
}

showModelBtn.addEventListener('click' , showModelBtnFunction )
