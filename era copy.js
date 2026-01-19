// const keyword = require('./keyword');
try {
	keyword = require('./keyword');
} catch (error) {
	let script = document.createElement('script')
	script.src = './keyword.js'
	if (document.body) {
	document.body.append(script)
		
	}else{
		setTimeout(()=>{document.body.append(script)},1000);
	}
}


// console.log(keyword.spawnKeywordPrint())
textContent = `@PfScale(LOCALS,ARG)
PRINT PfScale
@PfSetDetailed
PRINT PfSetDetailed
@PresetTagChoice
PRINT PresetTagChoice
@PresetTag(ARG,ARG:1,ARGS)
PRINT PresetTag
@SimPfSet
PRINT SimPfSet
@ResetPf
PRINT ResetPf
as

sd		a			
	


@SetPfChoice
PRINT SetPfChoice
@EVENTLOAD
#DIM chara
#DIM index
#DIM DYNAMIC printTimes
GETTIME
DEBUGPRINTFORML {RESULT / 10000000000000}年 {(RESULT / 100000000000) % 100}月 {(RESULT / 1000000000) % 100}日 {(RESULT / 10000000) % 100}時だよ
;即时读档`

// 仅做为解析
class Gameparse {
	constructor() {
		/* 不可能的 */this.keepComment = false; // 是否保留注释(W.I.P)
		this.codelines = []
		this.keyword = []
		this.ASTNode = this.createASTNode()
		// this.keyword = keyword.spawnKeywordIO()
		// this.keyword.push(...keyword.spawnKeywordControlFlow())
		// this.keyword.push(...keyword.spawnKeywordShort())
		//优化数组
		this.keyword = new Set(this.keyword)
		console.log(this.keyword);

	}
	parse(code) {
		this.codelines = code.split('\n');
		this.codelines = this.removeWasteCodelines(this.codelines)
		// console.log(this.codelines);
	}
	// ~~~优化
	removeWasteCodelines(arr) {
		let neoArrary = [];
		for (let l in arr) {
			// 存疑
			arr[l] = arr[l].replace(/\t/g, ' ');
			arr[l] = arr[l].replace(/\r/g, '');
			while (arr[l][0] == ' ') { arr[l] = arr[l].substr(1) }
			// ; express
			if (arr[l] == '' || arr[l][0] == ';') {
				delete arr[l];
				continue;
			}
			//  express ;commit
			if (arr[l].indexOf(';') != -1) {
				arr[l] = arr[l].substr(0, arr[l].indexOf(';'));
				// console.log(arr[l]);
			}
		}
		for (let index = 0; index < arr.length; index++) if(arr[index]) neoArrary.push(arr[index])
		
		return neoArrary
	}
	get appendASTNode(){
		return {
			BlockStatement(arrary){

			},
			ExpressionStatement(arrary){

			},
			VariableDeclaration(arrary){

			},
			FunctionDeclaration(arrary,codelines){

			}
		}

	}

	
	// !!!重写
	// appendAST(arrary,type, id,...additionStatement) {
	// 	if (type == 2) {

	// 		arrary.push({
	// 			"type": this.ASTTypeList[type],
	// 			"id": id,
	// 			"body": {}
	// 		})
	// 		// this.createASTNode(arrary[arrary.length]['body'])
	// 		return 2;
	// 	}

	// 	arrary.push({
	// 		"type": this.ASTTypeList[type],
	// 		"id": id
	// 	})
	// }
	createASTNode(arrary) {
		if (arrary) return arrary.push({ "Program": { "body": [] } })
		return { "Program": { "body": [] } }
	}
	convertToAST() {
		for (let point = 0 ;this.codelines.length != point;point++) {
			if(this.codelines[point] == undefined) {continue};
			
			let singleCode = this.codelines[point];
			// Function [BlockStatement]
			// 隔一个添加一个是吧😅？差不多得了

			// 😅😅😅    😅😅😅
			// 😅	      😅    😅
			// 😅😅😅    😅😅😅
			//      😅    😅    😅
			// 😅😅😅    😅😅😅
			
			// 重写吧😅
			


			// if (singleCode[0] == "@") {
			// 	let funcLines = []
			// 	console.log(singleCode);
			// 	do {
			// 		point++;
			// 		singleCode = this.codelines[point]
			// 		funcLines.push(singleCode)
			// 	} while (point < this.codelines.length && singleCode[0] != "@");
			// 	console.log(funcLines);
			// 	funcLines = []
			// 	// this.appendAST(this.ASTNode['Program']['body'],2, singleCode.substr(funcSignPoint + 1).split("(")[0]);
			// }
			// console.log(singleCode);

		}
		// console.log(this.ASTNode);
	}
}

a = new Gameparse()
a.parse(textContent)
a.convertToAST()
console.log(a.codelines);

// while (1) {

// }


