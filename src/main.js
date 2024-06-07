import { getImageAsBase64, typeColor } from './tools'
// 定义类型
const TYPE_DESC = [
    { '字符串': '%s' },
    { '整数': '%d or %i' },
    { '浮点数': '%f' },
    { '对象': '%o' },
    { 'CSS 样式': '%c' }
]

// 定义对象
let v_aot = {}

// 定义方法
v_aot.log = (message) => {
    console.log(message);
}
v_aot.txt = (label, value, type = "default") => {
    console.log(`${label}%c${value}`, `margin-left:10px;color: ${typeColor(type)};`);
}
v_aot.capsule = (title, info, type = "default") => {
    console.log(
        `%c ${title} %c ${info} %c`,
        "background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;",
        `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;border-left: 1px solid #fff;`,
        "background:transparent"
    );
};

v_aot.pa = async (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            await getImageAsBase64(url, async (base64String) => {
                await console.log('%c ', `padding: 100px 200px;background: url(${base64String}) no-repeat; background-size: contain;font-size:130px;line-height: 50px;`);
                return resolve({
                    code: 200,
                    success: true,
                    message: 'The base64 is generated successfully.'
                })
            })
        } catch (error) {
            return reject(toJson(error));
        }
    })
}

v_aot.table = (object) => {
    const { header, body } = object
    // 将数组转换为对象数组
    const scoreData = body.map(item => {
        const obj = {};
        header.forEach((key, index) => {
            obj[key] = item[index];
        });
        return obj;
    });
    console.table(scoreData, header);
}


export default v_aot