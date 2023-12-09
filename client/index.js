const changeState = () => {
    const btn = document.querySelector('btn');
    const h1 = document.querySelector('h1');

    btn.addEventListener('click', ( () => {
        if (btn.document.classList.contains('btn')) {
            btn.classList.add('exec');
        }
    }));
};
changeState();

/* <h1 class="header">LAUGH OUT LOUD !</h1>
   <div class="faces begin laugh">🥹</div>
   <div class="faces end">😂</div>


const eggCracked = document.querySelector('.start');
const babyChicken = document.querySelector('.end');

eggCracked.addEventListener('click', () => {
    if (babyChicken.classList.contains('end')) {
        babyChicken.classList.add('run');
        eggCracked.classList.remove('run');
    }
});

babyChicken.addEventListener('click', () => {
    if (eggCracked.classList.contains('start')) {
        eggCracked.classList.add('run');
        babyChicken.classList.remove('run');
    }
});*/