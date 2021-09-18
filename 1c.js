const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const countWords=(sentence)=>{
    let count = 0;
    let array = sentence.split(" ")
    for(let i=0;i<array.length;i++){
        if(array[i].length>1){
        count+=1
        }
    }
    return count
}

console.log(countWords(sentence));