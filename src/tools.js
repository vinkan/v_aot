// 将图片转换为 Base64 编码
export const getImageAsBase64 = (url, callback) => {
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

// 定义颜色
export const typeColor = (type = "default") => {
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