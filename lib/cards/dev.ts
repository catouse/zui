import 'preact/debug';
import 'zui-dev';
import '@zui/label';
import '@zui/icons';
import '@zui/button';
import '@zui/list';
import {CardList, Card} from './src/main';

onPageLoad(() => {
    const card = new Card('#card', {
        header: '提示',
        title: '15.5 看板持续迭代',
        prefix: '迭代',
        prefixClass: 'text-sm text-gray',
        icon: 'flag',
        surfix: '迭代',
        surfixClass: 'label rounded-full size-sm',
        subtitle: {component: 'span', className: 'text-gray', children: '这是副标题'},
        content: '主要内容',
        footer: '自定义内容',
        actions: [
            {icon: 'cog text-gray', title: '设置'},
            {
                type: 'dropdown',
                icon: 'ellipsis-v text-gray',
                caret: false,
                placement: 'bottom-end',
                items: [ // 下拉菜单内容
                    {text: '编辑', icon: 'edit'},
                ],
            },
        ],
    });
    console.log('> card', card);

    const cards = new CardList('#cards', {
        items: [
            {
                title: '15.5 看板持续迭代',
                prefix: '迭代',
                prefixClass: 'text-sm text-gray',
                icon: 'flag',
                surfix: '迭代',
                surfixClass: 'label rounded-full size-sm',
                subtitle: {component: 'span', className: 'text-gray', children: '这是副标题'},
                content: '主要内容',
                footer: '自定义内容',
                actions: [
                    {icon: 'cog text-gray', title: '设置'},
                    {
                        type: 'dropdown',
                        icon: 'ellipsis-v text-gray',
                        caret: false,
                        placement: 'bottom-end',
                        items: [ // 下拉菜单内容
                            {text: '编辑', icon: 'edit'},
                        ],
                    },
                ],
            },
            {
                header: '提示',
                title: '15.5 看板持续迭代',
                prefix: '迭代',
                prefixClass: 'text-sm text-gray',
                icon: 'flag',
                surfix: '迭代',
                surfixClass: 'label rounded-full size-sm',
                subtitle: {component: 'span', className: 'text-gray', children: '这是副标题'},
                content: '主要内容',
                footer: '自定义内容',
                actions: [
                    {icon: 'cog text-gray', title: '设置'},
                    {
                        type: 'dropdown',
                        icon: 'ellipsis-v text-gray',
                        caret: false,
                        placement: 'bottom-end',
                        items: [ // 下拉菜单内容
                            {text: '编辑', icon: 'edit'},
                        ],
                    },
                ],
            },
        ],
    });
    console.log('> cards', cards);
});
