// 定义类型
const TYPE_DESC = [
    { '字符串': '%s' },
    { '整数': '%d or %i' },
    { '浮点数': '%f' },
    { '对象': '%o' },
    { 'CSS 样式': '%c' }
]
// 定义颜色
const typeColor = (type = "default") => {
    let color = "";
    switch (type) {
        case "default":
            color = "#35495E";
            break;
        case "primary":
            color = "#3488ff";
            break;
        case "success":
            color = "#43B883";
            break;
        case "warning":
            color = "#e6a23c";
            break;
        case "danger":
            color = "#f56c6c";
            break;
        default:
            break;
    }
    return color;
};

// 定义对象
let v_aot = {}

// 定义方法
v_aot.log = (message) => {
    console.log(message);
}
v_aot.txt = (label, value, type = "default") => {
    console.log(`${label}%c${value}`, `color: ${typeColor(type)};`);
}
v_aot.capsule = (title, info, type = "default") => {
    console.log(
        `%c ${title} %c ${info} %c`,
        "background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;",
        `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;border-left: 1px solid #fff;`,
        "background:transparent"
    );
};

// 将图片转换为 Base64 编码
function getImageAsBase64(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}
v_aot.pa = async (url) => {
    await new Promise((resolve, reject) => {
        try {
            getImageAsBase64(url, (base64String) => {
                console.log('%c ', `padding: 100px 200px;background: url(${base64String}) no-repeat; background-size: contain;font-size:130px;line-height: 50px;`);
                resolve({
                    code: 200,
                    success: true,
                    message: 'The base64 is generated successfully.'
                })
            })
        } catch (error) {
            reject(toJson(error));
        }
    })
}


export default v_aot