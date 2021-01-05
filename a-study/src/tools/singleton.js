var SingletonF = function(){
    if(SingletonF.instance){
        console.log("不能new");
    }
    this.name = "gggg";
};
SingletonF.getInstance = function(name){
    if(SingletonF.instance == null){
        SingletonF.instance = new SingletonF();
    }
    return SingletonF.instance;
}
var s3 = new SingletonF()
var s1 = SingletonF.getInstance("ccc");
var s2 = SingletonF.getInstance("def");

console.log(s1 === s2);
console.log(s3)
console.log(s1.name);