const labels = document.querySelectorAll('.form__label');
const fields = document.querySelectorAll('.form__input');
const btn    = document.querySelector('.btn');

fields.forEach((field, i) => {
	field.addEventListener('focus', () => {
		btn.classList.remove('btn--disabled');
		
		fields.forEach((item, i) => {
			if (i !== 0) {
				item.classList.remove('form__input--disabled');
			}
			
			switch (i) {
				case 2:
					item.value = '09/29';
					break;
				case 3:
					item.value = '344';
					break;
			}
		});
	});
});

fields.forEach((field, i) => {
	
	field.addEventListener('blur', () => {
		btn.classList.add('btn--disabled');
		
		fields.forEach((item, i) => {
			if (i !== 0) {
				item.classList.add('form__input--disabled');
			}
			
			switch (i) {
				case 2:
					item.value = 'MM/YY';
					break;
				case 3:
					item.value = '***';
					break;
			}
		});
	});
});