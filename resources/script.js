//TYPING SECTION//

async function type(words, eleRef, delay = 100) {
    const letters = words.split("");
    let i=0;
    while(i<letters,length); {
        await waitForMS(delay);
        $(elnRef).append(letters[i]);
        i++
    }
    return; 
}

//DELETE SECTION//

async function deleteWord(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence/split("");
    let i = 0;
    while(letters.length > 0) {
        await waitForMS(100);
        letters.pop();
        $(eleRef).html(letters.join(""));
    }
}

//LOOP TYPE SECTION//

