// 构造函数的封装
function Tab(str) {
    this.box = document.querySelector(str);
    this.arr = [
        {
            // 选项的名字
            tabName: 1,
            cont: "选项1的content"
        },
        {
            // 选项的名字
            tabName: 2,
            cont: "选项2的content"
        },
        {
            // 选项的名字
            tabName: 3,
            cont: "选项3的content"
        }
    ];
    this.init();
}

// 放入方法
// 封装构造函数第一个一般是init     初始化函数 把写的所有功能调用一次
Tab.prototype.init = function () {
    this.list();
    this.qieHuan();
};

// 功能1:把html转化成js
Tab.prototype.list = function () {
    var header = document.createElement("div");
    header.className = 'header';
    var main = document.createElement("div");
    main.className = 'main';
    var span, div;
    var arr = this.arr;
    for (let i = 0; i < arr.length; i++) {
        // 新建span标签
        span = document.createElement('span')
        span.innerText = arr[i].tabName;
        // 添加到header标签内部
        header.appendChild(span);
        // ------------------创建content内容
        div = document.createElement("div");
        // 添加内容
        div.innerText = arr[i].cont;
        // 添加到mian里面
        main.appendChild(div);
    }
    this.box.appendChild(header);
    this.box.appendChild(main);


    // 加类名
    var span_1 = box.querySelector(".header span:first-child");
    span_1.className = "ac";
    var div_1 = box.querySelector(".main div:first-child");
    div_1.className = "active";
};

// 功能2:点击切换
Tab.prototype.qieHuan = function () {
    // this:实例化对象，可以使用构造函数上所有属性和方法
    var spans = this.box.querySelectorAll("span");
    var conts = this.box.querySelectorAll(".main div");
    console.log(spans);
    for (let j = 0; j < spans.length; j++) {

        // 把下标保存到自定义属性index中
        spans[j].setAttribute('index', j);
        spans[j].onclick = function () {
            for (let k = 0; k < spans.length; k++) {
                spans[k].className = "";
            }
            this.className = 'ac';
            // 获取自定义属性:获取下标
            var index = this.getAttribute("index");
            // console.log(index)
            for (let f = 0; f < conts.length; f++) {
                if (f == index) {
                    conts[f].className = "active";
                }
                else {
                    conts[f].className = "";
                }
            }
        }
    }
};














// var box = document.querySelector("#box")
// var arr = [
//     {
//         // 选项的名字
//         tabName: 1,
//         cont: "选项1的content"
//     },
//     {
//         // 选项的名字
//         tabName: 2,
//         cont: "选项2的content"
//     },
//     {
//         // 选项的名字
//         tabName: 3,
//         cont: "选项3的content"
//     }
// ];

//   先新建div标签
// var header = document.createElement("div");
// header.className = 'header';
// var main = document.createElement("div");
// main.className = 'main';
// var span, div;
// for (let i = 0; i < arr.length; i++) {
//     // 新建span标签
//     span = document.createElement('span')
//     span.innerText = arr[i].tabName;
//     // 添加到header标签内部
//     header.appendChild(span);
//     // ------------------创建content内容
//     div = document.createElement("div");
//     // 添加内容
//     div.innerText = arr[i].cont;
//     // 添加到mian里面
//     main.appendChild(div);
// }
// box.appendChild(header);
// box.appendChild(main);

// // 第一个加类名
// var span_1 = box.querySelector(".header span:first-child");
// span_1.className = "ac";
// var div_1 = box.querySelector(".main div:first-child");
// div_1.className = "active";

// 设置一一对应关系
// var spans = box.querySelectorAll("span");
// var conts = box.querySelectorAll(".main div");
// console.log(spans);
// for (let j = 0; j < spans.length; j++) {

//     // 把下标保存到自定义属性index中
//     spans[j].setAttribute('index', j);
//     spans[j].onclick = function () {
//         for (let k = 0; k < spans.length; k++) {
//             spans[k].className = "";
//         }
//         this.className = 'ac';
//         // 获取自定义属性:获取下标
//         var index = this.getAttribute("index");
//         // console.log(index)
//         for (let f = 0; f < arr.length; f++) {
//             if (f == index) {
//                 conts[f].className = "active";
//             }
//             else {
//                 conts[f].className = "";
//             }
//         }
//     }
// }