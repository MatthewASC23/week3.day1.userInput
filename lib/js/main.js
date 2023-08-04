let head = document.getElementById('main_title');
let story = document.getElementById('story_result');
let titleInput = document.getElementById('title_input');
let nounInput = document.getElementById('noun');
let verbInput = document.getElementById('verb');
let adjetiveInput = document.getElementById('adjective');
let adlib = document.getElementsByClassName('form_container');
let submitBtn = document.getElementById('submit_button');


titleInput.onkeyup = function(){
    head.innerHTML = titleInput.value;
}



submitBtn.onclick = function(event){
    event.preventDefault();

    if(titleInput.value == "" || nounInput.value == "" || verbInput.value == "" || adjetiveInput.value == ""){
        alert('Please fill out all fields');
    }

    else {
        adlib[0].style.display = 'none';

        nounInput.innerHTML = nounInput.value;
        verbInput.innerHTML = verbInput.value;
        adjetiveInput.innerHTML = adjetiveInput.value;
        
        story.style.display = 'block';
        story.innerHTML = 'Last night i ate a ' + nounInput.value + ' and today I just had to ' + verbInput.value + '. What a ' + adjetiveInput.value + ' day!';
    }
}
