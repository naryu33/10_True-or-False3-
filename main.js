const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let correctAnswer;

const questions = [
    {question: '聖徳太子は( ? )と十七条憲法を制作した。　　　1,冠位十二階　2,班田収授法　3,三世一身の法　4,墾田永年私財法', answer: 1},
    {question: '645年の( ? )で蘇我氏が滅亡した。　　　1,大火の改新　2,大過の改新　3,大化の改新　4,大廈の改新', answer: 3},
    {question: '( ? )天皇は公地公民を目指して様々な政策をした。　　　1,天新　2,天華　3,天武　4,天智', answer: 4},
    {question: '( ? )に勝利した大海人皇子は後に天武天皇になる。　　　1,壬申の乱　2,応仁の乱　3,承久の乱　4,白村江の戦い', answer: 1},
    {question: '701年に( ? )が唐から輸入された。　　　1,仏教　2,大宝律令　3,大豊律令　4,律令国家', answer: 2}
];

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}

function onAnswer(ans) {
    if (ans === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('不正解');
    }
    
    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);   
        onStart();
    } else {
        writeQuestion();
    }
}

Button1.onmousedown = function () {
    onAnswer(1)
}

Button2.onmousedown = function () {
    onAnswer(2)
}

Button3.onmousedown = function () {
    onAnswer(3)
}

Button4.onmousedown = function () {
    onAnswer(4)
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart();

