// for (let i = 0; i < 100; i ++){
//     console.log(i)
// }

let scores = [
    {'name' : '철수', 'score' : 90},
    {'name' : '영희', 'score' : 85},
    {'name' : '민수', 'score' : 70},
    {'name' : '형준', 'score' : 50},
    {'name' : '기남', 'score' : 68},
    {'name' : '동희', 'score' : 30},
]

// for (let i = 0; i < scores.length; i ++){
//     console.log(scores[i])
// }

for (let i = 0; i < scores.length; i++){
    if (scores[i]['score'] < 70) {
        console.log(scores[i]['name']);
    }
}