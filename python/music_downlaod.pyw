'''
作者：小草o_o
哔哩哔哩：https://space.bilibili.com/1487201054
作者：SYSTEM-MEMZ-CAO
哔哩哔哩：https://space.bilibili.com/1886348413/
转载记得表明作者!!!
转载记得表明作者!!!
转载记得表明作者!!!
'''
import requests
import json
import os


def get(url):
    # 发送请求
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}
    res = requests.get(url, headers=headers)
    # 判断是否请求成功
    if res.status_code == 200:
        # 设置编码
        res.encoding = res.apparent_encoding
        return res
    else:
        return None


keywords = input('请输入搜索关键字:')
search_data = json.loads(
    get(f'http://cloud-music.pl-fe.cn/search?keywords={keywords}').text)['result']['songs']

music_search = []
for i in range(len(search_data)):
    if len(search_data[i]['artists']) == 1:
        music_search.append({
            'name': search_data[i]['name'],
            'artists': search_data[i]['artists'][0]['name'],
            'mid': search_data[i]['id']
        })
    else:
        music_search.append({
            'name': search_data[i]['name'],
            'artists': ' & '.join([j['name'] for j in search_data[i]['artists']]),
            'mid': search_data[i]['id']
        })

for i in range(len(music_search)):
    music_data = music_search[i]
    print(str(i+1)+'.', music_data['name'], '-', music_data['artists'])

num = input('请输入歌曲序号:')

if int(num) <= len(music_search):
    music_data = music_search[int(num)-1]
    print('歌曲名:', music_data['name'])
    print('歌手:', music_data['artists'])
else:
    print('输入有误!')

music = get(
    f'http://music.163.com/song/media/outer/url?id={music_data["mid"]}.mp3').content
if music != None:
    with open('.\\music\\'+music_data['name']+' - '+music_data['artists']+'.mp3', 'wb') as f:
        f.write(music)
    print('下载成功!')
else:
    print('下载失败!')
os.system("pause")
