import { useBlockProps, RichText } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({ attributes: { content }, setAttributes }) {
	
	function editContentHandler(newVal) {
		setAttributes({ content: newVal });
	}
	
	return (
		<RichText 
			{ ...useBlockProps() }
			value={content}
			onChange={editContentHandler}
			tagName='p'
			placeholder='Enter text here.'
		/>
	);
}
