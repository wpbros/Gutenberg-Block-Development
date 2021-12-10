import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';



export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __( 'Hello from the saved content!', 'multi-block-plugin' ) }
		</p>
	);
}
