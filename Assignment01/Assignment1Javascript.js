window.onload = function () {


    var changeDivs = document.getElementsByClassName("change")

    for (var i = 0; i < changeDivs.length; i++) {
        var paras = changeDivs[i].getElementsByTagName('p');
        for (var j = 0; j < paras.length; j++) {
            var onePara = paras[j]
            onePara.onmouseenter = function () {
                this.style.color = 'red'
            }

            onePara.onmouseleave = function () {
                this.style.color = 'black'
            }
        }
    }

    var allParas = document.getElementsByTagName('p')
    for (var i = 0; i < allParas.length; i++) {
        allParas[i].onclick = function () {
            if (this.style.border != '1px dashed black') {
                this.style.border = '1px dashed black'
            } else {
                this.style.border = ''
            }

        }
    }

    var topDiv = document.getElementById('top')
    var imgsInTopDiv = topDiv.getElementsByTagName('img')
    for (var i = 0; i < imgsInTopDiv.length; i++) {
        imgsInTopDiv[i].ondblclick = function () {
            this.style.display = 'none'
        }
    }
    var midDiv = document.getElementById('middle')
    var imgsInMidDiv = midDiv.getElementsByTagName('img')
    for (var i = 0; i < imgsInMidDiv.length; i++) {
        imgsInMidDiv[i].ondblclick = function () {
            this.style.display = 'none'
        }
    }

    var bottomDiv = document.getElementById('bottom')
    var linksInBottomDiv = bottomDiv.getElementsByTagName('a')
    for (var i = 0; i < linksInBottomDiv.length; i++) {
        if (linksInBottomDiv[i].href.indexOf('nhl') >= 0) {
            linksInBottomDiv[i].onclick = function (event) {
                event.preventDefault()
            }
        }
    }

}
