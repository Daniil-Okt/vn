/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();

/* Фиксированный header */
// BaseHelpers.headerFixed();

/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**  ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**  ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();

/* ТАБЫ ===================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив ===================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
import { useDynamicAdapt } from './modules/dynamicAdapt.js'
useDynamicAdapt()

/* Маска для инпута tel ===================================================================================
	* Добавить класс tel к нужному инпуту 
*/
import { maskTel } from './modules/index.js'
maskTel()

/* Cкрыть меню при клике на его ссылки ===================================================================================
*/
import { toggleLinkMenuNoOpen } from './modules/index.js'
toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ===================================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleLinkMenuNoOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента ========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
// const swiper = new Swiper('.swiper', {
//   speed: 800,
//   spaceBetween: 16,
//   slidesPerView: 1.4,
//   modules: [Autoplay, Navigation, Pagination],
//   loop: true,
//   initialSlide: 1,
//   autoplay: {
//     delay: 2500,
//     stopOnLastSlide: false,
//     disableOnIteration: false,
//   },
//   navigation: {
//     prevEl: ".reviews__button-slider-prev",
//     nextEl: ".reviews__button-slider-next"
//   },
//   pagination: {
//     el: ".card-slider__pagination",
//     dynamicBullets: true,
//     clickable: true,
//   },
//   breakpoints: {
//     1400: {
//       slidesPerView: 4,
//       spaceBetween: 24,
//   	},
//     1650: {
//         slidesPerView: 4,
//         spaceBetween: 48,
//     }
//   },
// });


/* Валидация формы =======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
// =======================================================================================================

/* Добавление класса _active родителю при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClassParent } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClassParent(elementAll)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)


//инпут приложить файл 
let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
	labelVal = label.querySelector('.input__file-text').innerText;

  input.addEventListener('change', function (e) {
	let countFiles = '';
	if (this.files && this.files.length >= 1)
	  countFiles = this.files.length;

	if (countFiles)
	  label.querySelector('.input__file-text').innerText = 'Приложено файлов: ' + countFiles;
	else
	  label.querySelector('.input__file-text').innerText = labelVal;
  });
});



const popupTranks = document.querySelector('.popup-tranks')
// const formNAME = document.getElementById('form-NAME')
// validForm(fromName, popupTranks)
function checkFormUnlock(form) {
	let resultCheck = false;
	const inputFormRecord = form.querySelectorAll('._req');
	const inputFormRecordWithOk = form.querySelectorAll('._req._ok');
	const recaptcha = form.querySelector('.g-recaptcha');
	
	if (inputFormRecordWithOk.length === inputFormRecord.length){
		if (recaptcha){
			// console.log(recaptcha);
			var intervalId = setInterval(function() {
				var response = grecaptcha.getResponse();
				// console.log(response)
				if (response.length == 0) {
					resultCheck = false;
					// console.log("Рекапча не заполнена");
				} else {
					resultCheck = true;
					// console.log("Рекапча заполнена");
					form.querySelector('button').addEventListener('click', () => {
						clearInterval(intervalId);
					})
				}
				if (resultCheck) {
					form.classList.add('unlock');
				} else {
					form.classList.remove('unlock');
				}
			}, 1000); 
		} else {
			resultCheck = true;
		}
	} else {
		resultCheck = false;
	}
	
	if (resultCheck) {
		form.classList.add('unlock');
	} else {
		form.classList.remove('unlock');
	}
}
function validForm(form) {
	const inputFormRecord = form.querySelectorAll('._req');
	inputFormRecord.forEach(input => {
		inputValid(input)
		//удаляем классы _error
		if (inputFormRecord.length > 0) {
			inputFormRecord.forEach(input => {
				input.parentElement.classList.remove('_error');
				input.classList.remove('_error');
			});
		}
		input.addEventListener('input', function() {
			formRemoveError(input);
			inputValid(input)
			checkFormUnlock(form); // Проверка на наличие класса unlock
		});
	});
	function inputValid(input) {
		if (input.classList.contains('_email')) {
			if(emailTest(input)) {
			formRemoveError(input);
			} else {
			formAddError(input);
			}
		} else if (input.getAttribute("type") === "checkbox") {
			if(input.checked) {
			formRemoveError(input);
			} else {
			formAddError(input);
			}
		} else if (input.classList.contains('password')) {
			if(input.value.length >= 8) {
				formRemoveError(input);
			} else {
				formAddError(input);
			}
		} else if (input.classList.contains('data')) {
			if(input.value.length >= 10) {
			formRemoveError(input);
			} else {
			formAddError(input);
			}
		} else if (input.classList.contains('tel')) {
			if(input.value.length >= 18) {
			formRemoveError(input);
			} else {
			formAddError(input);
			}
		} else if (input.classList.contains('withdrawal')) {
			if(input.value.length >= 3) {
				formRemoveError(input);
			} else {
				formAddError(input);
			}
		} else if (input.classList.contains('password-replay')) {
			if(input.value === form.querySelector('.password').value) {
			formRemoveError(input);
			} else {
			formAddError(input);
			}
		} else if (input.classList.contains('promo-code')) {
			if(input.value.length >= 4) {
			formRemoveError(input);
			} else {
			formAddError(input);
			}
		} else if (input.value.trim() === '') {
			formAddError(input);
		}

	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
		input.parentElement.classList.remove('_ok');
		input.classList.remove('_ok');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
		input.parentElement.classList.add('_ok');
		input.classList.add('_ok');
	}

	// function formAddOk(input) {
	//     input.parentElement.classList.add('_ok');
	//     input.classList.add('_ok');
	// }

	function emailTest(input) {
		return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(input.value.trim());
	}

	function telTest(input) {
		return /^[\d\+][\d\(\)\ -]{4,14}\d$/.test(input.value.trim());
	}
}
//отправка php
function sendForm(form, popupTranks) {
    const url = 'static/send.php';

    form.addEventListener('submit', formSend);

	async function formSend(e) { 
		e.preventDefault()
	
		let formData = new FormData(form)
	
		  //   отправка полученных данных с формы в файл php
			  fetch(url, {
				  method: 'POST',
				  body: formData
			  })
			  .then(response => {
				if (response.ok) {
				  // Обработка успешной отправки формы
				  console.log('Form was submitted successfully!');
				  popupTranks.classList.add('is-open')
				  form.reset()
				  // sendingYandexMetrika() 
				    if(form.closest('.popup')) {
						form.closest('.popup').classList.remove('is-open')
					}
				} else {
				  // Обработка ошибок отправки формы
				  console.log('An error occurred while submitting the form.');
				}
			  })
			  .catch(error => {
				console.log('An error occurred while submitting the form:', error);
			  });
			  
	}
}

const formAll = document.querySelectorAll('form')
if (formAll.length > 0) {
	formAll.forEach(form => {
		validForm(form)
		sendForm(form, popupTranks)
	});
}

