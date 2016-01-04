(function() {
    var source = document.getElementsByTagName('script')[0].getAttribute('src'),
        params = JSON.parse(decodeURIComponent(source.substring(source.indexOf('?')+1, source.lastIndexOf('&')))),
        buffer = document.createElement('textarea'),
        notify = document.createEvent('Event'),
        result = {};
    for (var param in params) {
        var depth = params[param].split('.');
        for (result[param] = window; depth.length; )
            try {
                result[param] = result[param][depth.shift()];
            } catch(e) {
                break;
            }
    }
    buffer.style.cssText = 'display: none';
    console.log(result);
    buffer.value = JSON.stringify(result);
    document.body.appendChild(buffer);
    notify.initEvent('proxy', false, true);
    buffer.dispatchEvent(notify);
})();
//comment
