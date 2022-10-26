// ==UserScript==
// @name         y2002下载助手
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.y2002.com/Songs/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=y2002.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.onload = function () {
        setTimeout(() => {
            let songNameDOM = document.getElementsByClassName('box playbox');
            let myTop = document.getElementById('top');
            let audio = document.querySelector('#jp_audio_0');
            let source = audio.src;
            const container = document.createElement('div');
            // 设置脚本背景
            container.setAttribute('style', `
        width:80px;
        height:80px;
        position: fixed;
        left:60px;
        border-radius:50%;
        bottom:100px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        `)
            myTop.appendChild(container);
            // 创建下载按钮和本地缓存按钮
            const downLoadBtn = document.createElement('input');
            const collection = document.createElement('input');
            downLoadBtn.setAttribute('type', 'button');
            collection.setAttribute('type', 'button');
            container.appendChild(downLoadBtn);
            container.appendChild(collection);
            downLoadBtn.setAttribute('value', '点击下载');
            collection.setAttribute('value', '点击收藏');
            downLoadBtn.setAttribute('style', `
        background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor:pointer;
        `)
            collection.setAttribute('style', `
        background-color: #f1c40f;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor:pointer;
        `)
            // 下载函数
            downLoadBtn.onclick = function () {
                const a = document.createElement('a');
                container.appendChild(a);
                a.href = source;
                a.setAttribute('style', 'display:none;')
                a.click();
                container.removeChild(a);
            }
            // 收藏函数
            collection.onclick = function () {
                let songName = songNameDOM[0].firstElementChild.innerHTML;
                let str = songName.slice(7);
                str = str.replace(/&nbsp;/ig, "");
                localStorage.setItem(str, source);
            }
        }, 2000)

    }




})();