function $(x) {return document.getElementById(x);} 

//LOOP TYPE SECTION//
const loopText = [
    {text: "Test", color: "black"},
    {text: "Test 2", color: "black"},
    {text: "Test 3", color: "black"}
]

$( document ).ready(async function() {
    LoopWord(loopText, "#change-sentence")
  });

//TYPING SECTION//

async function typewords(words, eleRef, delay = 100) {
    const letters = words.split("");
    let i=0;
    while(i<letters,length) {
        await waitForMS(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return; 
}

//DELETE SECTION//

async function deleteWord(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMS(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

async function LoopWord(cartList, eleRef) {
    var i = 0;
    while(true) {
        await typewords(cartList[i].text, eleRef);
        await waitForMS(1500);
        await deleteWord(eleRef);
        await waitForMS(500);
        i++
        if(i > cartList.length) {i = 0;}
    }
}

function waitForMS(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
