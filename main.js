const SHOW_NUMBER = document.getElementById('show-number')
if (!SHOW_NUMBER) {
	console.log('Элемент не найден')
}
const BUTTONS = document.querySelectorAll('.button-calc')

BUTTONS.forEach(button => {
	button.addEventListener('click', event => {
		const targetButton = event.target.closest('.button-calc')
		if (!targetButton) return

		const VALUE = targetButton.textContent.trim()

		switch (VALUE) {
			case 'clr':
				SHOW_NUMBER.value = ''
				break
			case 'DEL':
				SHOW_NUMBER.value = SHOW_NUMBER.value.slice(0, -1)
				break
			case '=':
				try {
					SHOW_NUMBER.value = eval(SHOW_NUMBER.value)
				} catch (e) {
					SHOW_NUMBER.value = 'Ошибка'
				}
				return
			default:
				SHOW_NUMBER.value += VALUE
				break
		}
	})
})
