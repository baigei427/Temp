//MCCScript 1.0

MCC.LoadBot(new MccBot());

//MCCScript Extensions

// The code and comments above are defining a "Script Metadata" section

// Every single chat bot (script) must be a class which extends the ChatBot class.
// Your class must be instantiates in the "Script Metadata" section and passed to MCC.LoadBot function.
class MccBot : ChatBot
    {
        // This method will be called when the script has been initialized for the first time, it's called only once
        // Here you can initialize variables, eg. Dictionaries. 等...
        public override void Initialize(){
            LogToConsole("Mcc机器脚本已成功加载！");
            
        }
        public override void Update(){
            // Console.WriteLine("Dick!");
        }


        public override void AfterGameJoined(){
            // 判断玩家数量
            if(GetOnlinePlayers().Length != 1)return;
            // 判断位置
            if(
                (int)GetCurrentLocation().X != 17 &&
                (int)GetCurrentLocation().Y != 4 &&
                (int)GetCurrentLocation().Z != 17
            )return;
            LogToConsole("登陆中。。。");
            AutoLogin();
            
        }

        // public override bool OnDisconnect(DisconnectReason reason, string message){
        //     /*
        //         哇多麽好的消息啊
        //         你登录太慢啦
        //         15:50:30 [MCC] [MccBot] 连接丢失
        //         15:50:30 [MCC] [MccBot] 原因：ConnectionLost
        //         15:50:30 [MCC] [MccBot] 消息：失去连接。
        //     */

        //     // LogToConsole("连接丢失");
        //     LogToConsole("原因："+ reason.ToString());
        //     LogToConsole("消息："+ message);
        //     // 云梦娘 ▶  云梦都群组端正在重启维护,请稍候再来~
        //     if(Regex.IsMatch(message,"正在重启维护"))DisconnectAndExit();
        //     if(reason.ToString() == "ConnectionLost")ReconnectToTheServer();
        //     return true;
        // }

        // This is a function that will be run when we get a chat message from a server
        // In this example it just detects the type of the message and prints it out
        public override void GetText(string text){
            text = GetVerbatim(text);

            //欢迎新玩家 xiaoyuda 加入服务器！ [点我欢迎] *气氛组(迫真)
            // if (Regex.IsMatch(text, @"欢迎新玩家 (\S*) 加入服务器！ \[点我欢迎\]")){
            //     Match match = Regex.Match(text, @"欢迎新玩家 (\S*) 加入服务器！ \[点我欢迎\]");
            //     string result = match.Groups[1].Value;;
            //     System.Threading.Tasks.Task.Run(async () =>{
            //         await System.Threading.Tasks.Task.Delay(new Random().Next(5)*1000);
            //         SendText($"/welcome-click {result}");
            //     });
            // }

            // 过来 [envnon ➥ gebai514] 过来
            if (Regex.IsMatch(text, $@"^\[\S* ➥ {GetUsername()}\] 过来")){
                SendText("/hub");
                Joinskyblock();
            }
            // 过来 [envnon ➥ gebai514] tp
            if (Regex.IsMatch(text, $@"^\[(\S*) ➥ {GetUsername()}\] tp")){
                Match match = Regex.Match(text, $@"^\[(\S*) ➥ {GetUsername()}\] tp");
                string result = match.Groups[1].Value;
                SendText($"/tpa {result}");
            }
            // 出去 [envnon ➥ gebai514] 出去
            if (Regex.IsMatch(text, $@"^\[\S* ➥ {GetUsername()}\] 出去")){
                SendText("/hub");
            }
            // 进入1.21空岛
            if (Regex.IsMatch(text, $@"^\[\+\] \[\S*\] {GetUsername()} 进入了大厅")||Regex.IsMatch(text, "^你已经在 大厅服务器 中了！")){
                Joinskyblock();
            }
            // 传送 
            if (Regex.IsMatch(text, @"^\S* 请求传送到你这里!|^\S* 请求传送到他们的位置!")){
                SendText("/tpaccept");
                return;
            }
            //签到
            if (Regex.IsMatch(text, @"^云梦娘 >>> 你今天还没有签到! \[点击此处打开签到界面\]")){
                System.Threading.Tasks.Task.Run(async () =>{
                    await System.Threading.Tasks.Task.Delay(new Random().Next(5)*1000+new Random().Next(1000));
                    SendText("/signin click");
                });
            }
        }
        public void Joinskyblock(){
            _ = System.Threading.Tasks.Task.Run(async () =>
                {
                    await System.Threading.Tasks.Task.Delay(1000);
                    PerformInternalCommand("changeslot 1");
                    await System.Threading.Tasks.Task.Delay(400);
                    PerformInternalCommand("useitem");
                    await System.Threading.Tasks.Task.Delay(400);
                    PerformInternalCommand("inventory container click 23 LeftClick");
                });
        }
        public void AutoLogin(){
            string Username = GetUsername();
            string[] lines = File.ReadAllLines("./passwd.txt", Encoding.UTF8);
            for(int i = 0; i<lines.Length;i++){
            if(lines[i] == Username){
                SendText($"/login {lines[i+1]}");
                LogToConsole("已成功自动登陆！");
                return;
                }
            }
        }
    }