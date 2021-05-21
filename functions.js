
// use a string argument to create and append a <p> tag to the story display <article> element 

let storyDisplay = document.querySelector('#storyDisplay')

// console.log(storyDisplay)

let appendParagraph = function ( stringToAppendToArticle ) {
    let paragraph = document.createElement('p')
    paragraph.append(stringToAppendToArticle)
    storyDisplay.append(paragraph)
}

appendParagraph(pages[0])

// line order = 4, 6, 8, 14, 9, 10, 11