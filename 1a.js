const wordCount = (str, words) => {
    let count = 0,
      i = 0;
    while (true) {
      const r = str.indexOf(words, i);
      if (r !== -1) [count, i] = [count + 1, r + 1];
      else return count;
    }
  }; 
  console.log(wordCount('I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.','paragraph'));
   console.log(wordCount('I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.', 'love'));

  console.log(wordCount('I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.','you'));