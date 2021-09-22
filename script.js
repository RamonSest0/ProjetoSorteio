function draw() {

    var drawMax = document.getElementById('drawMax').value
    
    var drawResult = Math.round(Math.random() * drawMax)

    if (!isNaN(drawMax)){

        document.getElementById('drawResult').innerHTML = drawResult 
    }

    else {
        
        return alert("Desculpe, mas " + drawMax + " não é um numero. :/")
    }

}