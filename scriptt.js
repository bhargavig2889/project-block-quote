 var container=document.getElementsByClassName("container");
  var quote=document.getElementById("quote");
  var author=document.getElementById("author");
  var new_user =document.getElementById("new-user");
  var twitter=document.getElementById("twitter");
  var quote_url = 'https://type.fit/api/quotes';
  var apiQuotes=[];
  var random=0;


async function getQuote()
{
    try{
        const response = await fetch(quote_url);
        apiQuotes = await response.json();
        newQuote();
    }
    catch(error)
    {
        console.log(error)
    }
}
function newQuote(){
     random=Math.floor(Math.random()  *apiQuotes.length);
     quote.innerHTML=apiQuotes[random].text;
     if( apiQuotes[random].author === null){
        author.innerText = '-UNKNOWN'
    }else{
        author.innerText = apiQuotes[random].author;
    }

}
twitter.addEventListener('click',function(){
    window.open(`https://twitter.com/intent/tweet?text=${apiQuotes[random].text} - ${apiQuotes[random].author}`,'_blank')
})

new_user.addEventListener('click',newQuote)



getQuote();
