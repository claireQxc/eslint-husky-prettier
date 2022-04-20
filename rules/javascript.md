## js 编写规范

#### 命名规范
1. 文件名一律采用小驼峰命名，例如：
userInfo.js、getLocation.js

2. 组件名一律采用大驼峰命名，例如：
ZhizuButton.js(x), GetLocation.js(x)

3. 变量名尽量采用小驼峰命名，例如：

```js

const userName = 'tom';

const userLocation = {
  lat: 120.00,
  lng: 60.00
};

const productCount = 12;

```

4. 常量一律采用大写命名，大写字母之间用下划线分割，例如：

```js

const COUNT = 10;
const ZHIZU_URL = 'https://www.zhizukj.com';

```

5. 函数名同变量名，采用小驼峰命名，若函数为增删改查等的某一状态时，需前缀用动词表示，例如：
```js

// 获取经纬度
const getLocation = ({ lat, lng }) => {};

// 设置用户信息
const setUserInfo = (info) => {}; 

// 添加用户信息
const addUserInfo = (info) => {};

// 改变订单状态
const changeOrderStatus = (status) => {};

// 动词大致可参考，可扩充
/**
  get 获取/set 设置,        

  add 增加/remove 删除

  create 创建/destory 移除        

  start 启动/stop 停止

  open 打开/close 关闭,        

  read 读取/write 写入

  load 载入/save 保存,        

  create 创建/destroy 销毁

  begin 开始/end 结束,        

  backup 备份/restore 恢复

  import 导入/export 导出,        

  split 分割/merge 合并

  inject 注入/extract 提取,        

  attach 附着/detach 脱离

  bind 绑定/separate 分离,        

  view 查看/browse 浏览

  edit 编辑/modify 修改,        

  select 选取/mark 标记

  copy 复制/paste 粘贴,        

  undo 撤销/redo 重做

  insert 插入/delete 移除,        

  add 加入/append 添加

  clean 清理/clear 清除,        

  index 索引/sort 排序

  find 查找/search 搜索,        

  increase 增加/decrease 减少

  play 播放/pause 暂停,        

  launch 启动/run 运行

  compile 编译/execute 执行,        

  debug 调试/trace 跟踪

  observe 观察/listen 监听,        

  build 构建/publish 发布

  input 输入/output 输出,        

  encode 编码/decode 解码

  encrypt 加密/decrypt 解密,        

  compress 压缩/decompress 解压缩

  pack 打包/unpack 解包,        

  parse 解析/emit 生成

  connect 连接/disconnect 断开,        

  send 发送/receive 接收

  download 下载/upload 上传,        

  refresh 刷新/synchronize 同步

  update 更新/revert 复原,        

  lock 锁定/unlock 解锁

  check out 签出/check in 签入,        

  submit 提交/commit 交付

  push 推/pull 拉,        

  expand 展开/collapse 折叠

  begin 起始/end 结束,        

  start 开始/finish 完成

  enter 进入/exit 退出,        

  abort 放弃/quit 离开

  obsolete 废弃/depreciate 废旧,        

  collect 收集/aggregate 聚集

  涉及返回逻辑值的函数可以使用is，has，contains等表示逻辑的词语代替动词
 * 
 * /

```

6. 函数使用箭头函数命名需注意格外上下文作用域

#### 注释

1. 单行注释

- 若注释前面存在代码，则代码与双斜线之间保留一个空格，且双斜线与注释之间保留一个空格，例如：

```js

const form = {
  name: 'tom', // 姓名
  age: 20, // 年龄
  sex: '男' // 性别
};

```

- 若注释前不存在代码，则仅需双斜线与注释之间保留一个空格，例如：

```js

// 用户信息
const form = {
  name: 'tom',
  age: 20,
  sex: '男'
};

```

2. 多行注释

- 以/**开始，\*\/结尾,例如：
```js

/**
 * 若status为1，...
 * 若status为2，...
*/

```

- 函数注释, 可以生成
```js

/**
 * 获取用户信息
 * @param name {String} 获取用户姓名
 * @param age {Number} 获取用户年龄
 * @return {Object} 返回用户信息
*/

const getUserInfo = ({ name, age }) => {
  return { name, age };
};

```

#### 赋值

1. 变量赋值：
```js

const cabinetName = 'xx柜子';
const cabinetNo = 'SN202002022012';

// bad
const url = cabinetName + '-' + cabinetNo;

// good
const cabinet = `${cabinetName}-${cabinetNo}`;

```

2. 数组解构赋值：
```js

const arr = [1, 2, 3];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;

```

3. 对象解构赋值
```js

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
 const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {};

```

4. 使用扩展运算符（...）拷贝对象或数组

```js
// 拷贝对象
const items = {
  name: 'tom',
  age: 20
};

// bad
const itemsCopy = items;

// good
const itemsCopy = Object.assign({}, items);

// best
const itemsCopy = { ...items };


// 拷贝数组
const arrayData = [1, 2, 3, 4];

// bad;
const newArrayData = arrayData;

// good
const newArrayData = [...arrayData];

```

#### 格式规范

1. 等号和其他(计算或比较)符号两边必须要有空格，例：
```js

const name = 'tom';
const getName = () => {};
const num = 1 + 2;
if (num !== 1) {};

```

2. for, if, else if, else, switch, while小括号两边必须要有空格，例：
```js

// for
for (let i = 0; i < 10; i++) {};

// if  else if  else
if (a > b) {

} else if (a > c) {

} else {

};

// switch
switch (sex) {
  case 1:
    return '男';
  case 2:
    return '女';
  default:
    return '未知';
}

// while
while (i < 10) {
  i++;
}

```

3. 箭头函数两边必须要有空格，例：
```js

const data = [1, 2, 3].filter(v => v >= 1);
const getUser = () => {};

```
4. 代码块中的逗号后必须要有空格，例：
```js

this.$refs.ope.showDialog('2', item);

const [first, ...other] = [1, 2, 3].map((v, i) => v > 1);

```

4. js引用必须全部使用单引号，例：
```js

// bad
const user = "tom";

const sex = "man";

if (name === 'tom') {};

// good
const user = 'tom';

const sex = 'man';

if (name === 'tom') {};

```

#### 写法规范

1. 在做比较时必须使用全等，或者非全等，例：
```js

for ('abcd'.indexOf('e') === -1) {};

const data = [1, 2, 3].find(v => v === 2);

```
2. 逻辑判断只有一层时，尽量使用三元表达式， 或者使用" && ||"，例：
```js

// bad
const sex = null;

if (status === 1) {
  sex =  '男';
} else {
  sex = '女';
}

// good
const sex = status === 1 ? '男' : '女' 

```

3. 代码复杂度尽量不要超过6层，（超过6层一定是你写的逻辑有问题，不接受反驳）