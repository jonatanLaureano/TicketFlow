import { Event } from "@/infrastructure/interfaces/apiEvent.response";

export const events: Event[] = [
	
	{
		id: '1e3b2f04-15b9-4b58-9bda-1e45371c4f9a',
		eventName: 'Concert Night',
		price: 50,
		newPrice: 120,
		url: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		isFree: false,
		descriptionEvent: 'Micrófono en mano, dejando huellas.',
		totalAttendees: 20,
		recentThreeProfiles: [
			'https://i.pinimg.com/140x140_RS/ca/61/94/ca6194568de127d79324540ec845491a.jpg',
			'https://i.pinimg.com/236x/62/e9/1f/62e91f2befe944ed8603c845db48db3f.jpg',
			'https://i.pinimg.com/236x/84/95/c8/8495c8cef3758c05d4f8a3d79a2edf7f.jpg',
		],
		isDiscount: true,
	},
	{
		id: '8d4f6c3e-a5c2-4674-9b7b-6fc31c3ecb2e',
		eventName: 'Tech Conference 2024',
		price: 0,
		newPrice: 0,
		url: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		isFree: true,
		descriptionEvent: 'Micrófono en mano, dejando huellas.',
		totalAttendees: 20,
		recentThreeProfiles: [
			'https://i.pinimg.com/170x/49/2f/cc/492fccf8a1b31147d7eadec4552956df.jpg',
			'https://i.pinimg.com/170x/94/ae/4d/94ae4dc3e226a87c695d79691cd49514.jpg',
			'https://i.pinimg.com/170x/63/2a/c0/632ac0b3f580b10b9c07b845076278eb.jpg',
		],
		isDiscount: false,
	},
	{
		id: '9b9dc25a-2c77-4eb4-bf7b-5d0e0bdf9c5e',
		eventName: 'Art Exhibition',
		price: 30,
		newPrice: 0,
		url: 'https://images.pexels.com/photos/26861565/pexels-photo-26861565/free-photo-of-hombre-gente-multitud-muchedumbre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		isFree: false,
		descriptionEvent: 'papaya cantante',
		totalAttendees: 40,
		recentThreeProfiles: [
			'https://i.pinimg.com/550x/54/2d/07/542d0769447c3cc2ffc3f08de0f86737.jpg',
			'https://i.pinimg.com/236x/40/7f/cf/407fcf48bac9ce769f391c79942a82d8.jpg',
			'https://i.pinimg.com/236x/f0/2e/54/f02e5430e3b242aba19a48b6a4745388.jpg',
		],
		isDiscount: false,
	}
];