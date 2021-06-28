// // 1.How to define a variable name?
// // 
// // 可以使用var let const
// // 变量名区分大小写，不允许数字开头，不允许空格和除了字母数字$_外的其他符号
// // 
// // 2.What type of data accepts the variable x defined as var x?
// // javascript是弱类型语言，在JavaScript中var x可以接受的数据可以是任意的类型，例如数值、字符串值、布尔值、数组、对象
// // 
// // 3.乘法表
// // let res = [],strRes = [];
// // let i,j,temp;
// // for (i=1; i<10; i++) {
// // 	res[i] = [];
// // 	strRes[i-1] = '';
// // 	for(j=1; j<10; j++){
// // 		res[i][j] = i*j;
// // 		temp = res[i][j]+' ';
// // 		temp = res[i][j] < 10 ? ' '+temp : temp;
// // 		strRes[i-1] += temp;
// // 	}
// // }
// // for(value of strRes) console.log(value)
// // // strRes.forEach(str => str && console.log(str));

// // // 4.array
// // // 
// // let arr = ['cotton','polyester','linen','alpaca'];
// // console.log(arr);
// // let index = arr.findIndex(e => e==='polyester');
// // arr.splice(index,0,'wool');
// // console.log(arr);
// // arr.sort((a,b)=>a[0]>b[0]?1:-1);
// // console.log(arr);

// // // 5.string
// // // 
// // let str = "this is a test that has to be done using javascript";
// // function operate(s, limit = 20){
// // 	let strArr = s.split(" "),
// // 		temp = "",
// // 		res = [];
// // 	while(strArr.length > 0){
// // 		while(strArr.length && temp.length+1+strArr[strArr.length-1].length <= 20)
// // 			temp = strArr.splice(strArr.length-1) + " "+temp
// // 		res.push(temp);
// // 		temp = "";
// // 	}
// // 	return res;
// // }
// // console.log(operate(str))

// // // 6.price format
// // // 
// // // $999.99 $99.99 9 $9.9 9999999 999999 99999
// let test = ['$999.99','$99.99','$9.99','$9.9','9','9999999','999999','99999','9999','999','99','9'];
// function fm(price){
// 	// 先去除$
// 	price = price.replace("$","");
// 	let priceStr = price;
// 	price = Array.from(price);
// 	if(priceStr.replace(".","").length > 5) return 'error';
// 	// 是否有小数点
// 	if(price.includes(".")){
// 		let t = priceStr.split(".");
// 		t[1] = t[1].length<2?t[1]+'0':t[1];
// 		price = t[0]+'.'+t[1];
// 	} else {
// 		let l = price.length
// 		price = price.concat(Array(5).fill(0));
// 		if(l > 2)
// 			price = price.slice(0,5).join('');
// 		else
// 			price = price.slice(0,l+2).join('');
// 		price = Array.from(price);
// 		price.splice(price.length-2,0,".");
// 	}
// 	return '$'+Array.from(price).join('');
// }
// for(value of test)
// 	console.log(fm(value))

// let str = 'This is a test that has to be done using JavaScript';
// function operateStr(str, limit = 20){
//     let strArr = str.split(' '),
//         temp = '',
//         res = [];
//     while(strArr.length > 0){
//         while(strArr.length && temp.length + strArr[strArr.length -1].length + 1 <= limit){
//             temp = strArr.splice(strArr.length -1) + ' ' + temp;
//         }
//             res.push(temp);
//             temp = '';
//     }
//     return res;
// }
// for(value of operateStr(str)) console.log(value);
let test = ['$999.99','$99.99','$9.9','9','9999999','999999','99999'];
function priceFormat(price){
    price = price.replace('$','');
    priceArr = Array.from(price);
    if(price.replace('.','').length >5) return 'error';
    // if has dot
    if(priceArr.includes('.')){
        let temp = price.split('.');
        (temp[1].length < 2) && (temp[1] =  temp[1] + '0');
        price = temp[0] + '.' + temp[1];
    } else {
        let length = priceArr.length;
        price = priceArr.concat(Array(5).fill(0));
        if(length > 2)
            price = price.slice(0, 5).join('');
        else
            price = price.slice(0, length + 2).join('');
        price = Array.from(price);
        price.splice(price.length - 2, 0, '.');
    }
    return '$' + Array.from(price).join('');
}
for(value of test)
    console.log(value + " => " + priceFormat(value));

let str = 'This is a test that has to be done using JavaScript';
function operateStr(str, limit = 20){
    let strArr = str.split(' '),
        temp = '',
        res = [];
    while(strArr.length > 0){
        while(strArr.length && temp.length + strArr[strArr.length -1].length + 1 <= limit){
            temp = strArr.splice(strArr.length -1) + ' ' + temp;
        }
        res.push(temp);
        temp = '';
    }
    return res;
}
for(value of operateStr(str)) console.log(value);
