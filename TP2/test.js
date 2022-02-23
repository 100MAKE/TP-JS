const container=document.getElementsByClassName('container')
const one=document.getElementById('s1')
const paragraphe=document.getElementsByTagName('p')
const two=document.getElementById('s2')
const bt1=document.getElementById('bt1')
const bt2=document.getElementById('bt2')
const three=document.getElementById('s3')

function gameF() {

  // for ( let i=0 ;i<paragraphe.length ;i++)
  // {
  //  paragraphe[i].addEventListener('click',function(){
  //    paragraphe[i].classList.toggle('active')
     

  //  })

  for ( let i=1 ;i<=4 ;i++)
  {
    document.getElementById(`p${i}`).addEventListener('click',function(){
      document.getElementById(`p${i}`).classList.toggle('active')
     

   })
     bt1.addEventListener('click',function(){
     
   
      const select=document.getElementsByClassName('active')
for (let i = 0; i < select.length; i++) {

  
  three.appendChild(select[i])
  select[i].classList.toggle('active')
  
}
   
   
   
     } )
     bt2.addEventListener('click',function(){
   
      const select=document.getElementsByClassName('active')
      
        for (let i = 0; i < select.length; i++) 
      {

        one.appendChild(select[i])
     
      }
     } )
     
    }    
  }
 


gameF()



