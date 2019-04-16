export default (message) => {
    let result = '';
    if(message && message.indexOf(':') !== -1){
        const status = message.split(':')[0];
        const action = message.split(':')[1].split('_')[0];
        switch (action) {
            case 'create':
                result += '新增';
                break;
            case 'get':
                result += '获取';
                break;
            case 'update':
                result += '更新';
                break;
            case 'delete':
                result += '删除';
                break;
            default:
                break;
        }

        switch (status) {
            case 'success':
                result += '成功';
                break;
            case 'error':
                result += '失败';
                break;
            default:
                break;
        }
    }else{
        result = message;
    }
    return result;
};
