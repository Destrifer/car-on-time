import { SMTPClient } from 'emailjs';

export async function post({ request }) {
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	// Настройка клиента для отправки email
	const client = new SMTPClient({
		user: 'Destrifer@yandex.ru',  // Ваш email
		password: 'Centner1',       // Пароль от вашего email
		host: 'smtp.yandex.ru',        // SMTP-сервер (например, для Gmail — smtp.gmail.com)
		ssl: true,                       // Использование SSL (обычно true для SMTP)
	});

	try {
		// Отправка письма
		await client.sendAsync({
			text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
			from: 'your-email@example.com',
			to: 'recipient@example.com',
			subject: 'Новое сообщение с формы',
		});

		return new Response(JSON.stringify({ message: 'Письмо успешно отправлено!' }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Ошибка отправки письма:', error);
		return new Response(JSON.stringify({ message: 'Ошибка отправки письма' }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}
