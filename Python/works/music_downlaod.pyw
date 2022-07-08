'''
作者：小草o_o
哔哩哔哩：https://space.bilibili.com/1487201054
转载记得表明作者!!!
转载记得表明作者!!!
转载记得表明作者!!!
'''
import tkinter as tk
import tkinter.messagebox
import music_downlaod as md


class main():
    def __init__(self) -> None:
        self.window = tk.Tk()
        self.window.title('音乐下载')
        # self.window.resizable(0, 0)
        self.WIDTH = 750
        self.HEIGHT = 900
        screenwidth = self.window.winfo_screenwidth()
        screenheight = self.window.winfo_screenheight()
        size_geo = '%dx%d+%d+%d' % (self.WIDTH, self.HEIGHT,
                                    (screenwidth-self.WIDTH)/2, (screenheight-self.HEIGHT)/2)
        self.window.geometry(size_geo)
        self.Control()
        self.window.mainloop()

    # 控件
    def Control(self):
        self.searchTitle = tk.Label(
            self.window, text='请输入歌曲名称: ', font=('微软雅黑'))
        self.searchTitle.pack()
        self.searchInput = tk.Entry(self.window)
        self.searchInput.pack()
        self.searchButton = tk.Button(
            self.window, text='搜索', command=self.Search)
        self.searchButton.pack()
        self.searchResultString = tk.StringVar()
        self.searchResultString.set('搜索结果')
        self.searchResult = tk.Label(
            self.window, textvariable=self.searchResultString, font=('微软雅黑'))
        self.searchResult.pack()

    # 搜索
    def Search(self):
        # self.searchResultString.set(self.searchInput.get())
        searchData = md.search(self.searchInput.get())
        searchDataListStr = []
        for data in searchData:
            searchDataListStr.append(str(searchData.index(
                data)+1) + '.' + data['name'] + '-' + data['artists'])
        self.searchResultString.set('\n'.join(searchDataListStr))

        self.downloadTitle = tk.Label(
            self.window, text='请输入歌曲序号: ', font=('微软雅黑'))
        self.downloadTitle.pack()
        self.downloadInput = tk.Entry(self.window)
        self.downloadInput.pack()
        self.downloadButton = tk.Button(
            self.window, text='下载', command=self.GetMusicData)
        self.downloadButton.pack()

    # 下载
    def GetMusicData(self):
            num = self.downloadInput.get()

            searchData = md.search(self.searchInput.get())

            if int(num) <= len(searchData):
                music_data = searchData[int(num)-1]
                if tkinter.messagebox.askyesno('', f'''确定音乐信息为:\n歌曲名: {music_data['name']}\n歌手: {music_data['artists']}'''):
                    music = md.get_music(music_data['mid'])
                    if music != None:
                        path = './music/'+music_data['name'] + \
                            ' - '+music_data['artists']+'.mp3'
                        with open(path, 'wb') as f:
                            f.write(music)
                        tkinter.messagebox.showinfo('', '下载完成!')
                        exit()
                    else:
                        tkinter.messagebox.showerror('', '下载失败!')
                        while bool(tkinter.messagebox.askretrycancel('', '是否重新下载?')):
                            music = md.get_music(music_data['mid'])
                            if music != None:
                                path = '.\\music\\'\
                                    + music_data['name'] + ' - '+music_data['artists']+'.mp3'
                                with open(path, 'wb') as f:
                                    f.write(music)
                                tkinter.messagebox.showinfo('', '下载完成!')
                                exit()
            else:
                tkinter.messagebox.showwarning('', '输入有误!')


main()
