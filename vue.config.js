const url = 'http://touchehui.longpeng.dev.cq1080.com/';
// const url = '/';

module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        port: 8001,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
        proxy: {
            '/manage/*': {
                target: url,
                secure: false,
                changeOrigin: true
            },
            '/images/': {
                target: url,
                secure: false,
                changeOrigin: true
            }
        }
    }
};