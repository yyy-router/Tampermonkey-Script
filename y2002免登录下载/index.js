window.onload = function(){
    setTimeout(()=>{

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
        `)
        myTop.appendChild(container);
        // 创建下载按钮
        const downLoadBtn = document.createElement('input');
        downLoadBtn.setAttribute('type','button');
        container.appendChild(downLoadBtn);
        downLoadBtn.setAttribute('value','点击下载');
        downLoadBtn.setAttribute('style',`
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
        
        downLoadBtn.onclick = function(){
           const a = document.createElement('a');
           container.appendChild(a);
           a.href = source;
           a.setAttribute('style','display:none;')
           a.click();
           container.removeChild(a);
        }

    },1500)

}
