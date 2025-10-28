class typliai{
    constructor(){
        this.api = "https://typli.ai/api"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "xmlhttprequest","content-type":"application/json"}
    }
    async generate_response(prompt){
        let req=await fetch(`${this.api}/generators/completion`,{method:"POST",headers: this.headers,body:JSON.stringify({"prompt":prompt,"temperature":1.2})});
        return req.text();
    }
}
module.exports = {typliai};