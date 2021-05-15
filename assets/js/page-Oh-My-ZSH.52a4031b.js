(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{758:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Oh My Zsh 是一款社区驱动的命令行工具，正如它的主页上说的，Oh My Zsh 是一种生活方式。它基于 zsh 命令行，提供了主题配置，插件机制，已经内置的便捷操作。给我们一种全新的方式使用命令行。\n")]),s._v(" "),t("h2",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),t("h3",{attrs:{id:"zsh-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh-安装"}},[s._v("#")]),s._v(" Zsh 安装")]),s._v(" "),t("p",[s._v("Mac OS 10.15以上自带Zsh")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"将zsh设置成默认的shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将zsh设置成默认的shell"}},[s._v("#")]),s._v(" 将zsh设置成默认的shell")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("chsh -s /bin/zsh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" oh-my-zsh")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"修改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"更新配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新配置"}},[s._v("#")]),s._v(" 更新配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[s._v("#")]),s._v(" 主题")]),s._v(" "),t("h4",{attrs:{id:"查看所有主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有主题"}},[s._v("#")]),s._v(" 查看所有主题")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("omz theme list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"修改主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改主题"}},[s._v("#")]),s._v(" 修改主题")]),s._v(" "),t("p",[s._v('编辑 ~/.zshrc 文件，将 ZSH_THEME="robbyrussell"，双引号里面的内容更改成为你需要的主题')]),s._v(" "),t("h3",{attrs:{id:"zsh-扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh-扩展"}},[s._v("#")]),s._v(" zsh 扩展")]),s._v(" "),t("p",[s._v("在 ~/.zshrc 中找到 "),t("strong",[s._v("plugins")]),s._v(" 关键字，就可以自定义启用的插件了，系统默认加载 "),t("strong",[s._v("git")]),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"推荐扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐扩展"}},[s._v("#")]),s._v(" 推荐扩展")]),s._v(" "),t("ol",[t("li",[s._v("zsh-autosuggestions\n"),t("ol",[t("li",[s._v("安装"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/zsh-users/zsh-autosuggestions "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v("/plugins/zsh-autosuggestions\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("启用\n~/.zshrc中修改"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("其他的插件 zsh-autosuggestions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("修改快捷键"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("bindkey '`' autosuggest-accept\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])]),s._v(" "),t("li",[s._v("zsh-syntax-highlighting\n"),t("ol",[t("li",[s._v("安装"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":-")]),s._v("~"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(".oh-my-zsh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("custom}")]),s._v("/plugins/zsh-syntax-highlighting\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("启用\n~/.zshrc中修改"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("其他的插件 zsh-syntax-highlighting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])]),s._v(" "),t("li",[s._v("git-open\n"),t("ol",[t("li",[s._v("安装"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/paulirish/git-open.git "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v("/plugins/git-open\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[s._v("启用\n~/.zshrc中修改"),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("其他的插件 git-open"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])])])]),s._v(" "),t("h3",{attrs:{id:"zsh-快捷键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh-快捷键"}},[s._v("#")]),s._v(" Zsh 快捷键")]),s._v(" "),t("p",[s._v("⌃ + u：清空当前行")]),s._v(" "),t("p",[s._v("⌃ + a：移动到行首")]),s._v(" "),t("p",[s._v("⌃ + e：移动到行尾")]),s._v(" "),t("p",[s._v("⌃ + f：向前移动")]),s._v(" "),t("p",[s._v("⌃ + b：向后移动")]),s._v(" "),t("p",[s._v("⌃ + p：上一条命令")]),s._v(" "),t("p",[s._v("⌃ + n：下一条命令")]),s._v(" "),t("p",[s._v("⌃ + r：搜索历史命令")]),s._v(" "),t("p",[s._v("⌃ + y：召回最近用命令删除的文字")]),s._v(" "),t("p",[s._v("⌃ + h：删除光标之前的字符")]),s._v(" "),t("p",[s._v("⌃ + d：删除光标所指的字符")]),s._v(" "),t("p",[s._v("⌃ + w：删除光标之前的单词")]),s._v(" "),t("p",[s._v("⌃ + k：删除从光标到行尾的内容")]),s._v(" "),t("p",[s._v("⌃ + t：交换光标和之前的字符")]),s._v(" "),t("p",[s._v("⌘ + Click：可以打开文件，文件夹和链接")]),s._v(" "),t("p",[s._v("⌘ + n：新建窗口")]),s._v(" "),t("p",[s._v("⌘ + t：新建标签页")]),s._v(" "),t("p",[s._v("⌘ + w：关闭当前页")]),s._v(" "),t("p",[s._v("⌘ + 数字&⌘ + 方向键：切换标签页")]),s._v(" "),t("p",[s._v("⌥⌘ + 数字：切换窗口")]),s._v(" "),t("p",[s._v("⌘ + enter：切换全屏")]),s._v(" "),t("p",[s._v("⌘ + d：左右分屏")]),s._v(" "),t("p",[s._v("⇧⌘ + d：上下分屏")]),s._v(" "),t("p",[s._v("⌘ + ;：自动补全历史记录")]),s._v(" "),t("p",[s._v("⇧⌘ + h：自动补全剪贴板历史")]),s._v(" "),t("p",[s._v("⌥⌘ + e：查找所有来定位某个标签页")]),s._v(" "),t("p",[s._v("⌘ + r&⌃ + l：清屏")]),s._v(" "),t("p",[s._v("⌘ + /：显示光标位置")]),s._v(" "),t("p",[s._v("⌥⌘ + b：历史回放")]),s._v(" "),t("p",[s._v("⌘ + f：查找，然后用tab和⇧ + tab可以向右和向左补全，补全之后的内容会被自动复制， 还可以用⌥ + enter将查找结果输入终端")])])}),[],!1,null,null,null);a.default=n.exports}}]);