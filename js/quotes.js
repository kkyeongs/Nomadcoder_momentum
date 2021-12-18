const quotes = [
    {
        quote: "경험은 가장 훌륭한 스승이다 다만 학비가 비쌀 따름이다.",
        author:"- T. 칼라일 -"
    },
    {
        quote: "경험 없는 기백은 위험하고, 기백 없는 경험은 불완전하다.",
        author: "- 체스필드 경 -"
    },
    {
        quote: "파선의 고통을 당해 본 사람은 비록 잔잔한 바람일지라도 바다 위의 항해를 두려워한다.",
        author: "- R. 헤리크 -"
    },
    {
        quote: "강을 거슬러 헤엄치는 자가 강물의 세기를 안다.",
        author: "- W.연설 -"
    },
    {
        quote: "늙은 소가 가장 곧은 고랑을 만든다.",
        author: "- J. 하우얼 -"
    },
    {
        quote: "믿기 전에 시험하라. 뛰기 전에 앞을 보라.",
        author: "- J. 트랩 -"
    },
    {
        quote: "작은 것을 크게 받아들이는 자에게 큰 것이 찾아든다.",
        author: "- M. A. 카시오도루스 -"
    },
    {
        quote: "잘못 디딘 한 발자국은 되돌릴 수 없다는 것을 명심히라. 그러므로 대담하게 나아가되 신중해져라.",
        author: "- T. 그레이 -"
    },
    {
        quote: "자신을 극복하는 힘을 가진 사람이 가장 강하다.",
        author: "- 세네카 -"
    },
    {
        quote: "쓰러지면 일어나고 좌절이 찾아오면 더 잘 싸우고 자고 나면 깨는 것이 우리다.",
        author: "- R. 브라우닝 -"
    },
    {
        quote: "경험도 없는 사람에게는 중요한 일을 맡기지 마라.",
        author: "- 그라시안 -"
    },
    {
        quote: "경험으로 사는 것은 값비싼 지혜이다.",
        author: "- 로저 아샴 -"
    },
    {
        quote: "경험은 실수를 거듭해야만 서서히 알게 된다.",
        author: "- J.A. 푸르드 -"
    },
    {
        quote: "경험은 지식의 어머니이다.",
        author: "- 브레튼 -"
    },
    {
        quote: "경험은 현명한 사람의 유일한 예언이다.",
        author: "- 라마르티느 -"
    },
    {
        quote: "경험을 교훈으로 삼을 때 우리는 그것이 경험된 내용에만 국한되도록 조심해야 한다. 아니면 뜨거운 난로 뚜껑에 앉아버린 고양이의 꼴이 되어 버린다. 고양이는 두 번 다시 뜨거운 난로 뚜껑에는 앉지 않을 뿐만 아니라 심지어 식은 뚜껑에조차도 앉지 않으려고 하기 때문이다. 경험의 내용에 국한하여 그것을 교훈으로 삼는 지혜가 필요하다.",
        author: "- 마크 트웨인 -"
    },
    {
        quote: "경험이라고 하는 하나의 가시는 무수한 경고와 맞먹는 가치가 있다.",
        author: "- 제임스 러셀 로웰 -"
    },
    {
        quote: "경험이란 것은 당신에게 일어나는 것이 아니라 당신에게 일어난 것을 어떻게 대처하느냐 하는 것이다.",
        author: "- 올더스 헉슬리 -"
    },
    {
        quote: "경험이 많을수록 말수가 적어지고 슬기를 깨칠수록 감정을 억제한다. 경험이 수반되지 않은 지식은 매우 천박할 뿐이다.",
        author: "- 클라렌스 데이 -"
    },
    {
        quote: "경험이 최상의 증명이다. 나는 나의 길을 인도해 주는 유일한 램프를 지니고 있다. 그것은 경험이란 램프다.",
        author: "- P. 헨리 -"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;