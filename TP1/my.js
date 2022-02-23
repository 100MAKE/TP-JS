const btn = document.getElementById('btn');
const container =document.getElementById('container');
function gameDiv(){
    let img1 = document.createElement('img');
   img1.setAttribute('class','img')
   img1.setAttribute('src','icons/trash.svg')
   let img2 = document.createElement('img');
   img2.setAttribute('class','img')
   img2.setAttribute('src','icons/edit.svg')
   let  icon2 = document.createElement('div')
   icon2.setAttribute('id','icon2')
   icon2.appendChild(img1)
   icon2.appendChild(img2)
   let icon1= document.createElement('div')
   icon1.setAttribute('id','icon1')
   let div2=document.createElement('div')
   div2.setAttribute('id','div2')
   div2.appendChild(icon1)
   div2.appendChild(icon2)
   let textarea = document.createElement('textarea')
   textarea.setAttribute('cols','10')
   textarea.setAttribute('rows','10')
   let div1=document.createElement('div')
   div1.setAttribute('id','div1')
   div1.appendChild(div2)
   div1.appendChild(textarea)
   container.appendChild(div1)
   img1.addEventListener('click',function()
  {
     container.removeChild(this.parentElement.parentElement.parentElement)
  })

 img2.addEventListener('click',function()
  {
     textarea.focus()
  })
} 
 btn.addEventListener('click',function()
 {
  gameDiv()

 })

 
  