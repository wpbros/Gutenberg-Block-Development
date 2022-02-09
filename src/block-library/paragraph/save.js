import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit( { attributes: { content, textColor, backgroundColor } } ) {
    return (
        <RichText.Content 
            { ...useBlockProps.save({ style: { color: textColor, backgroundColor: backgroundColor }, className: 'color-block' }) } 
            tagName="p"
            value={content}
        />
    );
}
