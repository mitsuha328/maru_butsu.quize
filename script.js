const quizList = [
    {
        text: '過去に発売されたチロルチョコの種類は275種類である。',
        answer: 0,
        memo: '300種類を超えるらしい。'
    },
    {
        text: '全国のセブンイレブンの店舗数は16704店である。',
        answer: 0,
        memo: '2023年6月末現在、全国に21407店あるらしい。'
    },
    {
        text: 'カルビーのポテトチップスにはSUPERBIGというサイズがあるものがある。',
        answer: 1,
        memo: '472g入っているらしい。'
    },
    {
        text: 'サイゼリアの間違い探しは41種類ある。(2023年4月現在)',
        answer: 1,
        memo: '初めて登場したのは2006年。'
    },
    {
        text: '東京ディズニーシーにある、タワー・オブ・テラーの高さは63mである。',
        answer: 0,
        memo: '正しくは59mでこれより高くすると航空法に引っかかってしまうらしい。'
    },
    {
        text: '読売ランドのグッジョバ!!の『日清焼きそばU.F.O.』の味の組み合わせは5460通りである。',
        answer: 1,
        memo: '『日清焼きそばU.F.O.』を作るワークショップは読売ランドが日本初!!'
    },
    {
        text: 'ムーミンはカバである。',
        answer: 0,
        memo: '正しくはムーミン谷の妖精らしい。'
    },
    {
        text: 'ロッテリアのメニュー表にはスマイルがある。',
        answer: 0,
        memo: 'マクドナルドにはスマイルがあることがあるらしい。'
    },
    {
        text: '七夕の短冊に書くお願い事を叶えてくれるのは織姫様である。',
        answer: 0,
        memo: '短冊にお願い事を書くのは昔の人が字の練習をするためらしい。つまり誰も叶えてはくれない...'
    }
];


//今何問目か
let quizNumber = 0;
// 正解数
let score = 0;

//問題を表示する
function showQuiz() {
    document.getElementById("next").style.display = "none";
    document.getElementById("end").style.display = "none";
    const quiz = quizList[quizNumber];
    document.getElementById('quiz-text').innerText = quiz.text;
    document.getElementById('button-no').style.display = "block";
    document.getElementById('button-yes').style.display = "block";
}

//回答ボタンを押した時
function submit(input) {
    document.getElementById('button-no').style.display = "none";
    document.getElementById('button-yes').style.display = "none";
    //答え合わせ
    check(input);
    //解説を出す
    const quiz = quizList[quizNumber];
    //問題番号を1つ進める
    quizNumber += 1;
    document.getElementById("next").style.display = "block";
}

function next_quiz() {
    if (quizNumber < quizList.length) {
        document.getElementById('judgement').innerText = '';
        document.getElementById('comment').innerText = '';
        showQuiz();
    } else {
        finish();
    }
}


//正解ならば、得点を1加算する。
function check(input) {
    const quiz = quizList[quizNumber];
    let result = '残念...'
    if (input == quiz.answer) {
        score += 1;
        result = '正解!'
    }
    document.getElementById('quiz-text').innerText = ` ${result}：${quiz.memo}`;
}

function reload() {
    window.location.reload();
}

//結果発表
function finish() {
    document.getElementById("next").style.display = "none";
    const finish_text = `${quizList.length}問中、${score}問正解でした！`;
    document.getElementById('finish').innerText = finish_text
    document.getElementById("end").style.display = "block";
}


function reload() {
    window.location.reload();
}