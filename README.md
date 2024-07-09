# typliai
JavaScript library for typli.ai
# main
```js
async function main(){
    const {typliai} = require('./typliai');
    const typli= new typliai();
    let req=await typli.generate_response("Cocktail recipe with vodka, tequila and lemon lime soda")
    console.log(req)
}
main()
```
