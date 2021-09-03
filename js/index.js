window.onload = function() {
    var celdas = document.querySelectorAll('.celda');
    
    for (var i=0, len = celdas.length; i < len; i++){
        celdas[i].addEventListener('click', function(e){
            navigator.clipboard.writeText(e.target.innerHTML)
                .then(() => {
                    console.log("Text copied to clipboard...")
                    e.target.classList.add('active')
                })
                .catch( err => {
                    console.log('Something went wrong', err);
                })
        })
    }
    
};