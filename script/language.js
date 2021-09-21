const languages = [
    'hungarian',
    'english'
]

function hideLang(language){
    document.body.classList.add(`hide-${language}`)
}
function showLang(language){
    document.body.classList.remove(`hide-${language}`)
}
function hideAll(){
    languages.forEach(hideLang)
}
function currentLang(){
    return localStorage.getItem('lang')
}
function saveLang(language){
    localStorage.setItem('lang', language)
}

function setLang(language){
    hideLang(currentLang())
    showLang(language)
    saveLang(language)
}

if(currentLang() === null){
    saveLang('hungarian')
}
hideAll()
setLang(currentLang())

delegate(document.body, '.lang-change', 'click', (event, elem) => {
    event.preventDefault()
    setLang(elem.dataset.lang)
})


function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target;
        let eventHandler = this;
        let closestChild = eventTarget.closest(child);

        if(eventHandler.contains(closestChild)){
            what(event, closestChild);
        }
    }

    parent.addEventListener(when, eventHandlerFunction);
}








/*-------------------------------------------------------------------------------------------
function setLang(language){
    document.querySelectorAll('.language').forEach(e => {
        if(e.classList.contains(language)){
            e.classList.remove('hidden-lang')
        }else{
            e.classList.add('hidden-lang')
        }
    })
    localStorage.setItem('lang', language)
}

if(localStorage.getItem('lang') === null){
    localStorage.setItem('lang', 'hungarian')
}

setLang(localStorage.getItem('lang'))

delegal(document.body, '.lang-change', 'click', (event, elem) => {
    event.preventDefault()
    setLang(elem.dataset.lang)
})


function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}
*/