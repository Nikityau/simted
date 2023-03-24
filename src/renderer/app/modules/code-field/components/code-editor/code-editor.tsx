import React from 'react';
import {javascript} from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
import createTheme from "@uiw/codemirror-themes";
import {tags as t} from "@lezer/highlight";


const myTheme = createTheme({
    theme: 'dark',
    settings: {
        background: 'transparent',
        foreground: '#fff',
        caret: '#cc8e4b',
        selection: '#2f3341',
        selectionMatch: '#000',
        lineHighlight: '#20222c',
        gutterBackground: 'transparent',
        gutterForeground: '#B6C4F2',
    },
    styles: [
        { tag:  t.comment, color: '#625d64' },
        { tag: t.variableName, color: '#B6C4F2' },
        { tag: [t.string, t.special(t.brace)], color: '#5ea163' },
        { tag: t.number, color: '#e46238' },
        { tag: t.bool, color: '#744b8b' },
        { tag: t.null, color: '#744b8b' },
        { tag: t.keyword, color: '#744b8b' },
        { tag: t.operator, color: '#B6C4F2' },
        { tag: t.className, color: '#d1b479' },
        { tag: t.definition(t.typeName), color: '#0782ff' },
        { tag: t.typeName, color: '#ff0c0c' },
        { tag: t.angleBracket, color: '#e8e8e8' },
        { tag: t.tagName, color: '#207fe3' },
        { tag: t.attributeName, color: '#000000' },
    ],
});

const CodeEditor = () => {

    const onChange = React.useCallback((value, viewUpdate) => {

    }, []);

    return (
        <div className={'code-editor scrollbar'}>
            <ReactCodeMirror
                className={'code-field__code-editor'}
                extensions={[
                    javascript({ jsx: true, typescript: true })
                ]}
                value={''}
                theme={myTheme}
                onChange={onChange}

            />
        </div>
    );
};

export default CodeEditor;