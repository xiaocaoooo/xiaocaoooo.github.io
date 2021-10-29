import ybc_box as box
import ybc_speech as speech
import time
import ybc_browser as browser
import urllib.request as rq
import ybc_camera as camera
import ybc_face as face
import ybc_food as food
import ybc_pinyin as pinyin
import ybc_player as player


function_gn = [
    '我的网站',
    '时间',
    '计算',
    '打开网站',
    '下载文件',
    '拍照',
    '拍照并人脸检测',
    '检测是什么食物',
    '汉字的拼音',
    '播放媒体文件'
]
while True:
    op = box.buttonbox('是否使用',['是', '否'])
    if op == "是":
        function = box.buttonbox("你想做什么", function_gn)
        if function == '我的网址':
            browser.open('https://xiaocaoooo.github.io/')
        elif function == '时间':
            box.msgbox(time.strftime('%Y年%m月%d日 %H:%M'))
        elif function == '计算':
            jjcc = box.buttonbox('加减乘除',['加', '减', '乘','除'])
            no1 = float(box.enterbox('第一个数'))
            no2 = float(box.enterbox('第二个数'))
            # no1 = 1
            # no2 = 2
            if jjcc == '加':
                no12 = str(no1 + no2)
                no1 = str(no1)
                no2 = str(no2)
                box.msgbox(no1+'+'+no2+'='+no12)
                # print(no12)
            elif jjcc == '减':
                no12 = str(no1 - no2)
                no1 = str(no1)
                no2 = str(no2)
                box.msgbox(no1+'-'+no2+'='+no12)
                # print(no12)
            elif jjcc == '乘':
                no12 = str(no1 * no2)
                no1 = str(no1)
                no2 = str(no2)
                box.msgbox(no1+'×'+no2+'='+no12)
                # print(no12)
            elif jjcc == '除':
                no12 = str(no1 / no2)
                no1 = str(no1)
                no2 = str(no2)
                box.msgbox(no1+'÷'+no2+'='+no12)
                # print(no12)
        elif function == '打开网站':
            url = box.enterbox('请输入网址\n如: https://xiaocaoooo.github.io/')
            browser.open(url)
        elif function == '下载文件':
            url = box.enterbox('请输入文件网址\n可以是 *.html *.exe等\n如: https://xiaocaoooo.github.io/index.html')
            filename = box.enterbox('请输入文件名\n要加后缀\n如: index.html text.txt')
            rq.urlretrieve(url, filename)
        elif function == '拍照':
            picname = camera.camera()
            box.msgbox('', picname)
        elif function == '拍照并人脸检测':
            picname = camera.camera()
            res = face.face(picname)
            box.msgbox(res, picname)
        elif function == '检测是什么食物':
            picname = camera.camera()
            name = food.name(picname)
            box.msgbox(name, picname)
        elif function == '汉字的拼音':
            text = box.enterbox('请输入文字')
            res = pinyin.pin(text)
            box.msgbox(res + '\n' + text)
        elif function == '播放媒体文件':
            file = box.fileopenbox('请选择视频或音频文件')
            player.play(file)
    elif (op == "否" or op == None):
        break