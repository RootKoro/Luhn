import {luhn, pint, power, inversor, strSum, numStr} from './luhn';
import prompt  from "prompt-sync";


let a =0, b =0, c =0, d =0, e =0, f =0, g =0, h =0, i =0, j =0, k =0, l =0, m =0, n =0, o =0, p =1;

let toGen = ''+a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p;

while (toGen != "9999999999999999"){
    
    if(luhn(toGen) % 10 == 0){
        const input = prompt("Do you want card number?(yes/no)\n");
        if (input == 'yes')
            console.log(toGen)
        else if(input == 'no'){
            console.log('Got ya, thanks!');
            break;
        }
        else{
            console.log('nope, that\'s not an answer, good by!!');
            break;
        }
    }

    a++; b++; c++; d++; e++; f++; g++; h++; i++; j++; k++; l++; m++; n++; o++; p++
}