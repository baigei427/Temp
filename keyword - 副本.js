// new Set([



// ])
// I/O 系列

export function spawnKeywordIO() {
    let result = []
    // 单行溢出：溢出后自动换行 溢出后不换行
    let warp = ['Print', 'PrintSingle']
    let warpDeclaration = ['输出-溢出后自动换行','输出-溢出后不换行']
    // 参数类型：字符串 数值表达式 字符串表达式 格式化字符串 格式化字符串表达式
    let type = ['', 'V', 'S', 'Form', 'FormS']
    let typeDeclaration = ['','-数值表达式-','-字符串表达式-','-格式化字符串-','-格式化字符串表达式-']
    // 空格填充：'' 文字左对齐有，文字右对齐
    let fill = ['', 'LC', 'C']
    let fillDeclaration = ['','-左对齐-','-右对齐-']
    // 优先配色：适用 SetColor 适用 ForceKana 忽略 SetColor
    let color = ['', 'K', 'D']
    let colorDeclaration = ['-跟随SetColor-','-跟随ForceKana-','-忽略SetColor-']
    // 换行等待：'' 只换行 换行后等待
    let wait = ['', 'L', 'W']
    let waitDeclaration = ['','换行','换行后等待']
    for (let iwarp in warp) {
        for (let itype in type) {
            for (let ifill in fill) {
                for (let icolor in color) {
                    for (let iwait in wait) {
                        // 修饰
                        if(iwait == 1) 
                        // 过滤不存在的关键字
                        if ((
                            iwarp == 1 && (iwait == 1 || iwait == 2)
                            || (ifill == 1 || ifill == 2) && (itype == 1 || itype == 2 || itype == 4)
                            || (ifill == 1 || ifill == 2) && (iwait == 1 || iwait == 2)
                        )) continue;
                        let short = `${warp[iwarp]}${type[itype]}${fill[ifill]}${color[icolor]}${wait[iwait]}`;
                        let long = `${warpDeclaration[iwarp]}${typeDeclaration[itype]}${fillDeclaration[ifill]}${colorDeclaration[icolor]}${waitDeclaration[iwait]}`
                        // console.log(`${warp[iwarp]}${type[itype]}${fill[ifill]}${color[icolor]}${wait[iwait]}`)
                        // console.log(`组合: ${iwarp} | ${itype} | ${ifill} | ${icolor} | ${iwait} `);
                        console.log(`{label:'${short}',detail:{'zh-CN':{short:'输出',long:'${long}'}}},`);
                        // result.push(`${a}`)
                    }
                }
            }
        }
    }

    // result.push('DRAWLINE')
    return result
}
// 生成控制流关键字
export function spawnKeywordControlFlow() {
    return ['IF', 'ELSE', 'ENDIF', 'ELSEIF', 'SIF', 'FOR', 'NEXT', 'WHILE', 'GOTO', 'RETURN '];
}

export function spawnKeywordOther() {
    return ['CALL', 'RESULT'];
}

export function spawnKeywordShort() {
    return ['@', '#'];
}
// console.log(`{label:'${a[b]}',detail:{'zh-CN':{short:'输出',long:'输出-'}}},`);

// console.log(spawnKeywordIO());
spawnKeywordIO()




// 仅做为生成关键字
export class Keyword {
    constructor() {
        this, Table = []
    }
}