const y: number = 10;
const x: number = 11
x = "hellow-word"
let c: string = "hellow-word"
c = "new-word"

let arry: number[] = [5, 6, 7]
arry.push('hey')

let q: barry2<boolean>;
q = [false, true]

console.log(x, y, c, arry, q);
/*錯誤的資訊會抱錯但是還是會被編譯出去，ts使用const編譯成js一樣會被編譯var全域變數 */