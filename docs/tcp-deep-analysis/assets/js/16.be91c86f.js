(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{401:function(t,e,n){"use strict";n.r(e);var s=n(54),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("在日常的开发过程中，经常会遇到端口占用冲突的问题。那是不是不同的进程不能同时监听同一个端口呢？这个小节就来介绍 SO_REUSEPORT 选项相关的内容。")]),t._v(" "),n("p",[t._v("通过阅读这个小节，你会学到如下知识。")]),t._v(" "),n("ul",[n("li",[t._v("SO_REUSEPORT 选项是什么")]),t._v(" "),n("li",[t._v("什么是惊群效应")]),t._v(" "),n("li",[t._v("SO_REUSEPORT 选项安全性相关的问题")]),t._v(" "),n("li",[t._v("Linux 内核实现端口选择过程的源码分析")])]),t._v(" "),n("h2",{attrs:{id:"so-reuseport-是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#so-reuseport-是什么"}},[t._v("#")]),t._v(" SO_REUSEPORT 是什么")]),t._v(" "),n("p",[t._v("默认情况下，一个 IP、端口组合只能被一个套接字绑定，Linux 内核从 3.9 版本开始引入一个新的 socket 选项 SO_REUSEPORT，又称为 port sharding，允许多个套接字监听同一个IP 和端口组合。")]),t._v(" "),n("p",[t._v("为了充分发挥多核 CPU 的性能，多进程的处理网络请求主要有下面两种方式")]),t._v(" "),n("ul",[n("li",[t._v("主进程 + 多个 worker 子进程监听相同的端口")]),t._v(" "),n("li",[t._v("多进程 + REUSEPORT")])]),t._v(" "),n("p",[t._v("第一种方最常用的一种模式，Nginx 默认就采用这种方式。主进程执行 bind()、listen() 初始化套接字，然后 fork 新的子进程。在这些子进程中，通过 accept/epoll_wait 同一个套接字来进行请求处理，示意图如下所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee520a443",alt:"reuseport_nginx"}})]),t._v(" "),n("p",[t._v("这种方式看起来很完美，但是会带来著名的“惊群”问题（thundering herd）。")]),t._v(" "),n("h2",{attrs:{id:"惊群问题-thundering-herd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#惊群问题-thundering-herd"}},[t._v("#")]),t._v(" 惊群问题（thundering herd）")]),t._v(" "),n("p",[t._v("在开始介绍惊群之前，我们下来看看一个现实世界中的惊群问题。假如你养了五条狗，一开始这五条狗都在睡觉，你过去扔了一块骨头，这五条狗都从睡梦中醒来，一起跑过来争抢这块骨头，最终只有第三条狗抢到了这块骨头，剩下的四条狗只好无奈的继续睡觉。如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee58979c9",alt:"惊群"}})]),t._v(" "),n("p",[t._v("从上面的例子可以看到，明明只有一块骨头只够一条小狗吃，五只小狗却一起从睡眠中醒来争抢，对于没有抢到小狗来说，浪费了很多精力。")]),t._v(" "),n("p",[t._v("计算机中的惊群问题指的是：多进程/多线程同时监听同一个套接字，当有网络事件发生时，所有等待的进程/线程同时被唤醒，但是只有其中一个进程/线程可以处理该网络事件，其它的进程/线程获取失败重新进入休眠。")]),t._v(" "),n("p",[t._v("惊群问题带来的是 CPU 资源的浪费和锁竞争的开销。根据使用方式的不同，Linux 上的网络惊群问题分为 accept 惊群和 epoll 惊群两种。")]),t._v(" "),n("h3",{attrs:{id:"accept-惊群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accept-惊群"}},[t._v("#")]),t._v(" accept 惊群")]),t._v(" "),n("p",[t._v("Linux 在早期的版本中，多个进程 accept 同一个套接字会出现惊群问题，以下面的代码为例。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('int main(void) {\n  // ...\n  servaddr.sin_port = htons (9090);\n  bind(listenfd, (struct sockaddr *)&servaddr, sizeof(servaddr));\n  listen(listenfd, 5);\n  clilen = sizeof(cliaddr);\n\n  for (int i = 0; i < 4; ++i) {\n\tif ((fork()) == 0) {\n\t  // 子进程\n\t  printf("child pid: %d\\n", getpid());\n\t  while (1) {\n\t\tconnfd = accept(listenfd, (struct sockaddr *)&cliaddr, &clilen);\n\t\tsleep(2);\n\t\tprintf("processing, pid is %d\\n", getpid());\n\t  }\n\t}\n  }\n  sleep(-1);\n  return 1;\n}\n')])])]),n("p",[t._v("执行 "),n("code",[t._v("nc -i 1 localhost 9090")]),t._v("，输出结果如下。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("child pid: 25050\nchild pid: 25051\nchild pid: 25052\nchild pid: 25053\nprocessing, pid is 25050\n")])])]),n("p",[t._v("可以看到当有网络请求到来时，只会唤醒了其中一个子进程，其他的进程继续休眠阻塞在 accept 调用上，没有被唤醒，这种情况下，accept 系统调用不存在惊群现象。这是因为 Linux 在 2.6 内核版本之前监听同一个 socket 的多个进程在事件发生时会唤醒所有等待的进程，在 2.6 版本中引入了 WQ_FLAG_EXCLUSIVE 选项解决了 accept 调用的惊群问题。")]),t._v(" "),n("p",[t._v("不幸的是现在高性能的服务基本上都使用 epoll 方案来处理非阻塞 IO，接下来我们来看 epoll 惊群。")]),t._v(" "),n("h3",{attrs:{id:"epoll-惊群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#epoll-惊群"}},[t._v("#")]),t._v(" epoll 惊群")]),t._v(" "),n("p",[t._v("epoll 典型的工作模式是父进程执行 bind、listen 以后 fork 出子进程，使用 epoll_wait 等待事件发生，模式如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee57fc0cb",alt:"epoll 工作模式"}})]),t._v(" "),n("p",[t._v("以下面的代码为例。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('int main(void) {\n  // ...\n  sock_fd = create_and_bind("9090");\n  listen(sock_fd, SOMAXCONN);\n\n  epoll_fd = epoll_create(1);\n  event.data.fd = sock_fd;\n  event.events = EPOLLIN;\n  epoll_ctl(epoll_fd, EPOLL_CTL_ADD, sock_fd, &event);\n  events = calloc(MAXEVENTS, sizeof(event));\n\n  for (int i = 0; i < 4; i++) {\n\tif (fork() == 0) {\n\t  while (1) {\n\t\tint n = epoll_wait(epoll_fd, events, MAXEVENTS, -1);\n\t\tprintf("return from epoll_wait, pid is %d\\n", getpid());\n\t\tsleep(2);\n\t\tfor (int j = 0; j < n; j++) {\n          if ((events[i].events & EPOLLERR) || (events[i].events & EPOLLHUP) ||\n              (!(events[i].events & EPOLLIN))) {\n            close(events[i].data.fd);\n            continue;\n          } else if (sock_fd == events[j].data.fd) {\n            struct sockaddr sock_addr;\n            socklen_t sock_len;\n            int conn_fd;\n            sock_len = sizeof(sock_addr);\n            conn_fd = accept(sock_fd, &sock_addr, &sock_len);\n            if (conn_fd == -1) {\n              printf("accept failed, pid is %d\\n", getpid());\n              break;\n            }\n            printf("accept success, pid is %d\\n", getpid());\n            close(conn_fd);\n          }\n      }\n    }\n  }\n}\n')])])]),n("p",[t._v("上面代码运行以后，使用 "),n("code",[t._v("ls -l /proc/your_pid/fd")]),t._v(" 命令可以查看主进程打开的所有 fd 文件，如果 pid 为 24735，执行的结果如下。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("ls -l /proc/24735/fd\n\nlrwx------. 1 ya ya 64 Jan 28 06:20 0 -> /dev/pts/2\nlrwx------. 1 ya ya 64 Jan 28 06:20 1 -> /dev/pts/2\nlrwx------. 1 ya ya 64 Jan 28 00:10 2 -> /dev/pts/2\nlrwx------. 1 ya ya 64 Jan 28 06:20 3 -> 'socket:[72919]'\nlrwx------. 1 ya ya 64 Jan 28 06:20 4 -> 'anon_inode:[eventpoll]'\n")])])]),n("p",[t._v("可以看到主进程会生成 5 个 fd，0~2 分别是 stdin、stdout、stderr，fd 为 3 的描述符是 socket 套接字文件，fd 为 4 的是 epoll 的 fd。")]),t._v(" "),n("p",[t._v("为了表示打开文件，linux 内核维护了三种数据结构，分别是：")]),t._v(" "),n("ul",[n("li",[t._v("内核为每个进程维护了一个其打开文件的「描述符表」（file descriptor table），我们熟知的 fd 为 0 的 stdin 就是属于文件描述符表。")]),t._v(" "),n("li",[t._v("内核为所有打开文件维护了一个系统级的「打开文件表」（open file table），这个打开文件表存储了当前文件的偏移量，状态信息和对 inode 的指针等信息，父子进程的 fd 可以指向同一个打开文件表项。")]),t._v(" "),n("li",[t._v("最后一个是文件系统的 inode 表（i-node table）")])]),t._v(" "),n("p",[t._v("经过 for 循环的 fork，会生成 4 个子进程，这 4 个子进程会继承父进程的 fd。在这种情况下，对应的进程文件描述符表、打开文件表和 inode 表的关系如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee593eeca",alt:"epoll_fd"}})]),t._v(" "),n("p",[t._v("子进程的 epoll_wait 等待同一个底层的 open file table 项，当有事件发送时，会通知到所有的子进程。")]),t._v(" "),n("p",[t._v("编译运行上面的，使用 "),n("code",[t._v("nc -i 1 localhost 9090")]),t._v(" 发起网络请求，输出结果如下所示。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("return from epoll_wait, pid is 25410\nreturn from epoll_wait, pid is 25411\nreturn from epoll_wait, pid is 25409\nreturn from epoll_wait, pid is 25412\naccept success, pid is 25410\naccept failed, pid is 25411\naccept failed, pid is 25409\naccept failed, pid is 25412\n")])])]),n("p",[t._v("可以看到当有新的网络事件发生时，阻塞在 epoll_wait 的多个进程同时被唤醒。在这种情况下，epoll 的惊群还是存在，有不少的措施可以解决 epoll 的惊群。Nginx 为了处理惊群问题，在应用层增加了 accept_mutex 锁，这里不再展开，有兴趣的读者可以再深入学习一下这部分的知识。")]),t._v(" "),n("p",[t._v("为了解决惊群问题，比较省力省心的方式是使用 SO_REUSEPORT 选项，接下来开始介绍这部分的内容。")]),t._v(" "),n("h2",{attrs:{id:"so-reuseport-选项基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#so-reuseport-选项基本使用"}},[t._v("#")]),t._v(" SO_REUSEPORT 选项基本使用")]),t._v(" "),n("p",[t._v("以下面的 test.c 代码为例。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('int main() {\n  struct sockaddr_in serv_addr;\n  int sock_fd = socket(AF_INET, SOCK_STREAM, 0);\n  setsockopt(sock_fd, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(optval));\n  bzero((char *)&serv_addr, sizeof(serv_addr));\n  serv_addr.sin_family = AF_INET;\n  serv_addr.sin_addr.s_addr = htonl(INADDR_ANY);\n  serv_addr.sin_port = htons(9090);\n  int ret = bind(sock_fd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));\n  if (ret < 0) {\n\tprintf("bind error, code is %d\\n", ret);\n\texit(1);\n  }\n  sleep(-1);\n  return 0;\n}\n')])])]),n("p",[t._v("使用 GCC 编译上面的代码，在两个终端中运行这个可执行文件，第二次运行会 bind 端口失败，提示如下。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("bind error, code is -1\n")])])]),n("p",[t._v("修改上面的代码，给 socket 增加 SO_REUSEPORT 选项，如下所示。")]),t._v(" "),n("p",[t._v("​"),n("br"),t._v("\nint main(void) {\nint sock_fd, connect_fd;\nchar buffer[BUF_SIZE];\nstruct sockaddr_in serv_addr, cli_addr;\nint cli_addr_len = sizeof(cli_addr);\nint n;")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('  sock_fd = socket(AF_INET, SOCK_STREAM, 0);\n  int optval = 1;\n\n  setsockopt(sock_fd, SOL_SOCKET, SO_REUSEADDR, &optval, sizeof(optval));\n  setsockopt(sock_fd, SOL_SOCKET, SO_REUSEPORT, &optval, sizeof(optval));\n  bzero((char *)&serv_addr, sizeof(serv_addr));\n  serv_addr.sin_family = AF_INET;\n  serv_addr.sin_addr.s_addr = INADDR_ANY;\n  serv_addr.sin_port = htons(9090);\n\n  int ret = bind(sock_fd, (struct sockaddr *)&serv_addr, sizeof(serv_addr));\n  if (ret < 0) {\n    printf("bind error, code is %d\\n", ret);\n    exit(1);\n  }\n\n  listen(sock_fd, 5);\n\n  while (1) {\n    connect_fd = accept(sock_fd, (struct sockaddr *)&cli_addr, &cli_addr_len);\n    printf("process new request\\n");\n    n = read(connect_fd, buffer, BUF_SIZE);\n    write(connect_fd, buffer, n);\n    close(connect_fd);\n  }\n  return 0;\n}\n')])])]),n("p",[t._v("重新编译上面的代码，在两个终端中分别运行这个可执行文件，这次不会出现 bind 失败的情况。使用 "),n("code",[t._v("ss")]),t._v(" 命令来查看当前的套接字")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('ss -tlnpe | grep -i 9090\nState      Recv-Q Send-Q Local Address:Port Peer Address:Port\nLISTEN     0      5            *:9090 *:*                   users:(("reuse_port",pid=26897,fd=3)) uid:1000 ino:2168508 sk:ffff880079033e00 <->\nLISTEN     0      5            *:9090 *:*                   users:(("reuse_port",pid=26855,fd=3)) uid:1000 ino:2168453 sk:ffff880079037440 <->\n')])])]),n("p",[t._v("注意到最后一列中的信息，可以看到监听 9090 端口的是两个不同的 socket，它们的 inode 号分别是 2168508 和 2168453。")]),t._v(" "),n("p",[t._v("ss 是一个非常有用的命令，它的选项解释如下。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("-t, --tcp\n    显示 TCP 的 socket\n-l, --listening\n    只显示 listening 状态的 socket，默认情况下是不显示的。\n-n, --numeric\n    显示端口号而不是映射的服务名\n-p, --processes\n    显示进程名\n-e, --extended\n    显示 socket 的详细信息\n")])])]),n("p",[t._v("写一段 shell 脚本请求 10 次 9090 端口的服务，脚本内容如下。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('for i in {1..10} ; do\n   echo "hello" | nc -i 1 localhost 9090\ndone\n')])])]),n("p",[t._v("执行脚本，终端 1 中的进程处理了四次请求，终端 2 中的进程处理了六次请求，如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee5bcea1f",alt:""}})]),t._v(" "),n("p",[t._v("这个处理过程如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53ee5a764e1",alt:"reuseport"}})]),t._v(" "),n("p",[t._v("当一个新请求到来，内核是如何确定应该由哪个 LISTEN socket 来处理？接下来我们来看 SO_REUSEPORT 底层实现原理，")]),t._v(" "),n("h2",{attrs:{id:"so-reuseport-源码分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#so-reuseport-源码分析"}},[t._v("#")]),t._v(" SO_REUSEPORT 源码分析")]),t._v(" "),n("p",[t._v("内核为处于 LISTEN 状态的 socket 分配了大小为 32 哈希桶。监听的端口号经过哈希算法运算打散到这些哈希桶中，相同哈希的端口采用拉链法解决冲突。当收到客户端的 SYN 握手报文以后，会根据目标端口号的哈希值计算出哈希冲突链表，然后遍历这条哈希链表得到最匹配的得分最高的 Socket。对于使用 SO_REUSEPORT 选项的 socket，可能会有多个 socket 得分最高，这个时候经过随机算法选择一个进行处理。")]),t._v(" "),n("p",[t._v("假设有 "),n("code",[t._v("127.0.0.1:2222")]),t._v("、"),n("code",[t._v("127.0.0.1:9998")]),t._v("、"),n("code",[t._v("10.211.55.17:9966")]),t._v("、"),n("code",[t._v("10.211.55.10:2222")]),t._v(" 这几个监听套接字，这几个套接字被哈希到同一个链表中，当有 "),n("code",[t._v("127.0.0.1:2222")]),t._v(" 套接字的 SYN 包到来时，会遍历这个哈希链表，查找得分最高的两个 socket，然后通过随机选择其中的一个。")]),t._v(" "),n("p",[t._v("如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53f2008cf8b",alt:"reuse-port-hash"}})]),t._v(" "),n("p",[t._v("以 4.4 内核版本为例，这部分源码如下所示。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("struct sock *__inet_lookup_listener(struct net *net,\n\t\t\t\t    struct inet_hashinfo *hashinfo,\n\t\t\t\t    const __be32 saddr, __be16 sport,\n\t\t\t\t    const __be32 daddr, const unsigned short hnum,\n\t\t\t\t    const int dif)\n{\n\tstruct sock *sk, *result;\n\tstruct hlist_nulls_node *node;\n\t// 根据目标端口号生成哈希表的槽位值，这个函数返回 [0-31] 之间的值\n\tunsigned int hash = inet_lhashfn(net, hnum);\n\t// 根据哈希槽位得到当前 LISTEN 套接字的链表\n\tstruct inet_listen_hashbucket *ilb = &hashinfo->listening_hash[hash];\n\t// 接下来查找最符合条件的 LISTEN 状态的 socket\n\tint score, hiscore, matches = 0, reuseport = 0;\n\tu32 phash = 0;\n\n\trcu_read_lock();\nbegin:\n\tresult = NULL;\n\thiscore = 0;\n\t// 遍历链表中的所有套接字，给每个套接字匹配程度打分\n\tsk_nulls_for_each_rcu(sk, node, &ilb->head) {\n\n\tstruct inet_sock *inet_me = inet_sk(sk);\n\tint xx = inet_me->inet_num;\n\n\tscore = compute_score(sk, net, hnum, daddr, dif);\n\t\tif (score > hiscore) {\n\t\t\tresult = sk;\n\t\t\thiscore = score;\n\t\t\treuseport = sk->sk_reuseport;\n\t\t\t// 如果 socket 启用了 SO_REUSEPORT 选项，通过源地址、源端口号、目标地址、目标端口号再次计算哈希值\n\t\t\tif (reuseport) {\n\t\t\t\tphash = inet_ehashfn(net, daddr, hnum,\n\t\t\t\t\t\t     saddr, sport);\n\t\t\t\tmatches = 1;\n\t\t\t}\n\t\t} else if (score == hiscore && reuseport) { // 如果启用了 SO_REUSEPORT，则根据哈希值计算随机值\n\t\t    // matches 表示当前已经查找到多少个相同得分的 socket\n\t\t\tmatches++;\n\t\t\t// 通过 phash 计算 [0, matches-1] 之间的值\n\t\t\tint res = reciprocal_scale(phash, matches);\n\t\t\tif (res == 0)\n\t\t\t\tresult = sk;\n\t\t\t// 根据 phash 计算下一轮计算的 phash 随机值\n\t\t\tphash = next_pseudo_random32(phash);\n\t\t}\n\t}\n\t/*\n\t * if the nulls value we got at the end of this lookup is\n\t * not the expected one, we must restart lookup.\n\t * We probably met an item that was moved to another chain.\n\t */\n\tif (get_nulls_value(node) != hash + LISTENING_NULLS_BASE)\n\t\tgoto begin;\n\tif (result) {\n\t\tif (unlikely(!atomic_inc_not_zero(&result->sk_refcnt)))\n\t\t\tresult = NULL;\n\t\telse if (unlikely(compute_score(result, net, hnum, daddr,\n\t\t\t\t  dif) < hiscore)) {\n\t\t\tsock_put(result);\n\t\t\tgoto begin;\n\t\t}\n\t}\n\trcu_read_unlock();\n\treturn result;\n}\n")])])]),n("p",[t._v("从上面的代码可以看出当收到 SYN 包以后，内核需要遍历整条冲突链查找得分最高的 socket，非常低效。Linux 内核在 4.5 和 4.6 版本中分别为 UDP 和 TCP 引入了 "),n("code",[t._v("SO_REUSEPORT group")]),t._v(" 的概念，在查找匹配的 socket 时，就不用遍历整条冲突链，对于设置了 SO_REUSEPORT 选项的 socket 经过二次哈希找到对应的 SO_REUSEPORT group，从中随机选择一个进行处理。以 4.6 内核代码为例。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("struct sock *__inet_lookup_listener(struct net *net,\n\t\t\t\t    struct inet_hashinfo *hashinfo,\n\t\t\t\t    struct sk_buff *skb, int doff,\n\t\t\t\t    const __be32 saddr, __be16 sport,\n\t\t\t\t    const __be32 daddr, const unsigned short hnum,\n\t\t\t\t    const int dif)\n{\n\tstruct sock *sk, *result;\n\tstruct hlist_nulls_node *node;\n\n\t// 根据目标端口号计算 listening_hash 的哈希槽位，hash 是一个 [0, 31] 之间的值\n\tunsigned int hash = inet_lhashfn(net, hnum);\n\t// 根据哈希槽位找到冲突链\n\tstruct inet_listen_hashbucket *ilb = &hashinfo->listening_hash[hash];\n\tint score, hiscore, matches = 0, reuseport = 0;\n\tbool select_ok = true;\n\tu32 phash = 0;\n\nbegin:\n\tresult = NULL;\n\t// 当前遍历过程中的最高得分\n\thiscore = 0;\n\tsk_nulls_for_each_rcu(sk, node, &ilb->head) {\n\t   // 根据匹配程度计算每个得分\n\t\tscore = compute_score(sk, net, hnum, daddr, dif);\n\t\tif (score > hiscore) {\n\t\t\tresult = sk;\n\t\t\thiscore = score;\n\t\t\treuseport = sk->sk_reuseport;\n\n\t\t\t// 有更合适的 reuseport 组，则根据 daddr、hnum、saddr、sport 再次计算哈希值\n\t\t\tif (reuseport) {\n\t\t\t\tphash = inet_ehashfn(net, daddr, hnum,\n\t\t\t\t\t\t     saddr, sport);\n\t\t\t\tif (select_ok) {\n\t\t\t\t\tstruct sock *sk2;\n\t\t\t\t\t// 根据这个哈希值从 SO_REUSEPORT group 中选择一个 socket\n\t\t\t\t\tsk2 = reuseport_select_sock(sk, phash, skb, doff);\n\t\t\t\t\tif (sk2) {\n\t\t\t\t\t\tresult = sk2;\n\t\t\t\t\t\tgoto found;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tmatches = 1;\n\t\t\t}\n\t\t} else if (score == hiscore && reuseport) {\n\t\t   // 当前面的 SO_REUSEPORT group 查找不适用时，退化为 4.5 版本之前的算法。\n\t\t\tmatches++;\n\t\t\tif (reciprocal_scale(phash, matches) == 0)\n\t\t\t\tresult = sk;\n\t\t\tphash = next_pseudo_random32(phash);\n\t\t}\n\t}\n\t/*\n\t * if the nulls value we got at the end of this lookup is\n\t * not the expected one, we must restart lookup.\n\t * We probably met an item that was moved to another chain.\n\t */\n\tif (get_nulls_value(node) != hash + LISTENING_NULLS_BASE)\n\t\tgoto begin;\n\tif (result) {\nfound:\n\t\tif (unlikely(!atomic_inc_not_zero(&result->sk_refcnt)))\n\t\t\tresult = NULL;\n\t\telse if (unlikely(compute_score(result, net, hnum, daddr,\n\t\t\t\t  dif) < hiscore)) {\n\t\t\tsock_put(result);\n\t\t\tselect_ok = false;\n\t\t\tgoto begin;\n\t\t}\n\t}\n\trcu_read_unlock();\n\treturn result;\n}\n")])])]),n("p",[t._v("从 SO_REUSEPORT group 中查找的逻辑如下所示。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("struct sock *reuseport_select_sock(struct sock *sk,\n\t\t\t\t   u32 hash,\n\t\t\t\t   struct sk_buff *skb,\n\t\t\t\t   int hdr_len)\n{\n\tstruct sock_reuseport *reuse = sk->sk_reuseport_cb;\n    // 当前 group 中 socket 的数量\n\tu16 socks = reuse->num_socks;\n\t// reciprocal_scale 函数根据 hash 生成 [0, socks-1] 之间的随机数\n\t// 根据哈希索引选择命中的 socket\n\tstruct sock *sk2 = reuse->socks[reciprocal_scale(hash, socks)];\n\treturn sk2;\n}\n")])])]),n("p",[t._v("过程如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53f20617a8a",alt:"reuse_port_2nd_hash"}})]),t._v(" "),n("h2",{attrs:{id:"so-reuseport-与安全性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#so-reuseport-与安全性"}},[t._v("#")]),t._v(" SO_REUSEPORT 与安全性")]),t._v(" "),n("p",[t._v("试想下面的场景，你的进程进程监听了某个端口，不怀好意的其他人也可以监听相同的端口来“窃取”流量信息，这种方式被称为端口劫持（port hijacking）。SO_REUSEPORT 在安全性方面的考虑主要是下面这两点。")]),t._v(" "),n("p",[t._v("1、只有第一个启动的进程启用了 SO_REUSEPORT 选项，后面启动的进程才可以绑定同一个端口。 2、后启动的进程必须与第一个进程的有效用户ID（effective user ID）匹配才可以绑定成功。")]),t._v(" "),n("h2",{attrs:{id:"so-reuseport-的应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#so-reuseport-的应用"}},[t._v("#")]),t._v(" SO_REUSEPORT 的应用")]),t._v(" "),n("p",[t._v("SO_REUSEPORT 带来了两个明显的好处：")]),t._v(" "),n("ul",[n("li",[t._v("实现了内核级的负载均衡")]),t._v(" "),n("li",[t._v("支持滚动升级（Rolling updates）")])]),t._v(" "),n("p",[t._v("内核级的负载均衡在前面的 Nginx 的例子中已经介绍过了，这里不再赘述。使用 SO_REUSEPORT 做滚动升级的过程如下图所示。")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/31/16ffa53f205214ae",alt:"rolling-update"}})]),t._v(" "),n("p",[t._v("步骤如下所示。")]),t._v(" "),n("ol",[n("li",[t._v("新启动一个新版本 v2 ，监听同一个端口，与 v1 旧版本一起处理请求。")]),t._v(" "),n("li",[t._v("发送信号给 v1 版本的进程，让它不再接受新的请求")]),t._v(" "),n("li",[t._v("等待一段时间，等 v1 版本的用户请求都已经处理完毕时，v1 版本的进程退出，留下 v2 版本继续服务")])]),t._v(" "),n("h2",{attrs:{id:"小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),n("p",[t._v("这个小节主要介绍了 SO_REUSEPORT 参数相关的知识，本来是一个很简单的参数选项，为了讲清楚来龙去脉，还是挺复杂的。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/book/6844733788681928712/section/6844733788832923661",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);