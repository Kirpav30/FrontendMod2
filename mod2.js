const entities = [
    {
        text: 'Первый кот',
        img: 'cat1.jpg'
    },
    {
        text: 'Второй кот',
        img: 'cat2.jpg'
    }
]

const text = document.querySelector('.txt')
const img = document.querySelector('.image')

const setEntity = (index) => {
    text.innerText = entities[index].text
    img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prv')
const next = document.querySelector('.nxt')
let currentIndex = 0

prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
})
next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
})