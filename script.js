const form=document.querySelector("form")
let count=1
let wrong=true
const prevguess=[]
let rand= Math.trunc(Math.random()*100+1);

form.addEventListener("submit",function(e){
    e.preventDefault()
    const num=Number(document.body.querySelector(".guessField").value)
    
    if((count<=10) && (wrong===true) && !(isNaN(num))){
        if(num!=rand){           
            wrong=true
            prevguess.push(num)
            const guess= document.querySelector(".lastResult")        
            const res=document.querySelector(".lowOrHi")
            const prevguesses=document.querySelector(".guesses")
            count++
            prevguesses.innerHTML=(prevguess) 
            if(count===11)   
            res.innerHTML=(`You Lost! Random Number was ${rand}`)
            else
            res.innerHTML=(`Still a chance! Random Number was ${rand}`)     
            guess.innerHTML=(`${11-count}`)                
        }else{
            wrong=false
            console.log(`Num is ${num}`);
            console.log(`Random is ${rand}`);
            console.log("else");
            console.log("Ends");
            // const res=document.querySelector(".lowOrHi")
            res.innerHTML=("You Won!")
        }

    }else if(count<=10){
        const res=document.querySelector(".lowOrHi")
            res.innerHTML=("Enter Valid Number!")
        
    }
})



