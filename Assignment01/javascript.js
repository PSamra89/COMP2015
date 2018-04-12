window.onload = function() {


    var changeDivs = document.getElementsByClassName("change")

    for (var i = 0; i < changeDivs.length; i++) {
        var paras = changeDivs[i].getElementsByTagName('p');
        for (var j = 0; j < paras.length; j++) {
            var onePara = paras[j]
            onePara.onmouseover = function () {
                this.style.color = 'red'
            }

            onePara.onmouseout = function(){
                this.style.color = 'black'
            }
        }
    }

    var allParas = document.getElementsByTagName('p')
    for (var i = 0; i < allParas.length; i++) {
        allParas[i].onclick = function() {
            if(this.style.border != 'dashed black') {
                this.style.border = 'dashed black'
            } else {
                this.style.border = 'none'
            }

        }
    }

    var topDiv = document.getElementById('top')
    var imgsInTopDiv = topDiv.getElementsByTagName('img')
    for (var i = 0; i < imgsInTopDiv.length; i++) {
        imgsInTopDiv[i].ondblclick = function () {
            this.style = 'none'
        }
    }
    var midDiv = document.getElementById('middle')
    var imgsInMidDiv = midDiv.getElementsByTagName('img')
    for (var i = 0; i < imgsInMidDiv.length; i++) {
        imgsInMidDiv[i].ondblclick = function () {
            this.style = 'none'
        }
    }

    var bottomDiv = document.getElementById('bottom')
    var linksInBottomDiv = bottomDiv.getElementsByTagName('a')
    for (var i = 0; i < linksInBottomDiv.length; i++) {
        if(linksInBottomDiv[i].href.indexOf('nhl') >= 0){
            linksInBottomDiv[i].onclick = function(event){
                event.preventDefault()
            }
        }
    }

}
