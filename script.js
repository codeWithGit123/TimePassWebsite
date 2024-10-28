const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don't skeletons fight each other? They don’t have the guts!",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Why was the math book sad? Because it had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why did the computer go to therapy? Because it had too many bytes!",
    "How does a penguin build its house? Igloos it together!",
    "What do you call a fish with no eyes? Fsh!",
    "Why can't you give Elsa a balloon? Because she will let it go!",
    "What did the grape do when it got stepped on? Nothing, it just let out a little wine!",
    "Why don’t oysters share their pearls? Because they’re shellfish!",
    "What do you call an alligator in a vest? An investigator!",
    "How do you catch a squirrel? Climb a tree and act like a nut!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a factory that makes good products? A satisfactory!",
    "Why did the cookie go to the hospital? Because it felt crummy!",
    "What do you call an elephant that doesn’t matter? An irrelephant!",
    "Why did the music teacher go to jail? Because she got caught with too many sharp notes!",
    "How do you make a tissue dance? Put a little boogie in it!",
    "What do you call a belt made of watches? A waist of time!",
    "Why did the skeleton go to the party alone? Because he had no body to go with him!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "Why did the stadium get hot after the game? All of the fans left!",
    "What do you call a snowman with a six-pack? An abdominal snowman!"
];


let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');


function inc() {
    let n = document.getElementById('num');
    let v = Number(n.innerText);
    v = v + 1;
    n.innerText = v;
    if (v % 2 == 0)
        n.style.backgroundColor = 'green';
    else
        n.style.backgroundColor = 'blue';
}
function dec() {
    let n = document.getElementById('num');
    let v = n.innerText;
    v = v - 1;
    n.innerText = v;
    if (v % 2 == 0)
        n.style.backgroundColor = 'green';
    else
        n.style.backgroundColor = 'blue';
}
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
b1.addEventListener('click', () => {
    c1 = c1 + 1;
    if (c1 == 0)
        b1.style.backgroundColor = 'white';
    else if (c1 == 1)
        b1.style.backgroundColor = 'red';
    else if (c1 == 2)
        b1.style.backgroundColor = 'blue';
    else if (c1 == 3)
        b1.style.backgroundColor = 'green';
    else {
        c1 = 0;
        b1.style.backgroundColor = 'white';
    }
});
b2.addEventListener('click', () => {
    c2 = c2 + 1;
    if (c2 == 0)
        b2.style.borderRadius = '20%';
    else if (c2 == 1)
        b2.style.borderRadius = '25%';
    else if (c2 == 2)
        b2.style.borderRadius = '50%';
    else if (c2 == 3)
        b2.style.borderRadius = '100%';
    else {
        c2 = 0;
        b2.style.borderRadius = '0%';
    }
})
b3.addEventListener('mouseover', () => {
    c3 = c3 + 1;
    if (c3 == 0) {
        b3.style.borderRadius = '20%';
        b3.style.backgroundColor = 'white';
    }
    else if (c3 == 1) {
        b3.style.borderRadius = '20%';
        b3.style.backgroundColor = 'green';
    }
    else if (c3 == 2) {
        b3.style.borderRadius = '50%';
        b3.style.backgroundColor = 'violet';
    }
    else if (c3 == 3) {
        b3.style.borderRadius = '100%';
        b3.style.backgroundColor = 'red';
    }
    else {
        c3 = 0;
        b3.style.backgroundColor = 'white';
        b3.style.borderRadius = '0%';
    }
})
b4.addEventListener('click', () => {
    c4 = c4 + 1;
    if (c4 == 0)
        b4.innerText = "Hello There!!!";
    else if (c4 == 1)
        b4.innerText = "How Are You ?";
    else if (c4 == 2)
        b4.innerText = "This is Time Pass";
    else if (c4 == 3)
        b4.innerText = "Enjoy :->";
    else {
        c4 = 0;
        b4.innerText = "Click";
    }
})


function createTable() {
    let cnt = 1;
    let num = document.getElementById('number').value;
    let end = document.getElementById('endval').value;
    if (cnt == 1) {
        let table = document.getElementById('table');
        for (let i = 1; i <= end; i++) {
            let t = document.createElement('li');
            t.innerText = `${num} X ${i} = ${num * i}`;
            console.log(t);
            table.appendChild(t);
        }
        cnt = 0;
    }
    else if (cnt == 0) {
        let table = document.getElementById('table');
        table.innerHTML = '';
        for (let i = 1; i <= end; i++) {
            let t = document.createElement('li');
            t.innerText = `${num} X ${i} = ${num * i}`;
            console.log(t);
            table.appendChild(t);
        }
        cnt = 1;
    }

}
let num = Math.round(Math.random() * 10);
function again() {
    num = Math.round(Math.random() * 10);
    document.getElementById('again').style.visibility = 'hidden';
}
function check() {
    let g = document.getElementById("gu").value;
    console.log(num);
    if (num == g) {
        let r = document.getElementById('result');
        r.style.backgroundColor = 'green';
        r.innerText = "Yay You Choose correct Number, Click on Check to guess again."
        document.getElementById('again').style.visibility = 'visible';
    }
    else if (num<g) {
        let r = document.getElementById('result');
        r.style.backgroundColor = 'red';
        r.innerText = `Lower Number Please!!!`;
    }
    else if (num>g) {
        let r = document.getElementById('result');
        r.style.backgroundColor = 'red';
        r.innerText = `Higher Number Please!!!`;
    }
}
function gen()
{
    let m = Math.round(Math.random()*31);
    document.getElementById('joke').innerText=jokes[m];
}