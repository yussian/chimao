// script.js
// Firebase 初始化（放在 script.js 頂部）
const firebaseConfig = {
  apiKey: "AIzaSyAFGOI8wH0ISFeHBvmYbYfeyp8OB49cJAE",
  authDomain: "jpgame-c2054.firebaseapp.com",
  projectId: "jpgame-c2054",
  storageBucket: "jpgame-c2054.firebasestorage.app",
  messagingSenderId: "342434558843",
  appId: "1:342434558843:web:520678d1ddac1e720f83de"
};
const leaderboardElement = document.getElementById('leaderboard');

async function loadLeaderboard() {
    const leaderboardBox = document.getElementById('leaderboard');
    leaderboardBox.innerHTML = '<h2>排行榜</h2>';

    try {
        const snapshot = await db.collection('leaderboard')
            .orderBy('score', 'desc')
            .limit(10)
            .get();

        if (snapshot.empty) {
            leaderboardBox.innerHTML += '<p>目前沒有分數紀錄。</p>';
            return;
        }

        const list = document.createElement('ol');
        snapshot.forEach(doc => {
            const data = doc.data();
            const item = document.createElement('li');
            item.textContent = `${data.name}：${data.score} / ${data.total}`;
            list.appendChild(item);
        });

        leaderboardBox.appendChild(list);
    } catch (error) {
        console.error('請先完成測驗：', error);
        leaderboardBox.innerHTML += '<p style="color: red;">請先完成測驗。</p>';
    }
}

// 頁面初始載入排行榜
loadLeaderboard();


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    const songListElement = document.getElementById('songList');
    const audioPlayer = document.getElementById('audioPlayer');
    const lyricsElement = document.getElementById('lyrics');

    const songs = [
        {
            id: '1',
            title: '明透 Op.3 - ソラゴトオリジナル',
            artist: '明透',
            audioUrl: 'audio/明透 Op.3 - ソラゴトオリジナルMV.mp3',
            lyrics: `[00:06.51]そう言えばそうこの胸の穴 sō ieba sō kono mune no ana
[00:09.95]気にも留めないでいたよ ki ni mo tomenai de ita yo
[00:13.37]どんな具合に見えてるの？ donna guai ni mieteru no?
[00:16.63]今更だけどね ima sara dakedo ne
[00:20.58]約束じゃない想定内で辛い yakusoku janai sōteinai de tsurai
[00:23.58]続きはまた持ち越しだろうって tsudzuki wa mata mochikoshi darō tte
[00:27.30]何故失うから楽になる naze ushinau kara raku ni naru
[00:33.23]それでも少し sore demo sukoshi
[00:35.91]ムキになったって muki ni natta tte
[00:39.01]構わないんだ kamawanain da
[00:41.58]ずっと痺れてるから zutto shibireteru kara
[00:44.91]淡い光りに欺かれる awai hikari ni azamukareru
[00:48.38]風に抱かれ砂に溶け kaze ni dakare suna ni toke
[00:51.80]満たされるまでここに居よう mitasareru made koko ni iyou
[00:55.26]きっと同じ意識を知る kitto onaji ishiki o shiru
[00:58.59]奪ってみせて愛の歌を ubatte misete ai no uta o
[01:02.03]痛みに似た足りないもの itami ni nita tarinai mono
[01:05.53]波のように打ち寄せる nami no yō ni uchiyoseru
[01:11.64]底に留まる未晒しの想い soko ni todomaru misarashi no omoi
[01:15.21]邪魔にならないのもやるせない jama ni naranai no mo yarusenai
[01:18.33]醒めてしまう前に終わらせよう samete shimau mae ni owaraseyō
[01:21.78]収まりが良いのは頼もしい osamari ga yoi no wa tanomoshii
[01:25.25]そのあと sono ato
[01:26.43]愛しくなったって itoshiku natta tte
[01:30.07]構わないんだ kamawanain da
[01:32.91]ずっと痺れてるから zutto shibireteru kara
[01:36.25]淡い光りに欺かれる awai hikari ni azamukareru
[01:40.04]時が背中を追い越したら toki ga senaka o oikoshitara
[01:43.25]夢はここにおいてくよ yume wa koko ni oiteku yo
[01:46.85]きっと同じ意識を知る kitto onaji ishiki o shiru
[01:50.18]奪ってみせて哀の歌を ubatte misete ai no uta o
[01:53.70]救いに似た脆いもの sukui ni nita moroi mono
[01:57.15]触れる度に傷めてしまう fureru tabi ni itamete shimau
[02:01.41]記憶と繋がってる扉を叩いてみる kioku to tsunagatteru tobira o tataite miru
[02:08.85]あとどれくらい信じられる ato dorekurai shinjirareru
[02:15.24]この先を進む理由でもあるんだ kono saki o susumu riyū demo arun da
[02:21.27]ずっと続いてくなら zutto tsudzuiteku nara
[02:28.47]いっそこのままでいい isso kono mama de ii
[02:34.78]ずっと痺れてるから zutto shibireteru kara
[02:38.00]淡い光に欺かれる awai hikari ni azamukareru
[02:41.71]風に抱かれ砂に溶け kaze ni dakare suna ni toke
[02:45.38]満たされるまでここに居よう mitasareru made koko ni iyou
[02:48.64]きっと同じ意識を知る kitto onaji ishiki o shiru
[02:52.22]奪ってみせて愛の歌を ubatte misete ai no uta o
[02:55.71]痛みに似た足りないもの itami ni nita tarinai mono
[02:58.93]波のように打ち寄せる nami no yō ni uchiyoseru
[03:05.12]そう言えばそうこの胸の穴 sō ieba sō kono mune no ana
[03:08.51]気にも留めないでいたよki ni mo tomenai de ita yo
[03:11.90]新しい道になるんだatarashii michi ni narun da
[03:15.35]今はうまく言えないけどima wa umaku ienai kedo`,
    // 修改你的 songs 裡 quiz 範例
quiz: [
{
question: '「胸」的讀音是？',
choices: ['むね', 'こころ', 'はら', 'むちゅう'],
correct: 0
},
{
question: '「風」的讀音是？',
choices: ['あめ', 'つち', 'かぜ', 'はな'],
correct: 2
},
{
question: '「歌」的讀音是？',
choices: ['うた', 'おと', 'うみ', 'わたし'],
correct: 0
},
{
question: '「約束」的讀音是？',
choices: ['こうそく', 'やくそく', 'そくやく', 'やくどう'],
correct: 1
},
{
question: '「痛み」的讀音是？',
choices: ['いたみ', 'さけび', 'さわぎ', 'いたむ'],
correct: 0
},
{
question: '「夢」的讀音是？',
choices: ['ねがい', 'ゆめ', 'うた', 'いのり'],
correct: 1
},
{
question: '「光り」的讀音是？',
choices: ['ひかり', 'てらし', 'あかり', 'はしり'],
correct: 0
},
{
question: '「理由」的讀音是？',
choices: ['りゆう', 'けいき', 'わけ', 'げんいん'],
correct: 0
}
]
},
{
            id: '2',
            title: 'きみのヒーロー/あれくん',
            artist: 'あれくん',
            audioUrl: 'audio/きみのヒーローあれくんOfficial Music Video.mp3',
            lyrics: `[00:20.81]僕にとっての、とっておきのサプライズを君にBoku ni totte no, totteoki no sapuraizu o kimi ni
[00:25.04]例え99の悲しみが襲いかかろうともTatoe kyūjūkyū no kanashimi ga osoikakarou to mo

[00:30.07]君にとっての、困ったときのヒーローだからKimi ni totte no, komatta toki no hīrō dakara

[00:35.40]残りの1%で僕が救ってやるさNokori no ichi-pāsento de boku ga sukutte yaru sa

[00:39.94]これは損でも、そんでもってKore wa son demo, son de motte

[00:42.26]徳の話なんかでもなくってToku no hanashi nanka demo nakutte

[00:45.23]仮にとんでもない悪夢が君へ襲いかかろうともKarini tondemonai akumu ga kimi e osoikakarou to mo

[00:49.18]僕が、僕らを繋ぎ止める魔法をかけるさBoku ga, bokura o tsunagitomeru mahō o kakeru sa

[00:54.45]このラブソングでKono rabusongu de

[00:59.44]Baby 泣いたりしないでBaby naitari shinaide

[01:01.66]いつだってすぐに駆けつけてItsu datte sugu ni kaketsukete

[01:04.01]"愛してる"って言葉にして"Aishiteru" tte kotoba ni shite

[01:06.21]抱きしめるよ 悲しみも全部Dakishimeru yo kanashimi mo zenbu

[01:09.09]「私なんか」って言わないでよ "Watashi nanka" tte iwanaide yo

[01:12.05]言わせてごめんね "Iwasete gomen ne"

[01:14.15]これからは大丈夫だから "Kore kara wa daijōbu dakara"

[01:16.54]僕が守るから Boku ga mamoru kara

[01:21.25]幸せの日々だけ loading "Shiawase no hibi dake loading"

[01:23.43]後悔はさせない　もう二度と "Kōkai wa sasenai mō nidoto"

[01:26.20]何気ない日常が　カレンダーが彩られてく "Nanigenai nichijō ga karendā ga irodorareteku"

[01:30.68]ふたり 愛で満たされていく morning "Futari ai de mitasarete iku morning"

[01:33.12]言葉だっていらない関係に "Kotoba datte iranai kankei ni"

[01:35.81]お互いもう惹かれあってる "Otagai mō hikareatteru"

[01:40.12]君へ紡ぎ出していくmelody "Kimi e tsumugidashite iku melody"

[01:42.47]愛と愛で何度も塗り重ねていく "Ai to ai de nando mo nurikasanete iku"

[01:45.01]ここはそう 二人だけの世界 "Koko wa sō futari dake no sekai"

[01:47.49]誰にも 邪魔はさせやしない "Dare ni mo jama wa saseyashinai"

[01:49.92]「愛してる？」いや「愛してる」Aishiteru?" iya "aishiteru"

[01:52.04]言葉にしたいのはそれだけじゃなくってKotoba ni shitai no wa sore dake ja nakutte

[01:54.68]僕は今、世界で一番幸せ者だよ
Boku wa ima, sekai de ichiban shiawasemono da yo

[02:18.86]Baby 泣いたりしないでBaby naitari shinaide

[02:21.02]いつだってすぐに駆けつけてItsu datte sugu ni kaketsukete

[02:23.33]"愛してる"って言葉にしてAishiteru" tte kotoba ni shite

[02:25.47]抱きしめるよ 悲しみも全部 Dakishimeru yo kanashimi mo zenbu

[02:28.51]私なんかって言わないでよ Watashi nanka tte iwanaide yo

[02:31.60]言わせてごめんね Iwasete gomen ne

[02:33.35]これからは大丈夫だから Kore kara wa daijōbu dakara

[02:35.71]僕が守るから Boku ga mamoru kara

[02:37.88]Baby 描いた理想だって Baby kaita risō datte

[02:40.12]覆すような夢を見よう Kutsugaesu yō na yume o miyou

[02:42.60]残りの寿命を使って Nokori no jumyō o tsukatte

[02:44.64]書き留めるよ幸せの全部 Kakitomeru yo shiawase no zenbu

[02:47.76]僕の一生を捧げてでも Boku no isshō o sasagete demo

[02:49.95]君を愛すから Kimi o aisu kara

[02:52.32]離れないでね 離さないから。Hanarenaide ne hanasanai kara.

[02:57.36]この先、年をとってもKono saki, toshi o tottemo

[02:59.46]この先、何があってもKono saki, nani ga attemo

[03:01.96]僕らふたりで映して行きたいよBokura futari de utsushite ikitai yo

[03:04.31]僕ら二人一つ唯一無二最強Bokura futari hitotsu yuiitsu muni saikyō

[03:07.02]お互いに代わりなんていないからOtagai ni kawari nante inai kara

[03:09.29]木枯らし吹くも咲いていたいからKogarashi fuku mo saite itai kara

[03:14.29]永遠にEien ni

[03:16.21]僕にとっての、とっておきのサプライズを君にBoku ni totte no, totteoki no sapuraizu o kimi ni

[03:20.59]例え99の悲しみが襲いかかろうともTatoe kyūjūkyū no kanashimi ga osoikakarou to mo

[03:25.28]君にとっての、困ったときのヒーローだからKimi ni totte no, komatta toki no hīrō dakara

[03:30.33]残りの1%で僕が救ってやるさNokori no ichi-pāsento de boku ga sukutte yaru sa
`,
    // 修改你的 songs 裡 quiz 範例
quiz: [
   {
    question: '「駆けつけて」的意思是？',
    choices: ['踩著腳步走', '趕過去', '輕聲細語', '坐下來'],
    correct: 1
  },
  {
    question: '「抱きしめる」的意思是？',
    choices: ['傾聽', '擁抱', '解開', '安慰'],
    correct: 1
  },
  {
    question: '「守る」的意思是？',
    choices: ['搬運', '改變', '保護', '擋住'],
    correct: 2
  },
  {
    question: '「彩られてく」的意思是？',
    choices: ['記錄', '改變', '塗色／裝飾', '燃燒'],
    correct: 2
  },
  {
    question: '「惹かれあってる」的意思是？',
    choices: ['相互喜歡', '開始討厭', '有誤會', '被綁在一起'],
    correct: 0
  },
  {
    question: '「邪魔」的意思是？',
    choices: ['祝福', '阻礙／打擾', '勇氣', '討厭'],
    correct: 1
  },
  {
    question: '「寿命」的意思是？',
    choices: ['體力', '壽命', '存款', '記憶'],
    correct: 1
  },
  {
    question: '「離さない」的意思是？',
    choices: ['不讓走', '不思考', '不說話', '不讓看見'],
    correct: 0
  },
  {
    question: '「年をとっても」的意思是？',
    choices: ['就算長大後', '就算變老之後', '就算記不得後', '就算分開後'],
    correct: 1
  },
  {
    question: '「唯一無二」的意思是？',
    choices: ['完全不同', '無可替代', '非常平凡', '獨自一人'],
    correct: 1
  }
]
},

 {
            id: '3',
            title: '優里『ドライフラワー』',
            artist: '優里',
            audioUrl: 'audio/優里ドライフラワーOfficial Music Video -ディレクターズカットver.-.mp3',
            lyrics: `[00:15.06]多分、私じゃなくていいねTabun, watashi janakute ii ne

[00:18.15]余裕のない二人だったしYoyū no nai futari datta shi

[00:21.52]気付けば喧嘩ばっかりしてさ ごめんねKizukeba kenka bakkari shite sa, gomen ne

[00:27.20]ずっと話そうと思ってたZutto hanasou to omotteta

[00:30.37]きっと私たち合わないねKitto watashitachi awanai ne

[00:33.54]二人きりしかいない部屋でさFutarikiri shika inai heya de sa

[00:37.01]貴方ばかり話していたよねAnata bakari hanashite ita yo ne

[00:40.05]もしいつか何処かで会えたらMoshi itsuka dokoka de aetara

[00:46.17]今日の事を笑ってくれるかなKyō no koto o waratte kureru kana

[00:52.62]理由もちゃんと話せないけれどRiyū mo chanto hanasenai keredo

[00:59.17]貴方が眠った後に泣くのは嫌Anata ga nemutta ato ni naku no wa iya

[01:05.57]声も顔も不器用なとこもKoe mo kao mo bukiyō na toko mo

[01:12.04]全部全部 嫌いじゃないのZenbu zenbu kirai janai no

[01:18.64]ドライフラワーみたい 君との日々もDoraifurawā mitai kimi to no hibi mo

[01:24.96]きっときっときっときっと 色褪せるKitto kitto kitto kitto iro aseru

[01:49.14]多分、君じゃなくてよかったTabun, kimi janakute yokatta

[01:51.98]もう泣かされることもないしMō nakasareru koto mo nai shi

[01:55.37]「私ばかり」なんて言葉も なくなった"Watashi bakari" nante kotoba mo nakunatta

[02:01.24]あんなに悲しい別れでもAnna ni kanashii wakare demo

[02:04.27]時間が経てば忘れてくJikan ga tateba wasureteku

[02:07.72]新しい人と並ぶ君はAtarashii hito to narabu kimi wa

[02:10.91]ちゃんとうまくやれているのかなChanto umaku yarete iru no kana

[02:13.98]もう顔も見たくないからさMō kao mo mitakunai kara sa

[02:20.17]変に連絡してこないでほしいHen ni renraku shite konai de hoshii

[02:26.58]都合がいいのは変わってないんだねTsugō ga ii no wa kawattenai nda ne

[02:33.00]でも無視できずにまた少し返事Demo mushi dekizu ni mata sukoshi henji

[02:39.79]声も顔も不器用なとこもKoe mo kao mo bukiyō na toko mo

[02:46.49]多分今も 嫌いじゃないのTabun ima mo kirai janai no

[02:52.63]ドライフラワーみたく 時間が経てばDoraifurawā mitaku jikan ga tateba

[02:59.15]きっときっときっときっと色褪せるKitto kitto kitto kitto iro aseru

[03:20.09]月灯りに魔物が揺れるTsukiakari ni mamono ga yureru

[03:22.97]きっと私もどうかしてるKitto watashi mo dōka shiteru

[03:26.22]暗闇に色彩が浮かぶKurayami ni shikisai ga ukabu

[03:32.81]赤黄藍色が胸の奥Aka ki ai iro ga mune no oku

[03:35.92]ずっと貴方の名前を呼ぶZutto anata no namae o yobu

[03:39.44]好きという気持ち また香るSuki to iu kimochi mata kaoru

[03:45.12]声も顔も不器用なとこもKoe mo kao mo bukiyō na toko mo

[03:51.13]全部全部 大嫌いだよZenbu zenbu daikirai da yo

[03:57.65]まだ枯れない花を 君に添えてさMada karenai hana o kimi ni soete sa

[04:04.15]ずっとずっとずっとずっと 抱えてよZutto zutto zutto zutto kakaete yo

`,
    // 修改你的 songs 裡 quiz 範例

  
  quiz: [
    {
      question: "「余裕のない二人だったし」的「余裕」的日文讀音是？",
      choices: ["よゆう", "あき", "たらず", "こころ"],
      correct: 0
    },
    {
      question: "「余裕のない二人だったし」是什麼意思？",
      choices: ["我們兩個都很悠閒", "我們兩個都沒有時間", "我們兩個都很有錢", "我們兩個都很開朗"],
      correct: 1
    },
    {
      question: "在「余裕のない二人だったし」中，「余裕（よゆう）」的詞性是？",
      choices: ["名詞", "動詞", "形容詞", "副詞"],
      correct: 0
    },
    {
      question: "「余裕（よゆう）」的近義詞可能是？",
      choices: ["時間（じかん）", "空間（くうかん）", "我慢（がまん）", "安心（あんしん）"],
      correct: 0
    },
    {
      question: "「～だったし」表示什麼語氣？",
      choices: ["疑問", "推測", "並列或原因", "命令"],
      correct: 2
    },
    {
      question: "「喧嘩（けんか）」的中文意思是？",
      choices: ["約會", "聊天", "吵架", "道歉"],
      correct: 2,
      lyric: "気付けば喧嘩ばっかりしてさ"
    },
    {
      question: "「～ばっかり」表示什麼？",
      choices: ["偶爾做", "總是做", "幾乎不做", "很高興地做"],
      correct: 1,
      lyric: "気付けば喧嘩ばっかりしてさ"
    },
    {
      question: "「ずっと（ずっと）」的詞性是？",
      choices: ["名詞", "動詞", "形容詞", "副詞"],
      correct: 3,
      lyric: "ずっと話そうと思ってた"
    },
    {
      question: "「～ようと思ってた」表達的時態是？",
      choices: ["現在", "過去", "未來", "現在進行"],
      correct: 1,
      lyric: "ずっと話そうと思ってた"
    },
    {
      question: "「合わない（あわない）」的反義詞可能是？",
      choices: ["好き", "会う", "同じ", "別れる"],
      correct: 1,
      lyric: "きっと私たち合わないね"
    },
    {
      question: "「部屋（へや）」的英文翻譯最接近哪個？",
      choices: ["door", "window", "room", "chair"],
      correct: 2,
      lyric: "二人きりしかいない部屋でさ"
    },
    {
      question: "「二人きりしかいない部屋でさ」暗示了什麼樣的關係？",
      choices: ["剛認識的朋友", "很久不見的家人", "親密的兩個人", "吵架後的陌生人"],
      correct: 2,
      lyric: "二人きりしかいない部屋でさ"
    },
    {
      question: "「～ばかり」在這裡強調了什麼？",
      choices: ["話題很多", "說話很流暢", "只有對方在說", "兩個人都在說"],
      correct: 2,
      lyric: "貴方ばかり話していたよね"
    },
    {
      question: "「～たら」在這裡表達了什麼？",
      choices: ["必然的結果", "過去的事實", "假設的條件", "正在發生的事情"],
      correct: 2,
      lyric: "もしいつか何処かで会えたら"
    },
    {
      question: "「～てくれるかな」表達了說話者什麼樣的心情？",
      choices: ["肯定的期待", "強烈的自信", "不安或請求", "生氣或不滿"],
      correct: 2,
      lyric: "今日の事を笑ってくれるかな"
    },
    {
      question: "「ちゃんと（ちゃんと）」的反義詞可能是？",
      choices: ["きちんと", "ちゃんと", "いい加減", "全然"],
      correct: 2,
      lyric: "理由もちゃんと話せないけれど"
    },
    {
      question: "「嫌（いや）」在這裡表達了什麼？",
      choices: ["喜歡做的事情", "不想做的事情", "必須要做的事情", "偶爾做的事情"],
      correct: 1,
      lyric: "貴方が眠った後に泣くのは嫌"
    },
    {
      question: "「不器用（ぶきよう）」可以用哪個中文詞語來形容？",
      choices: ["聰明", "漂亮", "笨拙", "溫柔"],
      correct: 2,
      lyric: "声も顔も不器用なとこも"
    },
    {
      question: "「嫌いじゃない」等於以下哪個意思？",
      choices: ["喜歡", "討厭", "無所謂", "不知道"],
      correct: 0,
      lyric: "全部全部 嫌いじゃないの"
    },
    {
      question: "為什麼用「ドライフラワー（dried flower）」來比喻？",
      choices: ["因為很香", "因為顏色鮮豔", "因為失去了生氣", "因為很堅固"],
      correct: 2,
      lyric: "ドライフラワーみたい"
    },
    {
      question: "「色褪せる（いろあせる）」用來形容什麼？",
      choices: ["聲音", "味道", "記憶或感情", "觸感"],
      correct: 2,
      lyric: "君との日々もきっときっときっときっと 色褪せる"
    }
  ]
},

{
            id: '4',
            title: '好きだから。',
            artist: 'Yuika',
            audioUrl: 'audio/好きだから ユイカMV.mp3',
            lyrics: `[00:01.51] かっこいいから好きなんじゃないKakkoii kara suki nan janai
[00:04.12] 好きだからかっこいいんだよSuki dakara kakkoii n da yo
[00:07.15] 誰かにばかにされても何ともないDareka ni baka ni sarete mo nantomo nai
[00:10.30] だって私の「ヒーロー」Datte watashi no "hīrō"
[00:13.05] いつも「眠い」って言うくせにItsumo "nemui" tte iu kuse ni
[00:15.76] 授業は起きているとことかJugyō wa okite iru toko toka
[00:18.65] みんなの前ではクールなのにMinna no mae de wa kūru na noni
[00:21.38] 犬の前ではデレデレなとことかInu no mae de wa deredere na toko toka
[00:24.34] あぁ 本当に愛してやまない貴方のことĀ hontō ni aishite yamanai anata no koto
[00:29.76] 私だけの「ヒーロー」になってよWatashi dake no "hīrō" ni natte yo
[00:36.29] LINEだってしていたいしLINE datte shite itai shi
[00:39.02] 一緒に帰ったりしたいよIssho ni kaettari shitai yo
[00:42.04] 放課後部活に行く貴方にHōkago bukatsu ni iku anata ni
[00:45.89] 「またね」ってひとりごと"Matane" tte hitorigoto
[00:48.02] 休みの日だって会いたいしYasumi no hi datte aitai shi
[00:50.69] 寝落ち電話もしてみたいけどNeochi denwa mo shite mitai kedo
[00:53.78] そんな勇気はちっともなくてSonna yūki wa chittomo nakute
[00:56.60] あきれるなぁAkireru nā
[00:59.67] 振り向いてほしくてFurimuite hoshikute
[01:02.36] 意識してほしくてIshiki shite hoshikute
[01:06.13] 香水をつけてKōsui o tsukete
[01:08.88] 1人でむせてHitori de musete
[01:11.23] 貴方が欲しくてAnata ga hoshikute
[01:14.23] 貴方のものになりたくてAnata no mono ni naritakute
[01:19.20] 「明日こそは」って"Ashita koso wa" tte
[01:20.52] ベッドの上でシミュレーションBeddo no ue de shimyurēshon
[01:23.44] 貴方を考えながらAnata o kangae nagara
[01:25.70] また明日Mata ashita


[01:40.26] かわいいから好きなんじゃないKawaii kara suki nan janai
[01:43.18] 好きだからかわいいんだよSuki dakara kawaii n da yo
[01:46.05] 誰かにばかにされても何ともないDareka ni baka ni sarete mo nantomo nai
[01:49.12] だって僕の「ヒロイン」Datte boku no "hiroin"
[01:51.97] 「今日こそ起きる!」って言うくせに"Kyō koso okiru!" tte iu kuse ni
[01:54.67] 結局授業で寝るとことかKekkyoku jugyō de neru toko toka
[01:57.50] みんなの前ではおてんばなのにMinna no mae de wa otenba na noni
[02:00.52] 案外涙もろいとことかAngai namidamoroi toko toka
[02:03.27] あぁ 本当に愛してやまない君のことĀ hontō ni aishite yamanai kimi no koto
[02:08.56] 僕だけの「ヒロイン」にならないかなBoku dake no "hiroin" ni naranai kana
[02:14.91] 勉強とか教えてあげたいしBenkyō toka oshiete agetai shi
[02:18.41] 一緒に映画とか観に行きたいよIssho ni eiga toka mi ni ikitai yo
[02:21.11] 放課後友達と笑う君にHōkago tomodachi to warau kimi ni
[02:24.17] 「ばいばい」ってひとりごと"Baibai" tte hitorigoto
[02:26.79] 君のストーリーに載りたいしKimi no sutorī ni noritai shi
[02:29.67] 「俺の彼女」自慢もしてみたいけど"Ore no kanojo" jiman mo shite mitai kedo
[02:32.69] 告白なんかできそうになくてKokuhaku nanka dekisō ni nakute
[02:35.71] あきれるなぁAkireru nā
[02:38.44] 振り向いてほしくてFurimuite hoshikute
[02:41.40] 意識してほしくてIshiki shite hoshikute
[02:45.03] ワックスをつけてWakkusu o tsukete
[02:47.72] ベトベトになっちゃってBetobeto ni nacchatte
[02:50.08] 君が欲しくてKimi ga hoshikute
[02:53.03] 君のものになりたくてKimi no mono ni naritakute
[02:56.67] 「明日こそは」って"Ashita koso wa" tte
[02:59.15] 布団の中でシミュレーションFuton no naka de shimyurēshon
[03:02.34] 君を考えながらKimi o kangae nagara
[03:04.65] また明日Mata ashita



[03:28.00] 貴方に貴方の相談をしたんだAnata ni anata no sōdan o shitan da
[03:33.97] 君が男の相談をしてきたんだKimi ga otoko no sōdan o shite kita nda
[03:39.57] 「やめとけ」なんて言わないでよ"Yametoke" nante iwanaide yo
[03:44.50] 他の男になんて行くなよHoka no otoko ni nante iku na yo
[03:48.51] ずっとずっと見ていてよZutto zutto mite ite yo
[03:52.65] 振り向いてほしくてFurimuite hoshikute
[03:55.59] 意識してほしくてIshiki shite hoshikute
[03:59.28] ずっと隣にいてくれませんかZutto tonari ni ite kuremasen ka
[04:04.37] 貴方が好きなのAnata ga suki na no
[04:09.19] 君を愛おしく思うよKimi o itoshiku omou yo
[04:16.68] 「明日こそは」って"Ashita koso wa" tte
[04:19.93] 今日もシミュレーションKyō mo shimyurēshon
[04:22.51] 君との恋はKimi to no koi wa
[04:24.80] 甘いムスクの香りがしたんだAmai musuku no kaori ga shitan da


`,
    // 修改你的 songs 裡 quiz 範例

  
  quiz: [
  {
    question: "「多分、私じゃなくていいね」的「多分」是什麼意思？",
    choices: ["絕對", "可能", "永遠", "馬上"],
    correct: 1,
    lyric: "多分、私じゃなくていいね"
  },
  {
    question: "「気付けば喧嘩ばっかりしてさ」中「喧嘩ばっかり」表示什麼？",
    choices: ["偶爾吵架", "總是在吵架", "不再吵架", "吵一次而已"],
    correct: 1,
    lyric: "気付けば喧嘩ばっかりしてさ"
  },
  {
    question: "「合わない」的意思是什麼？",
    choices: ["合得來", "見不到", "不合適", "喜歡上"],
    correct: 2,
    lyric: "きっと私たち合わないね"
  },
  {
    question: "「今日の事を笑ってくれるかな」中的「笑ってくれる」表示？",
    choices: ["嘲笑我", "一起笑", "溫柔地笑", "能夠笑著原諒"],
    correct: 3,
    lyric: "今日の事を笑ってくれるかな"
  },
  {
    question: "「全部全部 嫌いじゃないの」表示什麼？",
    choices: ["完全討厭", "一點也不喜歡", "其實還是喜歡", "無感"],
    correct: 2,
    lyric: "全部全部 嫌いじゃないの"
  },
  {
    question: "「色褪せる」最適合形容哪種狀態？",
    choices: ["變得生動", "變得模糊", "失去原色", "變得甜美"],
    correct: 2,
    lyric: "きっときっときっときっと 色褪せる"
  },
  {
    question: "「私ばかり」中「ばかり」表示？",
    choices: ["所有人一起", "只是我", "差不多", "偶爾"],
    correct: 1,
    lyric: "「私ばかり」なんて言葉も なくなった"
  },
  {
    question: "「都合がいい」通常用來形容什麼樣的人？",
    choices: ["總是配合別人", "有時間的人", "自私只考慮自己方便的人", "健談的人"],
    correct: 2,
    lyric: "都合がいいのは変わってないんだね"
  },
  {
    question: "「魔物（まもの）」在「月灯りに魔物が揺れる」裡象徵什麼？",
    choices: ["真正的怪物", "害怕的心情", "燈光下的小動物", "陰影"],
    correct: 1,
    lyric: "月灯りに魔物が揺れる"
  },
  {
    question: "「色彩（しきさい）が浮かぶ」這句話主要表達什麼？",
    choices: ["視覺上的強烈色彩", "模糊的視線", "情感記憶浮現", "繽紛的畫面"],
    correct: 2,
    lyric: "暗闇に色彩が浮かぶ"
  },
  {
    question: "最後一句「まだ枯れない花を 君に添えてさ」想表達什麼情感？",
    choices: ["新的戀情", "無法放下", "幸福的祝福", "結束關係的決心"],
    correct: 1,
    lyric: "まだ枯れない花を 君に添えてさ"
  }
]
},

{
            id: '5',
            title: '群青',
            artist: 'Yoasobi',
            audioUrl: 'audio/YOASOBI群青Official Music Video.mp3',
            lyrics: `[00:03.86] 嗚呼 いつもの様にAa itsumo no you ni
[00:05.88] 過ぎる日々にあくびが出るSugiru hibi ni akubi ga deru
[00:09.54] さんざめく夜越え 今日もSanzameku yoru koe kyou mo
[00:13.44] 渋谷の街に朝が降るShibuya no machi ni asa ga furu

[00:17.15] どこか虚しいようなDokoka munashii you na
[00:19.98] そんな気持ちSonna kimochi
[00:21.93] つまらないなTsumaranai na
[00:23.77] でもそれでいいDemo sore de ii
[00:25.40] そんなもんさSonna mon sa
[00:27.22] これでいいKore de ii

[00:28.28] 知らず知らず 隠してたShirazu shirazu kakushiteta
[00:30.92] 本当の声を響かせてよ ほらHontou no koe o hibikasete yo hora
[00:35.27] 見ないフリしていてもMinai furi shite ite mo
[00:37.99] 確かにそこにあるTashika ni soko ni aru

[00:41.60] 嗚呼 感じたままに描くAa kanjita mama ni egaku
[00:45.29] 自分で選んだその色でJibun de eranda sono iro de
[00:48.90] 眠い空気纏う朝にNemui kuuki matou asa ni
[00:52.43] 訪れた青い世界Otozureta aoi sekai

[00:56.08] 好きなものを好きだと言うSuki na mono o suki da to iu
[00:59.52] 怖くて仕方ないけどKowakute shikata nai kedo
[01:02.72] 本当の自分Hontou no jibun
[01:05.14] 出会えた気がしたんだDeaeta ki ga shitan da

[01:18.04] 嗚呼 手を伸ばせば伸ばすほどにAa te o nobaseba nobasu hodo ni
[01:22.39] 遠くへゆくTooku e yuku
[01:24.19] 思うようにいかない今日もOmou you ni ikanai kyou mo
Omou you ni ikanai kyou mo
[01:28.08] また慌ただしくもがいてるMata awatadashiku mogaite ru

[01:31.68] 悔しい気持ちも ただ情けなくてKuyashii kimochi mo tada nasakenakute
[01:36.33] 涙が出るNamida ga deru
[01:38.23] 踏み込むほど 苦しくなるFumikomu hodo kurushiku naru
[01:41.71] 痛くもなるItaku mo naru

[01:45.64] 嗚呼 感じたままに進むAa kanjita mama ni susumu
[01:49.34] 自分で選んだこの道をJibun de eranda kono michi o
[01:52.85] 重いまぶた擦る夜にOmoi mabuta kosuru yoru ni
[01:56.48] しがみついた青い誓いShigamitsuita aoi chikai

[02:00.16] 好きなことを続けることSuki na koto o tsuzukeru koto
[02:03.62] それは楽しいだけじゃないSore wa tanoshii dake janai
[02:06.83] 本当にできるHontou ni dekiru
[02:08.99] 不安になるけどFuan ni naru kedo


[02:12.34] 嗚呼 何枚でも ほら何枚でもAa nan-mai demo hora nan-mai demo
[02:14.52] 自信がないから描いてきたんだよJishin ga nai kara kaite kitanda yo
[02:18.07] 嗚呼 何回でも ほら何回でもAa nankai demo hora nankai demo
[02:21.66] 積み上げてきたことが武器になるTsumiagete kita koto ga buki ni naru

[02:25.17] 周りを見たって 誰と比べたってMawari o mitatte dare to kurabeta tte
[02:28.69] 僕にしかできないことはなんだBoku ni shika dekinai koto wa nanda
[02:32.40] 今でも自信なんかない それでもIma demo jishin nanka nai soredemo

[02:38.03] 感じたことない気持ちKanjita koto nai kimochi
[02:41.00] 知らずにいた想いShirazu ni ita omoi
[02:44.05] あの日踏み出してAno hi fumidashite
[02:47.65] 初めて感じたこの痛みも全部Hajimete kanjita kono itami mo zenbu

[02:51.64] 好きなものと向き合うことでSuki na mono to mukiau koto de
[02:55.18] 触れた まだ小さな光Fureta mada chiisana hikari
[02:58.27] 大丈夫 行こう あとは楽しむだけだDaijoubu ikou ato wa tanoshimu dake da

[03:05.55] 嗚呼 全てを賭けて描くAa subete o kakete egaku
[03:09.39] 自分にしか出せない色でJibun ni shika dasenai iro de
[03:12.98] 朝も夜も走り続けAsa mo yoru mo hashiri tsudzuke
[03:16.61] 見つけ出した青い光Mitsukedashita aoi hikari

[03:20.06] 好きなものと向き合うことSuki na mono to mukiau koto
[03:23.40] 今だって怖いことだけどIma datte kowai koto dakedo
[03:26.77] もう今はあの日の透明な僕じゃないMou ima wa ano hi no toumei na boku janai

[03:33.80] 嗚呼 ありのままのAa ari no mama no
[03:36.05] かけがえの無い僕だKakegae no nai boku da

[03:38.71] 知らず知らず隠してたShirazu shirazu kakushiteta
[03:41.20] 本当の声を響かせてよ ほらHontou no koe o hibikasete yo hora
[03:45.62] 見ないフリしていてもMinai furi shite ite mo
[03:48.28] 確かにそこに 今もそこにあるよTashika ni soko ni ima mo soko ni aru yo
Tashika ni soko ni ima mo soko ni aru yo

[03:52.89] 知らず知らず隠してたShirazu shirazu kakushiteta
[03:55.30] 本当の声を響かせてよ さあHontou no koe o hibikasete yo saa
[03:59.74] 見ないフリしていてもMinai furi shite ite mo
[04:02.50] 確かにそこに 君の中にTashika ni soko ni kimi no naka ni
`,
    // 修改你的 songs 裡 quiz 範例

  
 quiz: [
  {
    question: "「嗚呼いつもの様に」的「嗚呼」在這裡表達什麼情緒？",
    choices: ["喜悅", "驚訝", "感嘆、嘆息", "懷疑"],
    correct: 2
  },
  {
    question: "「さんざめく夜越え今日も」中，「さんざめく」的意思是？",
    choices: ["沉靜", "熱鬧喧囂", "寒冷", "明亮耀眼"],
    correct: 1,
    lyric: "さんざめく夜越え今日も"
  },
  {
    question: "「渋谷の街に朝が降る」是什麼意思？",
    choices: ["早晨在渋谷下雨", "渋谷被陽光照耀", "早晨來臨渋谷街頭", "渋谷進入夜晚"],
    correct: 2,
    lyric: "渋谷の街に朝が降る"
  },
  {
    question: "「知らず知らず隠してた」的「隠してた」是什麼意思？",
    choices: ["找到了", "展示出來", "藏起來", "忘記了"],
    correct: 2,
    lyric: "知らず知らず隠してた"
  },
  {
    question: "「響かせてよ」中的「響かせる」是什麼意思？",
    choices: ["響起，使…回響", "停止", "細語", "關閉聲音"],
    correct: 0,
    lyric: "本当の声を響かせてよ"
  },
  {
    question: "「自分で選んだその色で」中的「選んだ」是什麼詞性？",
    choices: ["形容詞", "動詞", "副詞", "助詞"],
    correct: 1,
    lyric: "自分で選んだその色で"
  },
  {
    question: "「好きなものを好きだと言う」這句話傳達什麼意思？",
    choices: ["對自己誠實", "討厭自己", "羨慕別人", "輕視喜歡的東西"],
    correct: 0,
    lyric: "好きなものを好きだと言う"
  },
  {
    question: "「遠くへゆく」表示什麼？",
    choices: ["接近", "移動到遠方", "停留原地", "倒退"],
    correct: 1,
    lyric: "手を伸ばせば伸ばすほどに 遠くへゆく"
  },
  {
    question: "「涙が出る」的意思是？",
    choices: ["笑出來", "流淚", "沉默", "說話"],
    correct: 1,
    lyric: "悔しい気持ちも ただ情けなくて 涙が出る"
  },
  {
    question: "「不安になるけど」中的「不安」是什麼意思？",
    choices: ["安心", "擔心、不安", "興奮", "平靜"],
    correct: 1,
    lyric: "不安になるけど"
  },
  {
    question: "「積み上げてきたことが武器になる」表達了什麼？",
    choices: ["經驗會成為力量", "必須重新開始", "努力是沒意義的", "放棄比較容易"],
    correct: 0,
    lyric: "積み上げてきたことが武器になる"
  },
  {
    question: "「触れたまだ小さな光」是指什麼？",
    choices: ["未完成的作品", "剛萌芽的希望", "燈泡", "太陽"],
    correct: 1,
    lyric: "触れたまだ小さな光"
  },
  {
    question: "「青い光」在這首歌中象徵什麼？",
    choices: ["寒冷", "青春與希望", "憂鬱", "孤獨"],
    correct: 1,
    lyric: "見つけ出した青い光"
  },
  {
    question: "「もう今はあの日の透明な僕じゃない」這句話的意思是？",
    choices: ["我變得更弱了", "我已經不再是以前那個透明的自己", "我回到過去了", "我變得透明了"],
    correct: 1,
    lyric: "もう今はあの日の透明な僕じゃない"
  },
  {
    question: "「ありのままのかけがえの無い僕だ」中的「かけがえの無い」是什麼意思？",
    choices: ["無法代替的", "隨便的", "可以替代的", "無用的"],
    correct: 0,
    lyric: "ありのままの かけがえの無い僕だ"
  }
]

},

  

    ];

    

    let currentSongData = null;
    let lyricsData = [];
    let lyricsSpans = [];
    let currentLyricIndex = -1;

    function parseLyrics(lyricsText) {
        const lines = lyricsText.split('\n').filter(line => line.trim() !== '');
        return lines.map(line => {
            const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/);
            if (match) {
                const minutes = parseInt(match[1]);
                const seconds = parseInt(match[2]);
                const milliseconds = parseInt(match[3].padEnd(3, '0'));
                const time = minutes * 60 + seconds + milliseconds / 1000;
                const text = match[4].trim();
                return { time, text };
            }
            return null;
        }).filter(item => item !== null);
    }

    function renderSongList() {
        songListElement.innerHTML = '';
        songs.forEach(song => {
            const listItem = document.createElement('li');
            listItem.textContent = `${song.title} - ${song.artist}`;

            const playBtn = document.createElement('button');
            playBtn.textContent = '▶️ 播放';
            playBtn.onclick = () => loadAndPlaySong(song);

            const quizBtn = document.createElement('button');
            quizBtn.textContent = '📝 測驗';
            quizBtn.onclick = () => showQuizForSong(song);

            listItem.appendChild(document.createElement('br'));
            listItem.appendChild(playBtn);
            listItem.appendChild(quizBtn);

            songListElement.appendChild(listItem);
        });
    }

    function loadAndPlaySong(song) {
        currentSongData = song;
        audioPlayer.src = song.audioUrl;
        lyricsData = parseLyrics(song.lyrics);
        renderLyrics();
        audioPlayer.play();
    }

    function renderLyrics() {
        lyricsElement.innerHTML = '';
        lyricsSpans = lyricsData.map(item => {
            const span = document.createElement('span');
            span.textContent = item.text;
            span.addEventListener('click', () => {
                audioPlayer.currentTime = item.time;
            });
            lyricsElement.appendChild(span);
            return span;
        });
    }

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    audioPlayer.addEventListener('timeupdate', () => {
        if (currentSongData && lyricsData.length > 0) {
            const currentTime = audioPlayer.currentTime;
            let newLyricIndex = -1;
            for (let i = 0; i < lyricsData.length; i++) {
                if (currentTime >= lyricsData[i].time) {
                    newLyricIndex = i;
                } else {
                    break;
                }
            }
            if (newLyricIndex !== currentLyricIndex) {
                if (currentLyricIndex !== -1) {
                    lyricsSpans[currentLyricIndex].classList.remove('highlight');
                }
                if (newLyricIndex !== -1) {
                    lyricsSpans[newLyricIndex].classList.add('highlight');
                    lyricsSpans[newLyricIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                currentLyricIndex = newLyricIndex;
            }
        }
        const duration = audioPlayer.duration || 0;
        document.title = `🎵 ${formatTime(audioPlayer.currentTime)} / ${formatTime(duration)}`;
    });

    audioPlayer.addEventListener('ended', () => {
        const currentIndex = songs.findIndex(s => s.id === currentSongData.id);
        const nextIndex = (currentIndex + 1) % songs.length;
        loadAndPlaySong(songs[nextIndex]);
    });

    renderSongList();

    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'quiz-box';
    modal.style.display = 'none';
    document.body.appendChild(modal);

function showQuizForSong(song) {
    const questions = song.quiz;
    let current = 0;
    let score = 0;

    modal.innerHTML = '';
    modal.style.display = 'flex';

    const box = document.createElement('div');
    box.className = 'quiz-content';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '關閉';
    closeBtn.style.backgroundColor = '#ff5c5c';
    closeBtn.style.marginBottom = '20px';
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        modal.innerHTML = '';
    };

    function renderQuestion() {
        box.innerHTML = '';
        box.appendChild(closeBtn);

        if (current >= questions.length) {
            const result = document.createElement('p');
            result.style.fontSize = '1.2em';
            result.style.marginBottom = '10px';
            result.textContent = `答題結束！你的分數是 ${score} / ${questions.length}`;
            box.appendChild(result);

            const nameLabel = document.createElement('label');
            nameLabel.textContent = '請輸入你的暱稱：';
            box.appendChild(nameLabel);

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.placeholder = '暱稱';
            nameInput.style.margin = '10px';
            box.appendChild(nameInput);

            const submitBtn = document.createElement('button');
            submitBtn.textContent = '送出成績';
            submitBtn.className = 'submit-score-btn';
            submitBtn.onclick = async () => {
                const name = nameInput.value.trim() || '匿名';
                try {
                    await db.collection('leaderboard').add({
                        name: name,
                        score: score,
                        total: questions.length,
                        timestamp: new Date()
                    });
                    modal.innerHTML = '<p style="font-size: 1.2em;">成績已送出！</p>';
                    setTimeout(() => {
                        modal.style.display = 'none';
                        modal.innerHTML = '';
                        loadLeaderboard(); // 更新排行榜
                    }, 2000);
                } catch (error) {
                    console.error('送出分數失敗：', error);
                    alert('成績送出失敗，請稍後再試。');
                }
            };
            box.appendChild(submitBtn);

            return;
        }

        const q = questions[current];
        const questionText = document.createElement('p');
        questionText.textContent = q.question;
        questionText.style.fontSize = '1.1em';
        questionText.style.marginBottom = '16px';
        box.appendChild(questionText);

        const timerDisplay = document.createElement('p');
        timerDisplay.style.fontWeight = 'bold';
        timerDisplay.style.fontSize = '1.1em';
        timerDisplay.style.color = '#d9534f';
        box.appendChild(timerDisplay);

        const options = q.choices;
        let answered = false;
        const answerFeedback = document.createElement('p');
        answerFeedback.style.marginTop = '10px';
        box.appendChild(answerFeedback);

        function finishAnswer(selectedIndex) {
            if (answered) return;
            answered = true;
            clearInterval(timerInterval);

            const isCorrect = selectedIndex === q.correct;
            if (isCorrect) {
                score++;
                answerFeedback.textContent = '答對了！';
                answerFeedback.style.color = 'green';
            } else {
                answerFeedback.textContent = `答錯了，正確答案是：${q.choices[q.correct]}`;
                answerFeedback.style.color = 'red';
            }

            const optionButtons = box.querySelectorAll('button:not(:first-child):not(:last-child)');
            optionButtons.forEach((btn, index) => {
                btn.disabled = true;
                if (index === q.correct) {
                    btn.style.backgroundColor = '#90EE90';
                } else if (index === selectedIndex && !isCorrect) {
                    btn.style.backgroundColor = '#FF6347';
                }
            });

            setTimeout(() => {
                current++;
                renderQuestion();
            }, 1500);
        }

        options.forEach((option, index) => {
            
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.style.display = 'block';
            btn.style.width = '100%';
            btn.style.margin = '8px 0';
            btn.style.padding = '12px 0';
            btn.style.borderRadius = '8px';
            btn.style.fontSize = '1em';
            btn.style.backgroundColor = '#f8b5c1';
            btn.style.color = '#1e1e1e';
            btn.style.border = 'none';
            btn.style.cursor = 'pointer';
            btn.onmouseenter = () => btn.style.backgroundColor = '#ffc0cb';
            btn.onmouseleave = () => btn.style.backgroundColor = '#f8b5c1';
            btn.onclick = () => finishAnswer(index);
            box.appendChild(btn);
        });

        const skipBtn = document.createElement('button');
        skipBtn.textContent = '跳過';
        skipBtn.style.display = 'block';
        skipBtn.style.width = '100%';
        skipBtn.style.margin = '8px 0';
        skipBtn.style.padding = '12px 0';
        skipBtn.style.borderRadius = '8px';
        skipBtn.style.fontSize = '1em';
        skipBtn.style.backgroundColor = '#888';
        skipBtn.style.color = '#fff';
        skipBtn.style.border = 'none';
        skipBtn.style.cursor = 'pointer';
        skipBtn.onclick = () => {
            if (answered) return;
            answered = true;
            clearInterval(timerInterval);
            answerFeedback.textContent = `已跳過，正確答案是：${q.choices[q.correct]}`;
            answerFeedback.style.color = 'orange';
            const optionButtons = box.querySelectorAll('button:not(:first-child):not(:last-child)');
            optionButtons.forEach((btn, index) => {
                btn.disabled = true;
                if (index === q.correct) {
                    btn.style.backgroundColor = '#90EE90';
                }
            });
            setTimeout(() => {
                current++;
                renderQuestion();
            }, 1500);
        };
        box.appendChild(skipBtn);

        let timeLeft = 30;
        timerDisplay.textContent = `剩餘時間：${timeLeft} 秒`;

        const timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `剩餘時間：${timeLeft} 秒`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                if (!answered) {
                    answered = true;
                    answerFeedback.textContent = `時間到！正確答案是：${q.choices[q.correct]}`;
                    answerFeedback.style.color = 'red';
                    const optionButtons = box.querySelectorAll('button:not(:first-child):not(:last-child)');
                    optionButtons.forEach((btn, index) => {
                        btn.disabled = true;
                        if (index === q.correct) {
                            btn.style.backgroundColor = '#90EE90';
                        }
                    });
                    setTimeout(() => {
                        current++;
                        renderQuestion();
                    }, 1500);
                }
            }
        }, 1000);
    }

    renderQuestion();
    modal.appendChild(box);
}
});

