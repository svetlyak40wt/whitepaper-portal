module.exports = {
    block: 'page',
    title: 'Редактор',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'editor.min.css' },
        { elem: 'css', url: 'https://whitepaper.tools/cdn/whitepaper-1.0.0.min.css' },
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'editor.min.js' }],
    mix: [{
        block: 'theme',
        mods: { color: 'whitepaper-default', space: 'default', breakpoint: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
    },
    {
        block: 'control',
        mods: { whitepaper: 'default' }
    }],
    content: [
    {
        block: 'editor',
        content: [
        {
            elem: 'interface',
            mix: { block: 'theme', mods: { gap: 'editor-default', color: 'editor-default', size: 'editor-default', space: 'editor-default' } },
            content: [
            {
                block: 'tpl-layout',
                mods: { structure: '20-80' },
                content: [
                {
                    elem: 'section',
                    mix: [{ block: 'decorator', mods: { 'space-h': 'xl', 'space-v': 'xxxl' } },
                          { block: 'editor', elem: 'left-section' }],
                    content: [
                    {
                        block: 'pt-list',
                        content: [
                        {
                            elem: 'item',
                            elemMods: { 'indent-t': 'xxxl' },
                            mix: { block: 'selectable' },
                            content: [
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase' },
                                    mix: { block: 'selectable' },
                                    content: 'Browse Music'
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'brand', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'brand', weight: 'bold' },
                                        mix: { block: 'selectable' },
                                        content: 'Discover'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Genres'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Top Charts'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Collabs'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Free Music'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Stations'
                                    }]
                                }]
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'indent-t': 'xxxl' },
                            mix: { block: 'selectable' },
                            content: [
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase' },
                                    mix: { block: 'selectable' },
                                    content: 'Your Music'
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Favourites'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'History'
                                    }]
                                }]
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'indent-t': 'xxxl' },
                            mix: { block: 'selectable' },
                            content: [
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'text',
                                    mods: { size: 'xs', view: 'primary', weight: 'bold', transform: 'uppercase' },
                                    mix: { block: 'selectable' },
                                    content: 'Your Playlists'
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Public Playlist'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'Purchased'
                                    }]
                                }]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'indent-t': 'xl' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    block: 'pt-icon-plus',
                                    mods: { 'vertical-align': 'center' },
                                    mix: { block: 'selectable' },
                                    content: [
                                    {
                                        block: 'icon',
                                        mods: { size: 's', view: 'secondary', name: 'arrow-right' },
                                        mix: [{ block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 's' } },
                                              { block: 'selectable' }]
                                    },
                                    {
                                        block: 'text',
                                        mods: { size: 's', view: 'secondary' },
                                        mix: { block: 'selectable' },
                                        content: 'My First Playlist'
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                {
                    elem: 'section',
                    mix: [{ block: 'decorator', mods: { 'space-h': 'xxxl', 'space-v': 'xl' } },
                          { block: 'editor', elem: 'right-section' }],
                    content: [
                    {
                        block: 'editor',
                        elem: 'interface-search',
                        content: [
                        {
                            block: 'icon',
                            mods: { size: 's', view: 'primary', name: 'search' },
                            mix: { block: 'selectable' }
                        },
                        {
                            tag: 'input',
                            attrs: { type: 'text', placeholder: 'Search' }
                        },
                        {
                            block: 'icon',
                            mods: { size: 's', view: 'primary', name: 'mic' },
                            mix: { block: 'selectable' }
                        }]
                    },
                    {
                        block: 'text',
                        mods: { size: 'xxxxxl', view: 'primary', weight: 'semibold' },
                        attrs: { style: 'width: 440px;' },
                        mix: [{ block: 'decorator', mods: { 'indent-t': 'xxxxxl', 'indent-b': 'm' } },
                              { block: 'selectable' }],
                        content: 'What\'s hot this weekend?'
                    },
                    {
                        block: 'text',
                        mods: { size: 'm', view: 'primary' },
                        attrs: { style: 'width: 500px;' },
                        mix: { block: 'selectable' },
                        content: 'Growing up in the small, wintry town of Berkak, Norway with less than 1000 people, Astrid S was drawn to music at a vary early age...'
                    },
                    {
                        block: 'decorator',
                        mods: { 'indent-t': 'xxxl' },
                        content: [
                        {
                            block: 'editor',
                            elem: 'interface-button',
                            elemMods: { type: 'play' },
                            mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
                            content: [
                            'Listen',
                            {
                                block: 'icon',
                                mods: { size: 's', view: 'brand', name: 'play' },
                                mix: { block: 'selectable' }
                            }]
                        },
                        {
                            block: 'editor',
                            elem: 'interface-button',
                            elemMods: { type: 'favourites' },
                            content: {
                                block: 'icon',
                                mods: { size: 's', view: 'primary', name: 'fave-1' },
                                mix: { block: 'selectable' }
                            }
                        }]
                    },
                    {
                        block: 'decorator',
                        mods: { 'indent-t': 'xxxxxl', 'indent-b': 'm' },
                        mix: { block: 'selectable' },
                        content: [
                        {
                            block: 'text',
                            mods: { size: 'xl', view: 'primary', weight: 'bold', display: 'inline-block' },
                            mix: [{ block: 'decorator', mods: { 'indent-r': 'l' } },
                                  { block: 'selectable' }],
                            content: 'Noteworthy Albums'
                        },
                        {
                            block: 'text',
                            mods: { size: 's', view: 'secondary', display: 'inline-block' },
                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                  { block: 'selectable' }],
                            content: 'Better recommendations?'
                        },
                        {
                            tag: 'a',
                            block: 'text',
                            mods: { size: 's', view: 'link', display: 'inline-block' },
                            mix: { block: 'selectable' },
                            content: 'define your taste'
                        }]
                    },
                    {
                        block: 'tpl-grid',
                        mods: { 'm-ratio': '1-1-1-1' },
                        mix: { block: 'selectable' },
                        content: [
                        {
                            elem: 'fraction',
                            mix: { block: 'pt-card' },
                            content: [
                            {
                                block: 'pt-card',
                                elem: 'content',
                                elemMods: { 'space-a': 'xs' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    elem: 'image',
                                    tag: 'img',
                                    attrs: { src: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg' },
                                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } }
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'm', view: 'primary', align: 'center', weight: 'bold' },
                                    mix: { block: 'selectable' },
                                    content: 'Skin: The Remixes'
                                },
                                {
                                    block: 'text',
                                    mods: { size: 's', view: 'secondary', align: 'center' },
                                    mix: { block: 'selectable' },
                                    content: 'Flume'
                                }]
                            }]
                        },
                        {
                            elem: 'fraction',
                            mix: { block: 'pt-card' },
                            content: [
                            {
                                block: 'pt-card',
                                elem: 'content',
                                elemMods: { 'space-a': 'xs' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    elem: 'image',
                                    tag: 'img',
                                    attrs: { src: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg' },
                                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } }
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'm', view: 'primary', align: 'center', weight: 'bold' },
                                    mix: { block: 'selectable' },
                                    content: 'Remixes'
                                },
                                {
                                    block: 'text',
                                    mods: { size: 's', view: 'secondary', align: 'center' },
                                    mix: { block: 'selectable' },
                                    content: 'Flume'
                                }]
                            }]
                        },
                        {
                            elem: 'fraction',
                            mix: { block: 'pt-card' },
                            content: [
                            {
                                block: 'pt-card',
                                elem: 'content',
                                elemMods: { 'space-a': 'xs' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    elem: 'image',
                                    tag: 'img',
                                    attrs: { src: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg' },
                                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } }
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'm', view: 'primary', align: 'center', weight: 'bold' },
                                    mix: { block: 'selectable' },
                                    content: 'Remixes'
                                },
                                {
                                    block: 'text',
                                    mods: { size: 's', view: 'secondary', align: 'center' },
                                    mix: { block: 'selectable' },
                                    content: 'Flume'
                                }]
                            }]
                        },
                        {
                            elem: 'fraction',
                            mix: { block: 'pt-card' },
                            content: [
                            {
                                block: 'pt-card',
                                elem: 'content',
                                elemMods: { 'space-a': 'xs' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    elem: 'image',
                                    tag: 'img',
                                    attrs: { src: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg' },
                                    mix: { block: 'decorator', mods: { 'indent-b': 'xs' } }
                                },
                                {
                                    block: 'text',
                                    mods: { size: 'm', view: 'primary', align: 'center', weight: 'bold' },
                                    mix: { block: 'selectable' },
                                    content: 'Remixes'
                                },
                                {
                                    block: 'text',
                                    mods: { size: 's', view: 'secondary', align: 'center' },
                                    mix: { block: 'selectable' },
                                    content: 'Flume'
                                }]
                            }]
                        }]
                    },
                    {
                        block: 'tpl-grid',
                        mods: { 'm-columns': '10', 'col-gap': 'full' },
                        mix: [{ block: 'decorator', mods: { 'indent-t': 'xxl' } },
                              { block: 'selectable' }],
                        content: [
                        {
                            elem: 'fraction',
                            elemMods: { 'm-col': '5' },
                            mix: { block: 'selectable' },
                            content: [
                            {
                                block: 'text',
                                mods: { size: 'xl', view: 'primary', weight: 'bold' },
                                mix: [{ block: 'decorator', mods: { 'indent-b': 'm' } },
                                      { block: 'selectable' }],
                                content: 'Latest Songs Releases'
                            },
                            {
                                block: 'pt-table',
                                mods: { 'space-v': 'xs' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    elem: 'row',
                                    content: [
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                  { block: 'selectable' }]
                                        },
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'image',
                                            tag: 'img',
                                            width: 40,
                                            url: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '55' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'primary', weight: 'bold' },
                                            mix: { block: 'selectable' },
                                            content: 'Worry Bout Us'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: 'Rosie Lowe'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '5' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: '6:20'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '10', align: 'right' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    }]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                  { block: 'selectable' }]
                                        },
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'image',
                                            tag: 'img',
                                            width: 40,
                                            url: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '55' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'primary', weight: 'bold' },
                                            mix: { block: 'selectable' },
                                            content: 'Worry Bout Us'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: 'Rosie Lowe'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '5' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: '6:20'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '10', align: 'right' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    }]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                  { block: 'selectable' }]
                                        },
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'image',
                                            tag: 'img',
                                            width: 40,
                                            url: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '55' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'primary', weight: 'bold' },
                                            mix: { block: 'selectable' },
                                            content: 'Worry Bout Us'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: 'Rosie Lowe'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '5' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: '6:20'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '10', align: 'right' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    }]
                                }]
                            }]
                        },
                        {
                            elem: 'fraction',
                            elemMods: { 'm-col': '5' },
                            mix: { block: 'selectable' },
                            content: [
                            {
                                block: 'text',
                                mods: { size: 'xl', view: 'primary', weight: 'bold' },
                                mix: [{ block: 'decorator', mods: { 'indent-b': 'm' } },
                                      { block: 'selectable' }],
                                content: 'Latest Singles Releases'
                            },
                            {
                                block: 'pt-table',
                                mods: { 'space-v': 'xs' },
                                mix: { block: 'selectable' },
                                content: [
                                {
                                    elem: 'row',
                                    content: [
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                  { block: 'selectable' }]
                                        },
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'image',
                                            tag: 'img',
                                            width: 40,
                                            url: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '55' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'primary', weight: 'bold' },
                                            mix: { block: 'selectable' },
                                            content: 'Worry Bout Us'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: 'Rosie Lowe'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '5' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: '6:20'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '10', align: 'right' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    }]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                  { block: 'selectable' }]
                                        },
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'image',
                                            tag: 'img',
                                            width: 40,
                                            url: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '55' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'primary', weight: 'bold' },
                                            mix: { block: 'selectable' },
                                            content: 'Worry Bout Us'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: 'Rosie Lowe'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '5' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: '6:20'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '10', align: 'right' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    }]
                                },
                                {
                                    elem: 'row',
                                    content: [
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                  { block: 'selectable' }]
                                        },
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '15' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'image',
                                            tag: 'img',
                                            width: 40,
                                            url: 'https://crescentvale.com/wp-content/uploads/2017/04/1400x1400-1.jpg'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '55' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'primary', weight: 'bold' },
                                            mix: { block: 'selectable' },
                                            content: 'Worry Bout Us'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: 'Rosie Lowe'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '5' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 's', view: 'secondary' },
                                            mix: { block: 'selectable' },
                                            content: '6:20'
                                        }]
                                    },
                                    {
                                        elem: 'col',
                                        elemMods: { width: '10', align: 'right' },
                                        mix: { block: 'selectable' },
                                        content: [
                                        {
                                            block: 'icon',
                                            mods: { size: 's', view: 'secondary', name: 'fave-1' },
                                            mix: { block: 'selectable' }
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        },
        {
            elem: 'controls',
            mix: { block: 'decorator', mods: { 'space-a': 'xl' } },
            content: [
            {
                block: 'pt-list',
                content: [
                {
                    elem: 'item',
                    elemMods: { 'space-b': 'l' },
                    content: [
                    {
                        elem: 'item',
                        elemMods: { 'space-b': 'm' },
                        content: [
                        {
                            block: 'text',
                            mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'bold' },
                            content: 'Тема'
                        }]
                    },
                    {
                        elem: 'item',
                        elemMods: { 'space-b': 'm' },
                        content: [
                        {
                            block: 'text',
                            mods: { size: 'xs', view: 'secondary', transform: 'uppercase', weight: 'bold' },
                            content: 'Цвета'
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                block: 'colorpicker',
                                tag: 'input',
                                attrs: { type: 'color', value: '#13141d', name: 'colorBackground' }
                            },
                            {
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Фон'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                block: 'colorpicker',
                                tag: 'input',
                                attrs: { type: 'color', value: '#ffffff', name: 'colorText' }
                            },
                            {
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Текст'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                block: 'colorpicker',
                                tag: 'input',
                                attrs: { type: 'color', value: '#2dc6e7', name: 'colorBrand' }
                            },
                            {
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Бренд'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                block: 'colorpicker',
                                tag: 'input',
                                attrs: { type: 'color', value: '#08b7da', name: 'colorPath' }
                            },
                            {
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Ссылки'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                block: 'colorpicker',
                                tag: 'input',
                                attrs: { type: 'color', value: '#ffffff', name: 'colorPhantom' }
                            },
                            {
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Тени'
                            }]
                        }]
                    },
                    {
                        elem: 'item',
                        elemMods: { 'space-b': 'm' },
                        content: [
                        {
                            block: 'text',
                            mods: { size: 'xs', view: 'secondary', transform: 'uppercase', weight: 'bold' },
                            content: 'Отступы'
                        },
                        {
                            block: 'text',
                            mods: { size: 'xs', view: 'secondary' },
                            content: 'Модуль'
                        },
                        {
                            block: 'range',
                            tag: 'input',
                            attrs: { type: 'range', min: '2', max: '8', value: '4', name: 'spaceModule' }
                        }]
                    },
                    {
                        elem: 'item',
                        elemMods: { 'space-b': 'm' },
                        content: [
                        {
                            block: 'text',
                            mods: { size: 'xs', view: 'secondary', transform: 'uppercase', weight: 'bold' },
                            content: 'Типографика'
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                tag: 'input',
                                attrs: { type: 'radio', name: 'typoRule', 'data-rule': 'default', checked: true }
                            },
                            {
                                tag: 'label',
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Дефолтные'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                tag: 'input',
                                attrs: { type: 'radio', name: 'typoRule', 'data-rule': 'prime' }
                            },
                            {
                                tag: 'label',
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Простые'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                tag: 'input',
                                attrs: { type: 'radio', name: 'typoRule', 'data-rule': 'fibonacci' }
                            },
                            {
                                tag: 'label',
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Фибоначи'
                            }]
                        },
                        {
                            elem: 'item',
                            elemMods: { 'space-b': 'xs', distribute: 'default', 'vertical-align': 'center' },
                            content: [
                            {
                                tag: 'input',
                                attrs: { type: 'radio', name: 'typoRule', 'data-rule': 'golden' }
                            },
                            {
                                tag: 'label',
                                block: 'text',
                                mods: { size: 'xs', view: 'secondary' },
                                mix: { block: 'decorator', mods: { 'indent-l': 'xxs' } },
                                content: 'Золотое сечение'
                            }]
                        }]
                    }]
                },
                {
                    elem: 'item',
                    elemMods: { 'space-b': 'l' },
                    content: [
                    {
                        elem: 'item',
                        elemMods: { 'space-b': 'm' },
                        content: [
                        {
                            block: 'text',
                            mods: { size: 's', view: 'primary', transform: 'uppercase', weight: 'bold' },
                            content: 'Лейаут'
                        },
                        {
                            block: 'text',
                            mods: { size: 'xs', view: 'secondary' },
                            content: 'Отношение секций'
                        },
                        {
                            block: 'range',
                            tag: 'input',
                            attrs: { type: 'range', min: '1', max: '9', value: '2', name: 'layoutRatio' }
                        }]
                    }]
                }]
            }]
        }]
    }]
};
