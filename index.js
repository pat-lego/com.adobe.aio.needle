var needle = require('needle');

needle.get('https://deploy-service.app-builder.adp.adobe.io/runtime/api/v1/namespaces/16225-665azurecat-stage/packages?', {
    accept: 'application/json',
    user_agent: 'aio-cli-plugin-app/@adobe/aio-cli/11.0.0 (darwin-x64; node-v20.9.0; zsh)',
    headers: {
        'authorization': 'Bearer ',
        'x-namespace-id': '16225-665azurecat-stage'
    },
    connection: 'keep-alive'
}, function(err, resp) {
    if (err) {
        console.error("Received error", err)
        return;
    }

    console.info({'code' :resp.statusCode})
    console.info({'body': resp.body})
    console.info({'headers': resp.headers})
})