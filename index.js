document.onkeypress = function(evObject){
    document.getElementById('container__code').textContent = evObject.charCode;
    document.getElementById('container__letter').textContent = evObject.key;
    document.getElementById('advice').classList.add('hide');
}