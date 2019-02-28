//Проверка домена
var checkDomenButton = document.querySelector(".check-domen-button");
console.log(checkDomenButton);
checkDomenButton.addEventListener('click', freeOrBusy);


function freeOrBusy() {

    var inputDomenCheck = document.querySelector(".input-domen-check");

    var enterDomenName = inputDomenCheck.querySelector(".enter-domen-input").value;

    inputDomenCheck.querySelector("#domen-name").innerHTML = enterDomenName;

    var domenStatus = getFreeOrBusy();

    inputDomenCheck.querySelector(".domen-status").innerHTML =  domenStatus;
    if(domenStatus==='свободен') {
        inputDomenCheck.querySelector(".link-register").innerHTML = "Зарегистрировать за 39 Р";
    }
    else {
    inputDomenCheck.querySelector(".link-register").innerHTML = '';
    }
    inputDomenCheck.querySelector('.domen-free-or-busy').classList.remove('hide');

    inputDomenCheck.querySelector('.domen-free-or-busy').classList.add('show');
}

function getFreeOrBusy() {
  var resultNam = Math.floor(Math.random() * 2) + 1;
  if(resultNam === 1){
      return "свободен";
  } else {
      return"занят";
  }
}

//Переключатели на странице

var circleItems = document.querySelectorAll('.circle-item');
console.log(circleItems);
document.querySelector('.circle-list').addEventListener('click', togglestyle);

function togglestyle() {

    if(event.target.className == 'circle-item') {
        for(let i = 0; i < circleItems.length; i++) {
            circleItems[i].classList.remove('circle-item-active');
        }
        event.target.classList.add('circle-item-active');
    }
}

//Пояснение

var featuresCards = document.querySelectorAll(".features-card-item");

document.querySelector('.features-block-wrap').addEventListener('click', showExplanation);

function showExplanation() {
        console.log('1');
        if(event.target.classList.contains('features-card-item')) {
            console.log('click');
            for (let j = 0; j < featuresCards.length; j++) {
                console.log('1');
                featuresCards[j].nextElementSibling.classList.remove('show');
                featuresCards[j].classList.remove('arrow-block-explanation-top');
                featuresCards[j].classList.remove('arrow-block-explanation-bottom');
            }
            if (event.target.classList.contains('top')) {
            event.target.classList.add('arrow-block-explanation-top');
        }
        else {
                event.target.classList.add('arrow-block-explanation-bottom');
            }
            event.target.nextElementSibling.classList.add('show');

    }
}
