// 1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

// const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
// console.log(countWords(sentence));
// 31

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