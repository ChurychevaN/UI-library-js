import './lib/lib';
import $ from './lib/core';

$('#first').on('click', () => {
	$('div').eq(1).fadeToggle(800);
});

$('[data-count="second"] ').on('click', () => {
	$('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
	$('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
	text: {
		title: 'Modal title',
		body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
			' Aliquid consectetur cum doloribus error eveniet explicabo incidunt ipsum' +
			' laboriosam laborum molestiae nihil officiis perferendis perspiciatis possimus praesentium quas repellat, sequi sit?'
	},
	btns: {
		count: 3,
		settings: [
			[
				'Close',
				['btn-danger', 'mr-10'],
				true
			],
			[
				'Save changes',
				['btn-success'],
				false,
				() => {
					alert('Data saved');
				}
			],
			[
				'Another btn',
				['btn-warning', 'ml-10'],
				false,
				() => {
			alert('Hello World');
				}
			]
		]
	}
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
	.then(res => console.log(res));
