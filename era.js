// const keyword = require('./keyword');

// if(typeof document != 'undefined'){
// 	let script = document.createElement('script')
// 	script.src = './keyword.js'
// 	document.body.append(script)
// }else{
// 	keyword = require('./keyword');
// }




// console.log(keyword.spawnKeywordPrint())


var fs = require("fs")

let textContent = fs.readFileSync('C:/Users/Administrator/Downloads/eratw/ERB/COMMON.ERB',"utf-8").toString();
// console.log(textContent);

/*
let textContent = `@BUFF_BASE(ARG,強化能力,変動値,メッセージ)
#DIM 変動値
#DIM 強化能力
#DIM メッセージ
SIF !CHECKE_BASE(ARG, BASENAME:強化能力)
	RETURN
SIF 変動値 < 0 && ABS(変動値) > MAXBASE:ARG:強化能力
	変動値 = (MAXBASE:ARG:強化能力 -1) * -1

MAXBASE:ARG:強化能力 += 変動値
	BASE:ARG:強化能力 += 変動値
BUFF:ARG:強化能力 += 変動値
;failsafe
MAXBASE:ARG:強化能力 = MAX(0, MAXBASE:ARG:強化能力)
BASE:ARG:強化能力 = MAX(0, BASE:ARG:強化能力)
SIF メッセージ
	CALL COLORMESSAGE(@"%CALLNAME:ARG%的%BASE_TR(BASENAME:強化能力)%暂时\@ 変動値 > 0? 上升了# 下降了\@{ABS(変動値)}",C_YELLOW,1)
`
*/
// 仅做为解析
class Gameparse {
	constructor() {
		/* 不可能的 */this.keepComment = false; // 是否保留注释(W.I.P)
		this.codelines = [];
		this.keyword = [];
		this.ASTNode = { Program: { body: [] } };
		// this.keyword = keyword.spawnKeywordIO()
		// this.keyword.push(...keyword.spawnKeywordControlFlow())
		// this.keyword.push(...keyword.spawnKeywordShort())
		//优化数组
		this.keyword = new Set(this.keyword)

	}

	parse(code) {

		// 正则表达式是人写的？
		// 正则表达式实现 + 优化
		let lines = code.split('\n');
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i].replace(/\r/g, ''); // 去除 CR
			// 去掉分号注释（以及分号前的空白），并移除尾部空白
			line = line.replace(/\s*;.*$/, '').trim();
			// 去除行首空白
			line = line.replace(/^\s+/, '');
			if (line !== '') this.codelines.push(line);
		}

		this.#convertToAST();
	}

	get createASTNode() {
		return {
			BlockStatement() {

			},
			Expression(expression) {

			},
			Variable(name, isString, modifiers, value) {
				return {
					"type": "VariableDeclaration",
					"name": name,
					"isString": isString,
					"modifiers": modifiers,
					"value": value
				}
			},
			Function(name, params) {
				if (params == undefined || params.length == 0) return {
					"type": "FunctionDeclaration",
					"name": name,
					"params": [],
					"body": []
				}
				return {
					"type": "FunctionDeclaration",
					"name": name,
					"params": params,
					"body": []
				}
			}
		}
	}
	// }
	// createASTNode(array) {
	// 	if (array) return array.push({ "Program": { "body": [] } })
	// 	return { "Program": { "body": [] } }
	// }
	#convertToAST() {

		// 	// 隔一个添加一个是吧😅？差不多得了

		// 	// 😅😅😅    😅😅😅
		// 	// 😅	      😅    😅
		// 	// 😅😅😅    😅😅😅
		// 	//      😅    😅    😅
		// 	// 😅😅😅    😅😅😅

		let fatherBody = this.ASTNode.Program.body;
		let currentBody;
		let LOCALArrayCount = 0;
		let LOCALSArrayCount = 0;

		for (let i = 0; i < this.codelines.length; i++) {
			// function
			if (this.codelines[i].match(/^(@)\S*/g)) {
				fatherBody = this.ASTNode.Program.body
				let funcBlock = this.codelines[i].replace(/^@/, '').replace(/\s*/, '').replace(" ",'');
				let funcName = funcBlock.replace(/,.*$|\(.*$/g, '').replace(/\s*/g, '');

				// Params 
				let funcParams = null;
				if (funcBlock.match(/\(.*\)/g)) {
					funcParams = funcBlock.match(/\(.*\)/g)[0].replace(/[()]/g, '').replace(/\s*/g,"").split(',');
				} else if (funcBlock.match(/,.*$/g)) {
					funcParams = funcBlock.substr(funcBlock.indexOf(',') + 1).replace(/\s*/g,"").split(',');
				}
				
				if (funcParams) {
					funcParams = funcParams.map(str => str.replace(/(=)\S*$/,'').trim())
				}


				// if (funcParams == "") funcParams = null
				// 下一行到#FUNCTION(S)
				currentBody = this.createASTNode.Function(funcName, funcParams)
				fatherBody.push(currentBody)
				fatherBody = currentBody.body

				LOCALArrayCount = 0
				LOCALSArrayCount = 0
			}
			console.log(currentBody);
			
			if (this.codelines[i].match(/(#FUNCTION)/g)) {
				// console.log(this.codelines[i]);
				console.log(this.ASTNode.Program.body);
				
			}

			// UserVars + LOCAL(S)
			if (this.codelines[i].match(/(#DIM)/g)) {
				let isString = false;
				let modifiers = false;
				let varName = "";
				// 数 字符串
				if (this.codelines[i].match(/(#DIMS)\s/g)) isString = true;
				// 修饰词
				if ((modifiers = this.codelines[i].match(/\s*((CONST)|(DYNAMIC)|(REF))\s*/g))) modifiers = modifiers[0].trim();
				// #DIM(S) (CONST) var,7 = 6 
				// if (modifiers)console.log(this.codelines[i]);
				// if (modifiers)console.log(this.codelines[i].replace(new RegExp(/\s*((CONST)|(DYNAMIC)|(REF))\s*/,'g')," "+modifiers+" "));
				// if (modifiers) {
				// console.log(this.codelines[i]);
				
					let tmp = this.codelines[i].replace(/((#DIMS)|(#DIM))\s*|((CONST)|(DYNAMIC)|(REF))\s*/g, '')
					varName = (tmp.match(/(^\S*(,))|(^\S*)/g)[0].replace(",",""));
					
					// console.log(tmp.match(/(^\S*(,))|(^\S*)/g));
				// }

				// console.log(varName);
				
				// 文本没有\t \n
				currentBody = this.createASTNode.Variable(varName, isString, modifiers)
				fatherBody.push(currentBody)
				// console.log(fatherBody);
				
				// console.log(currentBody);
				
			}
			if(this.codelines[i].match(/(#LOCALS)/g)){
				let LOCALisString = false;
				let LOCALSize = 0;
				if (this.codelines[i].match(/^(#LOCALSSIZE)/g)) LOCALisString = true
				LOCALSize = this.codelines[i].replace(/(#LOCALSIZE)\s|((#LOCALSSIZE)\s)/g,'').trim()
				
				// console.log(LOCALSize);
			}
			/*if (this.codelines[i].match(/^((LOCALS)|(LOCAL))/g)) {
				let LOCALisString = false;
				let LOCALArray = []
				console.log(this.codelines[i].replace(/\s/g,''));
				console.log(this.codelines[i]);
				// console.log(LOCALArrayCount);
				LOCALArrayCount = LOCALArrayCount+1;
				if (this.codelines[i].match(/^(LOCALS)/g)) LOCALisString = true;

				// console.log(this.createASTNode.Variable("#LOCALVariable",LOCALisString,false,[]));
				
			}*/
		}
	}
}

a = new Gameparse()
a.parse(textContent)
a.parse(fs.readFileSync('C:/Users/Administrator/Downloads/eratw/ERB/天候予測システム.ERB',"utf-8").toString())

// console.log(JSON.stringify(a.ASTNode,null,2));
// console.log(a.ASTNode.Program.body);
// while(1) {}