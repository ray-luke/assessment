'use strict';


const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

// assessmentButton.onclick= function() {
    assessmentButton.onclick=()=> {
        // console.log('ボタンが押されました');
        const userName=  userNameInput.value;
        if (userName.length===0) {
            return;
        }
        console.log(userName);
        
    //     //ToDo　診断結果表示エリアの作成
        resultDivided.innerText = '';
        tweetDivided.innerText = '';
        const header = document.createElement('h3');
        header.innerText= '診断結果';
        resultDivided.appendChild(header);
    
        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText= result;
        resultDivided.appendChild(paragraph);
    
    //ToDo　ツイートエリアの作成
        tweetDivided.innerText= '';
        const anchor= document.createElement('a');
        const hrefValue= 'https://twitter.com/intent/tweet?button_hashtag='+encodeURIComponent('あなたのいいところ')+'&ref_src=twsrc%5Etfw';

        anchor.setAttribute('href',hrefValue);
        anchor.setAttribute('class','twitter-hashtag-button');
        anchor.setAttribute('data-text',result);
        anchor.innerText= 'Tweet #あなたのいいところ';

        tweetDivided.appendChild(anchor);

        const script= document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
        tweetDivided.appendChild(script);

        userNameInput.onkeydown= event => {
            if(event.key === 'Enter'){
                assessmentButton.onclick();
            }
        };
    };

    
      // 診断結果表示エリアの作成
    // resultDivided.innerText = '';
    // const header = document.createElement('h3');
    // header.innerText = '診断結果';
    //  resultDivided.appendChild(header);

    //  const paragraph = document.createElement('p');
    //  const result = assessment(userName);
    //  paragraph.innerText = result;
    //  resultDivided.appendChild(paragraph);

    //   // TODO ツイートエリアの作成
    //<a href="https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="診断結果の文章" data-show-count="false">Tweet #あなたのいいところ</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    // };

    

const answers =[
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
    '{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];

// constは定数を入れる。後から上書きできない

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName 　ユーザーの名前
 * @returns {string} 診断結果
 */

// 名前の文字列を渡すと診断結果を返す関数
// @param {string} userName ユーザーの名前→変数はuserNameでstring（文字列）ですよ
// @return {string} 診断結果 戻り値は診断結果でstring（文字列）ですよ
// 「関数 assessment(userName) の引数が文字列で、戻り値も文字列」という意味。

function assessment(userName) {
    //ToDo 診断処理を実装する
    let sumOfCharCode = 0;
    for(let i=0; i<userName.length; i++) {
        sumOfCharCode= sumOfCharCode+ userName.charCodeAt(i);
        //sumOfに今のsumOfとuserNameの文字列のi個目の文字の文字コードを追加する
    }
    const index= sumOfCharCode%answers.length;
    let result =answers[index];
    result= result.replaceAll('{userName}',userName);
    return result;
}

// console.log(assessment('零司'));
// console.log(assessment('零司'));
// console.log(assessment('零司'));




// assessment.onclick= function()がassessment.onclick=()+> {}というアロー関数に書き換えられる。




console.assert(assessment('零司')==='零司のいいところはその全てです。ありのままの零司自身がいいところなのです。');
// console.assert(assessment('零司')==='零司のいいところはその全てです。ありのままの嶺二自身がいいところなのです。');


console.assert(assessment('AA')===assessment('AA'));

