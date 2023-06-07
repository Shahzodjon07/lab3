const changeMe = () => {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    if (name === '' || surname === '') {
        alert('Заполни все поля!');
    }
    if (name !== '' && surname !== '') {
        document.getElementById('resume').textContent = name + ' ' + surname;
    }
}

const equalValues = () => {
    let val1 = document.getElementById('number1').value
    let val2 = document.getElementById('number2').value
    if (val1 == '' || val2 == '') {
        alert('Заполни все поля!')
    } else if (val1 === val2) {
        alert('Бро, числа равны 🙂')
    } else if (val1 !== val2) {
        alert('Бро, числа не равны 😕')
    }
}

const createPhrase = () => {
    let phrase = 'Твоя цитата: "' + document.getElementById('phrase').value +
    '" - ' + document.getElementById('actor').value
    if (document.getElementById('phrase').value !== '' && document.getElementById('actor').value !== '') {
        alert(phrase)
    } else {
        alert('Заполни все поля!')
    }
}

