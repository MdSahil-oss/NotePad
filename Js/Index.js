let show = ()=>{
    let html="";
    if(localStorage.getItem('notes')==null || localStorage.getItem('notes')=="[]"){
        html = `<h3>Nothing to show</h3>`;
    }
    else{
        JSON.parse(localStorage.getItem('notes')).forEach((element,index)=>{
            html += `<div class="bracket" onclick="deleteNote(${index})"><div>
            <h3>${element.title}</h3>
            <p>${element.note}</p></div>
            <button class="deleteBtn">Delete</button>
            </div></div>`
            
        })
    }
    notes.innerHTML = html;
}
console.log("This is Index.js");

let notesArr;
let addBtn = document.getElementById('addBtn');
let notes = document.getElementById('notes');

let deleteNote = (index)=>{
    let notesArr = JSON.parse(localStorage.getItem('notes'));
    notesArr.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesArr));
    show();
}


show();

addBtn.addEventListener('click',()=>{
    let title = document.getElementById('title').value;
    let note = document.getElementById('note').value;
    
    if(localStorage.getItem('notes')==null){
        notesArr = [];
    }
    else{
        notesArr = JSON.parse(localStorage.getItem('notes'));
    }
    
    let notesObj = {
        "title":`${title}`,
        "note":`${note}`
    }

    notesArr.push(notesObj);
    localStorage.setItem('notes',JSON.stringify(notesArr));
    show();
    document.getElementById('title').value = "";
    document.getElementById('note').value = "";

    
})

let search = document.getElementById('search');
search.addEventListener('input',()=>{
    let bracket = document.getElementsByClassName('bracket');
    Array.from(bracket).forEach((element)=>{
        let noteText = element.getElementsByTagName('p')[0].innerText;
        if(noteText.includes(search.value)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})