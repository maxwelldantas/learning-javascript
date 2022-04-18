const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    console.log('Aparecendo um gato na tela')
    return data.webpurl;
};

const loadImg = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await getCats();
}

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
