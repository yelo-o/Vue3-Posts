import { ref } from 'vue';

const alerts = ref([]); //함수 호출 전에 모듈 scope에서 상태를 갖는다.
export function useAlert() {
	//alert
	// const alerts = ref([]);
	const vAlert = (message, type = 'error') => {
		alerts.value.push({ message, type });
		setTimeout(() => {
			alerts.value.shift();
		}, 2000);
	};
	const vSuccess = message => vAlert(message, 'success');
	return {
		alerts,
		vAlert,
		vSuccess,
	};
}
