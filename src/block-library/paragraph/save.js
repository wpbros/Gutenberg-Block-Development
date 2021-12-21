import { useBlockProps, RichText } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit( { attributes: { content } } ) {
    return (
        <RichText.Content 
            { ...useBlockProps.save() } 
            tagName="p"
            value={content}
        />
    );
}
