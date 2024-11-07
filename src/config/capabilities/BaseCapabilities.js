class BaseCapabilities {
    capability= {
        'bstack:options': {
        },
    }

    constructor(){
    }

    /************************/
    acceptInsecureCerts(){
        /* acceptSslCerts is retired:
         * 1. If it's put in capabilities, it will throw an error. Invalid or unsupported WebDriver capabilities found ("acceptSslCerts"). 
         * Ensure to only use valid W3C WebDriver capabilities (see https://w3c.github.io/webdriver/#capabilities).
         * 2. If it's put in bstack:options, it will throw an error. The property '#/alwaysMatch/bstack:options' contains additional properties ["acceptSslCerts"] outside of the schema when none are allowed in the payload.
         */
        this.capability.acceptInsecureCerts = true
        return this
    }

    debug(){
        this.capability['bstack:options'].debug = "true"
        return this
    }

    local(local){
        this.capability['bstack:options'].local = local?local:true
        return this
    }

    video(video){
        this.capability['bstack:options'].video = video?video:"true"
        return this
    }

    debug(debug){
        this.capability['bstack:options'].debug = debug?debug:"true"
        return this
    }

    proxy(host, port){
        this.capability.proxy = {
            proxyType: "manual",
            httpProxy: `${host}:${port}`,
            noProxy: "127.0.0.1,localhost"
        }
        return this
    }
}