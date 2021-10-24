var delList = document.getElementsByClassName("delete-icon");
function addTrashClick() {
    var i;
    for (i = 0; i < delList.length; i++) {
        delList[i].onclick = function() {
            var div = this.parentElement.parentElement;
            div.remove();
        }
    }
}

function addCheckClick() {
    var list = document.querySelector('#list');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'I' && ev.target.classList.contains('check-icon')) {
        var checkIcon = ev.target;
        checkIcon.parentElement.parentElement.classList.add('completed')
    }
    }, false);
}

window.onload = function() {
    var list = document.getElementsByClassName("item");
    var i;
    for (i = 0; i < list.length; i++) {
      var delIcon = document.createElement('I');
      var checkIcon = document.createElement('I');
      checkIcon.className = 'fa fa-check check-icon'
      delIcon.className = 'fa fa-trash-o delete-icon';
      var parentDiv = document.createElement('DIV');
      parentDiv.className = 'btn-holder';
      parentDiv.appendChild(delIcon);
      parentDiv.appendChild(checkIcon);
      list[i].appendChild(parentDiv);
    }
    addCheckClick();
    addTrashClick();
}

function addTask() {
    var newDiv = document.createElement("DIV");
    newDiv.className = "item";
    var inputValue = document.getElementById("txtHolder").value;
    var txtNode = document.createTextNode(inputValue);
    newDiv.appendChild(txtNode);
    if (inputValue === '') {
      alert("You must enter something!");
    } else {
      document.getElementById("list").appendChild(newDiv);
    }
    document.getElementById("txtHolder").value = "";
  
    var delIcon = document.createElement('I');
    var checkIcon = document.createElement('I');
    checkIcon.className = 'fa fa-check check-icon'
    delIcon.className = 'fa fa-trash-o delete-icon';
    var parentDiv = document.createElement('DIV');
    parentDiv.className = 'btn-holder';
    parentDiv.appendChild(delIcon);
    parentDiv.appendChild(checkIcon);
    newDiv.appendChild(parentDiv);
  
    addTrashClick();
}

function handleKeyPress(e) {
    if(e.keyCode == 13){
        addTask();
    }
}