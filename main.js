
// when the form is submitted we will be logging the event and modifying the page

let nameForm = document.querySelector('#nameForm')
console.log(nameForm)

// addEventListener signature = ('eventName', callbackFunction )
// callback signature = ( eventObject )
nameForm.addEventListener('submit', function ( eventObject ) {
    // watch out for this!!!
    // default behavior is to refresh page on submit
    eventObject.preventDefault()
    // console.dir explicitly tells javascript to list all properties on the object
    console.dir(eventObject)

    let nameInput = document.querySelector('#nameInput')
    // get the value inside the input
    let name = nameInput.value
    appendParagraph('Welcome ' + name)
    // `Welcome ${name}`

})

// dont call your callback too early!
// nameForm.addEventListener('submit', callback())

let pageForm = document.querySelector('#pageForm')
console.log(pageForm)

pageForm.addEventListener('submit', function ( eventObject ) {
    eventObject.preventDefault()
    let pageInput = document.querySelector('input[type=number]')
    console.log(pageInput)
    let pageNumber = pageInput.value
    // check your indexing - is page one index 1?
    let page = pages[pageNumber]
    appendParagraph(page)
})