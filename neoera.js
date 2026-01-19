const { codeCount } = require('console');
const fs = require('fs')
// let textContent = fs.readFileSync('C:/Users/Administrator/Downloads/eratw/ERB/COMMON.ERB',"utf-8").toString();
let textContent = fs.readFileSync('C:/Users/Administrator/Downloads/eratw/ERB/DLC/DEBUG.ERB', "utf-8").toString();



class Gameparse {
    constructor() {
        this.ASTNode = {}

    }
    next(code,point){
        return code[point+1];
    }
    parse(code, type) {
        let isComment = false
        let isFunc = false
        let tmpPoint = 0;
        let tmpChar = ""
        for (let count = 0; count < code.length; count++) {
            if (code[count] == ";") {
                isComment = true
                console.log(count + " is comment start");
            } if (isComment && code[count] == "\n") {
                isComment = false;
                console.log(count + " is comment end");
            }if (isComment) continue;
            
            for (tmpPoint = count;
                this.next(code,tmpPoint)!= "\n"&&
                this.next(code,tmpPoint)!= " "&&
                this.next(code,tmpPoint)
                ;
                tmpPoint++) {
                tmpChar +=this.next(code,tmpPoint)
                // console.log(tmpChar);    
            }
            if (tmpChar.match(/^@/g)) {
                console.log(tmpChar);
                
            }
            tmpChar = ""
            

        }
    }
    Token() {

    }
}
a = new Gameparse()
a.parse(textContent, "ERB")