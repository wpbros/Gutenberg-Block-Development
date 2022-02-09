import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ColorPalette } from '@wordpress/components';

import './editor.scss';

export default function Edit({ attributes: { content, textColor, backgroundColor }, setAttributes }) {
	
	function editContentHandler(newVal) {
		setAttributes({ content: newVal });
	}
	
	return (
		<>	
			<InspectorControls>
				<panelBody title="Color Settings">
					<p>Text Color</p>
					<ColorPalette 
						colors={[
							{ name: 'Red', color: '#f00' },
							{ name: 'White', color: '#fff' },
							{ name: 'Blue', color: '#00f' },
						]}
						value={ textColor }
						onChange={ val => setAttributes({ textColor: val }) }
					/>
					
					<br/>
					
					<p>Background Color</p>
					<ColorPalette 
						colors={[
							{ name: 'Red', color: '#f00' },
							{ name: 'White', color: '#fff' },
							{ name: 'Blue', color: '#00f' },
						]}
						value={ backgroundColor }
						onChange={ val => setAttributes({ backgroundColor: val }) }
					/>					
				</panelBody>
			</InspectorControls>
			
			<RichText 
				{ ...useBlockProps({ style: { color: textColor, backgroundColor: backgroundColor } }) }
				value={content}
				onChange={editContentHandler}
				tagName='p'
				placeholder='Enter text here.'
			/>
		</>
	);
}
