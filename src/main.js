// 引入所需
import { version } from '../package.json';

// 定义类型
const TYPE_DESC = [
    { '字符串': '%s' },
    { '整数': '%d or %i' },
    { '浮点数': '%f' },
    { '对象': '%o' },
    { 'CSS 样式': '%c' }
]
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


export default v_aot