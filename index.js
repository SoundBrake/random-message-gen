var quotes = ["\"Opportunities like this come once in a lifetime, and when they do you gotta grab it and turn that thing big time!\" - Kendall", "\"Watching The Pussycat Dolls does make the pain go away.\" - Kendall", "\"So I uh, did the math last night on this whole singing thing...and, Katie was right: you're an idiot.\" - Logan", "\"No, I'd rather get a job that doesnt involve work.\" - James", "\"Look at yourself. Who's handsomer than you? No one.\" - James", "\"Life's funny, you know? One day, you're hockey players...then you're a pop band.\" - Carlos", "\"Wait, I'm smart.\" - Logan", "\"No...I'm a POP STAR. Who wants to rock that concert, get our album released, and get chased by lots of girls.\" - Carlos"];
var btn = document.querySelector("button");
var text = document.querySelector("p");

btn.onclick = function(){
  text.innerHTML = quotes[ Math.floor(Math.random() * (quotes.length))];
}
