const { description } = require('../../package')

const fs = require('fs')

const shelldocGrammar = JSON.parse(fs.readFileSync('syntaxes/shelldoc.tmLanguage.json'))
const shelldocLang = {
    id: 'shelldoc',
    scopeName: 'source.shelldoc',
    grammar: shelldocGrammar,
    aliases: ['shelldoc']
}

const shellsessionGrammar = JSON.parse(fs.readFileSync('syntaxes/shellsession.tmLanguage.json'))
const shellsessionLang = {
    id: 'shellsession',
    scopeName: 'source.shellsession',
    grammar: shellsessionGrammar,
    aliases: ['shellsession']
}

const plaintextcGrammar = JSON.parse(fs.readFileSync('syntaxes/plaintextc.tmLanguage.json'))
const plaintextcLang = {
    id: 'plaintextc',
    scopeName: 'source.plaintextc',
    grammar: plaintextcGrammar,
    aliases: ['plaintextc']
}

module.exports = {
    title: 'Notes',
    description: description,
    base: '/notes/',
    head: [
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ],
    theme: "book",
    themeConfig: {
        repo: 'StarGolx/docs',
        editLinks: false,
        docsDir: 'docs',
        lastUpdated: 'Last updated',
        smoothScroll: true,
        nav: [
            {
                text: 'Programming',
                items: [
                    { text: 'Machine Learning', link: '/ml/' },
                    { text: 'Math', link: '/math/' }
                ]
            },
            { text: 'Software and Tools', link: '/software/' },
            { text: 'Programming', link: '/programming/' },
            { text: 'Languages', link: '/langs/' },
            { text: 'Reading', link: '/reading/' },
            { text: 'Others', link: '/others/' },
        ],
        sidebar: {
            '/programming/': [
                {
                    title: 'Python',
                    collapsable: false,
                    children: [
                        'python/miniconda',
                        'python/matplotlib',
                        'python/python',
                        'python/multi-and-sub-process',
                        'python/user-snippets',
                        'python/cuda',
                    ]
                },
            ],
            '/others/': [
                {
                    title: 'Misc.',
                    collapsable: false,
                    children: [
                        'characters',
                        'genetics',
                        'minimax',
                        'p-np',
                        'literature-review-the-hard-way',
                        'misc',
                    ]
                },
                {
                    title: 'Life',
                    collapsable: false,
                    children: [
                        '2015-summary',
                        '2018-uk',
                        'glasses',
                        'interesting-stuff',
                    ]
                },
            ],
            '/': ['']
        }
    },
    plugins: [
        '@vuepress/back-to-top',
        [
            '@vuepress/medium-zoom',
            {
                selector: '.theme-default-content :not(a) > img:not(.no-zoom)'
            }
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'callout',
                // before: info => `<div class="callout"><p class="title">${info}</p>`,
                // after: '</div>',
                // Hide title if there isn't
                render: function (tokens, idx) {
                    let m = tokens[idx].info.trim().match(/^callout\s+(.*)$/);
                    if (tokens[idx].nesting === 1) {
                        // opening tag
                        let title = m !== null ? m[1] : '';
                        return `<div class="callout">${title.length > 0 ? `<p class="title">${title}</p>` : ''}`;
                    } else {
                        // closing tag
                        return '</div>\n';
                    }
                },
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'definition',
                before: info => `<div class="custom-block definition"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        [
            'vuepress-plugin-container',
            {
                type: 'tree',
                before: `<pre class="tree"><code>`,
                after: `</code></pre>`,
            },
        ],
        /* [
            '@vuepress/google-analytics',
            {
                ga: 'UA-177325112-1',
            },
        ], */
        [
            'shiki', { theme: 'github-light', additionalLangs: [shelldocLang, shellsessionLang, plaintextcLang] }
        ],
    ],
    markdown: {
        extendMarkdown: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-footnote'))
                .use(require('markdown-it-mark'))
                .use(require('@neilsustc/markdown-it-katex'))
                .use(require('markdown-it-attrs'), {
                    leftDelimiter: '{{',
                    rightDelimiter: '}}',
                    allowedAttributes: ['id', 'class']
                })
        },
    },
    chainWebpack: (config, isServer) => {
        const inlineLimit = 10000
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: inlineLimit,
                name: `assets/img/[name].[hash:8].[ext]`
            })
    }
}