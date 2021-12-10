import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit() {
    return (
        <p {...useBlockProps.save()}>
        'Hello from the front end!'
        </p>
    );
}
