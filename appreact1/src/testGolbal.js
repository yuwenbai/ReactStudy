export default class testGlobal {
    constructor(){
        this.originValue = 0
    }
    setValue(value){
        console.log(' setvalue is ' + value)
        this.originValue = value
    }
    getValue(){

        console.log(' getvalue is ' + this.originValue)
        return this.originValue
    }
}
