const container=document.getElementsByClassName('container')
const c1=document.getElementsByClassName('c1')
const c10=document.getElementById('c10')
const c11=document.getElementById('c11')
const c2=document.getElementsByClassName('c2')
const c3=document.getElementById('c3')
const b1=document.querySelector('.b1')
const b10=document.querySelectorAll('.b10')
const s1=document.getElementById('s1')
const s2=document.getElementById('s2')
const s3=document.getElementById('s3')
const s4=document.getElementById('s4')

const TABmaj="AZERTYUIOPQSDFGHJKLMWXCVBN".split('')
const TABmin="azertyuiopqsdfghjklmwxcvbn".split('')
const TABnum="0147852369".split('')
const TABchar=",;:!&é'èç_=/*-+.§£µ%°".split('')



function good(){
 if(b1.value ==""){
    alert('invalide')
    return false
    }
    else{ 
        if(b1.value>=5 && b1.value<20){
            var Tglob=[]
        
            const T1=s1.checked?TABmaj:[]
    
            const T2=s2.checked?TABmin:[]
            const T3=s3.checked?TABnum:[]
            const T4=s4.checked?TABchar:[]
            Tglob=Tglob.concat(T1,T2,T3,T4)
            var password=""
          for (let i= 1; i<=b1.value; i++) {
              let j=Math.floor(Math.random()*Tglob.length)
              password=password+Tglob[j]
              }
              
              c11.innerText=password


                 c10.addEventListener('click',function(){
                     
                  navigator.clipboard.writeText(c11.innerText);


                 })



            
            
        }
        else{
            
            alert('trop')
 }
}
}
c3.addEventListener('click',good)
