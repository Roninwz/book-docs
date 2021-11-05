(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{542:function(a,s,e){"use strict";e.r(s);var t=e(54),v=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"面试官-说说-linux系统下-文件操作常用的命令有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说-linux系统下-文件操作常用的命令有哪些"}},[a._v("#")]),a._v(" 面试官：说说 linux系统下 文件操作常用的命令有哪些？")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/6cb38ac0-03c1-11ec-a752-75723a64e8f5.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"一、是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、是什么"}},[a._v("#")]),a._v(" 一、是什么")]),a._v(" "),e("p",[e("code",[a._v("Linux")]),a._v(" 是一个开源的操作系统（OS），是一系列Linux内核基础上开发的操作系统的总称（常见的有Ubuntu、centos）")]),a._v(" "),e("p",[a._v("系统通常会包含以下4个主要部分")]),a._v(" "),e("ul",[e("li",[a._v("内核")]),a._v(" "),e("li",[a._v("shell")]),a._v(" "),e("li",[a._v("文件系统")]),a._v(" "),e("li",[a._v("应用程序")])]),a._v(" "),e("p",[a._v("文件系统是一个"),e("strong",[a._v("目录树的结构")]),a._v("，文件系统结构从一个根目录开始，根目录下可以有任意多个文件和子目录，子目录中又可以有任意多个文件和子目录")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/b71b64c0-03c1-11ec-a752-75723a64e8f5.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"二、文件操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、文件操作"}},[a._v("#")]),a._v(" 二、文件操作")]),a._v(" "),e("p",[a._v("常见处理目录的命令如下：")]),a._v(" "),e("ul",[e("li",[a._v("ls（英文全拼：list files）: 列出目录及文件名")]),a._v(" "),e("li",[a._v("cd（英文全拼：change directory）：切换目录")]),a._v(" "),e("li",[a._v("pwd（英文全拼：print work directory）：显示目前的目录")]),a._v(" "),e("li",[a._v("mkdir（英文全拼：make directory）：创建一个新的目录")]),a._v(" "),e("li",[a._v("rmdir（英文全拼：remove directory）：删除一个空的目录")]),a._v(" "),e("li",[a._v("cp（英文全拼：copy file）: 复制文件或目录")]),a._v(" "),e("li",[a._v("rm（英文全拼：remove）: 删除文件或目录")]),a._v(" "),e("li",[a._v("mv（英文全拼：move file）: 移动文件与目录，或修改文件与目录的名称")])]),a._v(" "),e("h3",{attrs:{id:"ls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[a._v("#")]),a._v(" ls")]),a._v(" "),e("p",[a._v("列出目录文件，选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-a ：全部的文件，连同隐藏文件( 开头为 . 的文件) 一起列出来(常用)")]),a._v(" "),e("li",[a._v("-d ：仅列出目录本身，而不是列出目录内的文件数据(常用)")]),a._v(" "),e("li",[a._v("-l ：长数据串列出，包含文件的属性与权限等等数据；(常用)")])]),a._v(" "),e("p",[a._v("例如将家目录下的所有文件列出来(含属性与隐藏档)")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@www ~]# ls -al ~\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"cd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cd"}},[a._v("#")]),a._v(" cd")]),a._v(" "),e("p",[a._v("切换工作目录")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" cd [相对路径或绝对路径]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 表示回到自己的家目录，亦即是 /root 这个目录\n[root@www runoob]# cd ~\n\n# 表示去到目前的上一级目录，亦即是 /root 的上一级目录的意思；\n[root@www ~]# cd ..\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("h3",{attrs:{id:"pwd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[a._v("#")]),a._v(" pwd")]),a._v(" "),e("p",[e("code",[a._v("pwd")]),a._v(" 是 "),e("code",[a._v("Print Working Directory")]),a._v(" 的缩写，也就是显示目前所在目录的命令。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@www ~]# pwd [-P]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-P ：显示出确实的路径，而非使用连结 (link) 路径")])]),a._v(" "),e("h3",{attrs:{id:"mkdir"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[a._v("#")]),a._v(" mkdir")]),a._v(" "),e("p",[a._v("创建新目录")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir [-mp] 目录名称\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-m ：配置文件的权限")]),a._v(" "),e("li",[a._v("-p ：帮助你直接将所需要的目录(包含上一级目录)递归创建起来")])]),a._v(" "),e("h3",{attrs:{id:"rmdir-删除空的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rmdir-删除空的目录"}},[a._v("#")]),a._v(" rmdir (删除空的目录)")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" rmdir [-p] 目录名称\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-p ：连同上一级『空的』目录也一起删除")])]),a._v(" "),e("h3",{attrs:{id:"cp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[a._v("#")]),a._v(" cp")]),a._v(" "),e("p",[a._v("即拷贝文件和目录")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cp 目标文件 拷贝文件\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("用法如下：")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cp file file_copy --\x3e file 是目标文件，file_copy 是拷贝出来的文件\ncp file one --\x3e 把 file 文件拷贝到 one 目录下，并且文件名依然为 file\ncp file one/file_copy --\x3e 把 file 文件拷贝到 one 目录下，文件名为file_copy\ncp *.txt folder --\x3e 把当前目录下所有 txt 文件拷贝到 folder 目录下\n复制代码\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("常用参数如下：")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("-r")]),a._v(" 递归的拷贝，常用来拷贝一整个目录")])]),a._v(" "),e("h3",{attrs:{id:"rm-移除文件或目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rm-移除文件或目录"}},[a._v("#")]),a._v(" rm (移除文件或目录)")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(" rm [-fir] 文件或目录\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-f ：就是 force 的意思，忽略不存在的文件，不会出现警告信息；")]),a._v(" "),e("li",[a._v("-i ：互动模式，在删除前会询问使用者是否动作")]),a._v(" "),e("li",[a._v("-r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！")])]),a._v(" "),e("h3",{attrs:{id:"mv-移动文件与目录-或修改名称"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mv-移动文件与目录-或修改名称"}},[a._v("#")]),a._v(" mv (移动文件与目录，或修改名称)")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@www ~]# mv [-fiu] source destination\n[root@www ~]# mv [options] source1 source2 source3 .... directory\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；")]),a._v(" "),e("li",[a._v("-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！")]),a._v(" "),e("li",[a._v("-u ：若目标文件已经存在，且 source 比较新，才会升级 (update)")])]),a._v(" "),e("h3",{attrs:{id:"ln"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ln"}},[a._v("#")]),a._v(" ln")]),a._v(" "),e("p",[e("code",[a._v("Linux")]),a._v(" 文件的存储方式分为3个部分，文件名、文件内容以及权限，其中文件名的列表是存储在硬盘的其它地方和文件内容是分开存放的，每个文件名通过 "),e("code",[a._v("inode")]),a._v(" 标识绑定到文件内容")]),a._v(" "),e("p",[e("code",[a._v("Linux")]),a._v(" 下有两种链接类型：硬链接和软链接")]),a._v(" "),e("h4",{attrs:{id:"硬链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬链接"}},[a._v("#")]),a._v(" 硬链接")]),a._v(" "),e("p",[a._v("使链接的两个文件共享同样文件内容，就是同样的 "),e("code",[a._v("inode")]),a._v(" ，一旦文件1和文件2之间有了硬链接，那么修改任何一个文件，修改的都是同一块内容")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# 创建 file2 为 file1 的硬链接\nln file1 file2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/c92e7800-03c1-11ec-8e64-91fdec0f05a1.png",alt:""}})]),a._v(" "),e("p",[a._v("删除文件1不会影响删除文件2，对于硬链接来说，删除任意一方的文件，共同指向的文件内容并不会从硬盘上删除")]),a._v(" "),e("p",[a._v("只有同时删除了两个文件后后，它们共同指向的文件内容才会消失。")]),a._v(" "),e("h4",{attrs:{id:"软链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软链接"}},[a._v("#")]),a._v(" 软链接")]),a._v(" "),e("p",[a._v("类似"),e("code",[a._v("window")]),a._v("系统的快捷方式")]),a._v(" "),e("p",[a._v("使用方式：")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ln -s file1 file2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://static.vue-js.com/d5a22eb0-03c1-11ec-8e64-91fdec0f05a1.png",alt:""}}),a._v("其实 "),e("code",[a._v("file2")]),a._v(" 只是 "),e("code",[a._v("file1")]),a._v(" 的一个快捷方式，它指向的是 "),e("code",[a._v("file1")]),a._v(" ，所以显示的是 "),e("code",[a._v("file1")]),a._v(" 的内容，但其实 "),e("code",[a._v("file2")]),a._v(" 的 "),e("code",[a._v("inode")]),a._v(" 与 "),e("code",[a._v("file1")]),a._v(" 并不相同")]),a._v(" "),e("p",[a._v("如果")]),a._v(" "),e("p",[a._v("删除了 "),e("code",[a._v("file2")]),a._v(" 的话， "),e("code",[a._v("file1")]),a._v(" 是不会受影响的，但如果删除 "),e("code",[a._v("file1")]),a._v(" 的话， "),e("code",[a._v("file2")]),a._v(" 就会变成死链接，因为指向的文件不见了")]),a._v(" "),e("h2",{attrs:{id:"三、文件查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、文件查看"}},[a._v("#")]),a._v(" 三、文件查看")]),a._v(" "),e("p",[a._v("常见的文件内容查看有如下：")]),a._v(" "),e("ul",[e("li",[a._v("cat 由第一行开始显示文件内容")]),a._v(" "),e("li",[a._v("less 一页一页的显示文件内容")]),a._v(" "),e("li",[a._v("head 只看头几行")]),a._v(" "),e("li",[a._v("tail 只看尾巴几行")])]),a._v(" "),e("h3",{attrs:{id:"cat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[a._v("#")]),a._v(" cat")]),a._v(" "),e("p",[a._v("由第一行开始显示文件内容")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("cat [-AbEnTv]\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("常见的选项与参数如下：")]),a._v(" "),e("ul",[e("li",[a._v("-b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！")]),a._v(" "),e("li",[a._v("-n ：列印出行号，连同空白行也会有行号，与 -b 的选项不同")])]),a._v(" "),e("h3",{attrs:{id:"less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[a._v("#")]),a._v(" less")]),a._v(" "),e("p",[a._v("一页一页翻动，以下实例输出/etc/man.config文件的内容：")]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@www ~]# less /etc/man.config\n#\n# Generated automatically from man.conf.in by the\n# configure script.\n#\n# man.conf from man-1.6d\n....(中间省略)....\n:   <== 这里可以等待你输入命令！\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br")])]),e("p",[a._v("less运行时可以输入的命令有：")]),a._v(" "),e("ul",[e("li",[a._v("空白键  ：向下翻动一页；")]),a._v(" "),e("li",[a._v("[pagedown]：向下翻动一页；")]),a._v(" "),e("li",[a._v("[pageup] ：向上翻动一页；")]),a._v(" "),e("li",[a._v("/字串   ：向下搜寻『字串』的功能；")]),a._v(" "),e("li",[a._v("?字串   ：向上搜寻『字串』的功能；")]),a._v(" "),e("li",[a._v("n     ：重复前一个搜寻 (与 / 或 ? 有关！)")]),a._v(" "),e("li",[a._v("N     ：反向的重复前一个搜寻 (与 / 或 ? 有关！)")]),a._v(" "),e("li",[a._v("q     ：离开 less 这个程序")])]),a._v(" "),e("h3",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[a._v("#")]),a._v(" head")]),a._v(" "),e("p",[a._v("取出文件前面几行")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("head [-n number] 文件 \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-n ：后面接数字，代表显示几行的意思")])]),a._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@www ~]# head /etc/man.config\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"tail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[a._v("#")]),a._v(" tail")]),a._v(" "),e("p",[a._v("取出文件后面几行")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tail [-n number] 文件 \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("选项与参数：")]),a._v(" "),e("ul",[e("li",[a._v("-n ：后面接数字，代表显示几行的意思")]),a._v(" "),e("li",[a._v("-f ：表示持续侦测后面所接的档名，要等到按下[ctrl]-c才会结束tail的侦测")])]),a._v(" "),e("h2",{attrs:{id:"参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),e("ul",[e("li",[a._v("https://www.runoob.com/linux/linux-file-content-manage.html")]),a._v(" "),e("li",[a._v("https://juejin.cn/post/6938385978004340744#heading-35")]),a._v(" "),e("li",[a._v("https://zh.wikipedia.org/wiki/Linux")])])])}),[],!1,null,null,null);s.default=v.exports}}]);