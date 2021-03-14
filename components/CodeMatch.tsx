import React from "react";

interface Props {
    code: string;
    match: string;
}

const matcher = (code: string, match: string) => {
    const length = Math.min(code.length, match.length);
    let matched = "";
    let i: number;
    for (i = 0; i < length; i++) {
        if (code[i] === match[i]) {
            matched += code[i];
        } else {
            break;
        }
    }
    const unmatched = code.slice(i);
    return [matched, unmatched];
};

const CodeMatch = ({ code, match }: Props) => {
    const [matched, unmatched] = matcher(code, match);
    return (
        <code>
            <span className="text-green-600">{matched}</span>
            <span className="text-red-600">{unmatched}</span>
        </code>
    );
};

export default CodeMatch;
