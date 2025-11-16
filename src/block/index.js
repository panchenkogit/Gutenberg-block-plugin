import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('myblocks/myblock', {
	title: __('My Block', 'myblocks'),
	description: __('Single Block', 'myblocks'),
	icon: 'universal-access',
	parent: ['myblocks/myblocks'],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
			default: 'Example Title',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
			default: 'Example Description',
		},
		image_url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		image_alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		image_id: {
			type: 'number',
		},
	},
	edit: Edit,
	save: Save,
});
