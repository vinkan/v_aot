import { version } from '../package.json';

export default function c() {
    console.log(`当前版本号%c${version}`, 'color: red;');
}
