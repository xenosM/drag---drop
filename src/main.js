const items = document.querySelectorAll(".item")
const dropzone = document.querySelector("#drop-zone")

//Enables the div to be dragged
items.forEach((item)=> item.draggable="true")

//add event listener to the item
items.forEach(item=>{
    item.addEventListener('dragstart',onDragStart)
})
dropzone.addEventListener('dragover', onDragOver)
dropzone.addEventListener('drop', onDrop)
//*function
function onDragStart(e){
    //set an image on darg
    const img= new Image(100,100);
    img.src="public/vite.svg"
    e.dataTransfer.setDragImage(img,0,0)
    //move the item
    e.dataTransfer.setData("text",e.target.id) 
}
function onDragOver(e){
    e.preventDefault()
}
function onDrop(e){
    e.preventDefault()
    const itemId = e.dataTransfer.getData("text")
    const item = document.getElementById(itemId)
    this.append(item)
}


