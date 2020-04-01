var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('spisok');
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var develBtn = document.getElementById('devel');
var line = document.getElementsByTagName('li');

function crossOut(){
    for(let li of line){
        li.addEventListener('click', function(){
            li.style.textDecoration = 'line-through';
        });
    }
};

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopImmediatePropagation();
        });
    }
};

function loadTodo(){
    if(localStorage.getItem('ApplicationTodo')){
        ulSpisok.innerHTML = localStorage.getItem('ApplicationTodo');
    }
};

// addEventlistener - обработчик событий с последующим выводом функции

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete';

        var newInfo = this.value;
        this.value = " ";

        var re = / /gi;
        var newInfo = newInfo.replace(re, '');
        if(newInfo.length != 0){
            var today = new Date();
            var hours = today.getHours();
            var minutes = today.getMinutes();
            var seconds = today.getSeconds();
            var month = today.getMonth();
            var day = today.getDay();
            var year = today.getFullYear();
            ulSpisok.appendChild(newLi).append(newSpan, " ", newInfo, " - время создания:" + hours + ":" + minutes + ":" + seconds + " , " + "день создания:" + day + "." + month + "." + year + ".");
        }else{
            alert("Задача не введена!");
        }
    }

    deleteTodo();
    crossOut();
});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('ApplicationTodo', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = " ";
    localStorage.setItem('ApplicationTodo', ulSpisok.innerHTML);
});

develBtn.addEventListener('click', function(){
    alert('Герасимов С.Н.')
})

deleteTodo();
loadTodo();
crossOut();