export const codecademyTheme = {
    name: 'codecademy',
    data: {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '211e2f' }],
        colors: {
            'editor.background': '#211e2f',
        },
    },
}

export default function setTheme(monaco, theme) {
    monaco.editor.defineTheme(theme.name, theme.data)
    monaco.editor.setTheme(theme.name)
}
