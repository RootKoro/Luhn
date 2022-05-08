import { argv } from 'process';

if(argv[3]){
    let noCode = argv[3];
    
    if(argv[2] == '-c')
        if (luhn(noCode) == 0) console.log('KO\nUn code de Luhn ne peut pas être constitué que de \'0\'!');
        else
            console.log((luhn(noCode) % 10 == 0) ? 'OK' : 'KO');
    else if (argv[2] == '-f') 
        if (luhn(noCode) == 0) console.log('Un code de Luhn ne peut pas être constitué que de \'0\'!');
        else
            console.log((luhn(noCode+'0') % 10 == 0) ? 0 :  10 - (luhn(noCode+'0') % 10));
}



export function luhn(s: string){
    let code = '', sum=0, noCode = s;

    for(let i=noCode.length - 1; i >= 0; i--)
        if((noCode.length - i - 1) % 2 != 0)
            code += pint(noCode[i]) < 5 ? pint(noCode[i]) * 2 : ~~((pint(noCode[i]) * 2) / 10) + ((pint(noCode[i]) * 2) % 10);
        else
            code += noCode[i];

    code = inversor(code); sum = strSum(code);

    return sum;
}



export function pint(s: string){
    let pint = 0;
    
    for(let i = 0; i < s.length; i++)
        for(let j = 0; j <= 9; j++)
            pint += (s[i] === ''+j) ? j * power(10, s.length - i -1) : 0;

    return pint;
}



export function power(n: number, p: number){
    let power = 1;
    for(let i = 0; i < p; i++)
        power *= n;
    return power
}



export function inversor (s: string){
    let inv='';
    for(let i = s.length -1; i >= 0; i--)
        inv += s[i];
    return inv;
}



export function strSum(s: string){
    let strSum=0
    for(let i=0; i < s.length; i++)
        strSum += pint(s[i]);
    return strSum;
}

export function numStr(n:number){
    return ''+n;
}