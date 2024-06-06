import React, { useState } from 'react';
import './color-picker.css'
function Copytext({ text }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
        }).catch((error) => {
            console.error("Error copying to clipboard: ", error);
        });
    };

    return(
        <button className="btn" onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}

export default Copytext;
