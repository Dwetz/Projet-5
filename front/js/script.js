fetch("http://localhost:3000/api/products")
.then((response) => response.json())
.then((data) => addItems(data));


function addItems(data) {
    console.log (data)
    for (let index = 0; index < data.length ; index++ ){
        const id = data[index]._id
        const imageUrl = data[index].imageUrl
        const altText = data[index].altTxt
        const description = data[index].description
        const image = createImage(imageUrl, altText)
        const anchor = createAnchor(id)
        const name = data[index].name
        const H3 = createH3 (name)
        const p = createParagraphe (description)
        const article = createArticle()
        article.appendChild(image)
        article.appendChild(H3)
        article.appendChild(p)
        appendChild(anchor, article)
    } 
}

function createAnchor(id) {
    let anchor = document.createElement ("a");
    anchor.href = "./product.html?id=" + id;
    anchor.setAttribute("id", id);
    return anchor;
}

function appendChild(anchor , article) { 
    const items = document.querySelector ("#items");
    if (items != null ) {
        items.appendChild(anchor)
        anchor.appendChild(article)
    }
}

function createArticle() {
    const article = document.createElement("article")
    const paragraphe = createParagraphe ()
    //article.appendChild (h3)
    //article.appendChild (paragraphe)
    console.log(article)
    return article
}

function createImage(imageUrl, altText){
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altText
    return image
}

function createH3(name){
    const h3 = document.createElement("h3")
    h3.textContent = name 
    h3.classList.add = ("ProductNames")
    return h3
}

function createParagraphe(description){
    const paragraphe = document.createElement("p")
    paragraphe.textContent = description
    paragraphe.classList.add("ProductDescription")
    return paragraphe
}



