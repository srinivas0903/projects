//selections

let addCardBtn=document.querySelector("#addCard");
let todoContainer=document.querySelector("#todo");

addCardBtn.addEventListener("click",addTask);

function addTask(){
    let card=document.createElement("div")
    card.className="card"
    card.innerText="Test Card"
    card.setAttribute("contenteditable","true")
    todoContainer.append(card)
   card.focus();// it means pointer is automatically there for you.we can start writing it.

    //pointer will be in editable zone automatically.

    //problem:1 empty card should automatically be removed

    //blur-focus lost
    card.addEventListener("blur",(eventDetails)=>{
        let blurredCard=eventDetails.target;
        if(blurredCard.innerText.trim()==""){
            blurredCard.remove();
        }
})
card.addEventListener("click",(eventDetails)=>{
    let clickedCard=eventDetails.target;
    if (clickedCard.innerText=="Test Card"){
        clickedCard.innerText="";

    }
})

let selector=document.createElement("select");
selector.innerHTML=
`<option value="todo">Todo</option>
<option value="progress">Progress</option>
<option value="done">Done</option>`

card.append(selector);

selector.addEventListener("change",(eventDetails)=>{
    let selectedoption=eventDetails.target.value
     let selectedContainer=document.querySelector(`#${selectedoption}`)
     selectedContainer.append(card);
})



}