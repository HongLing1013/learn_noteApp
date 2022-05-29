// 取得資料
const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
// 新增按鈕
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

// 給他一個陣列
const listContent = []

function render() {
    // 使用HTML的方式 用list把我們下面內容印出來
    // 所以先宣告一個html的空字串
    // 渲染頁面的list
    let htmlStr = ''

    // 透過forEach取得陣列內容
    // 等同for ( let i = 0; i < listContent.length; i++){}
    // item代表的意思是listContent裡面有多少內容 forEach就會執行幾次
    // 單引號沒辦法換行
    // 使用``包起來內容 可以換行 也可以插入變數
        listContent.forEach(function (item){
            htmlStr = htmlStr + `
            <div class="item">
                <div>
                    <p>內容：${item.content}</p>
                    <p>時間：${item.date} ${item.time}</p>
                </div>
            </div>
            `
    })

    // 把list的html變成字串
    // 輸入後內容會跟陣列一樣 一一顯示在下面
    list.innerHTML = htmlStr
}

// 偵測按下去以後要取得資料
addedBtn.addEventListener('click', function(){

    // 取得資訊後push到上面的陣列裡面
    // 但如果希望新增的東西在最上層 就要使用unshift
    // listContent.push({
    //     content: content.value,
    //     date: date.value,
    //     time:time.value,
    // })

    // 取得資訊後unshift到陣列裡面
    listContent.unshift({
        content: content.value,
        date: date.value,
        time:time.value,
    })

    render()
})

// 做刪除
deletedBtn.addEventListener('click', function () {
    // 如上面listContent.是使用push就用pop
    // 如用shift這裡也要用shift
    // listContent.pop()
    listContent.shift()

    render()
    
})