function draw() {

    var drawMax = document.getElementById('drawMax').value
    
    var drawResult = Math.round(Math.random() * drawMax)

    document.getElementById('drawResult').innerHTML = drawResult

}