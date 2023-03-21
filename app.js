// Escribe tu código aquí.

/* Construye una función que reciba por parámetros un string y un array de strings. La función debe retornar un arreglo de strings con los strings que sean de mayor longitud que el string recibido por parámetros.
 */
var nuearr=[];
function funCom(st,arr) {
    tst=st.length;
    tarr=arr.length;
    var con=0;
    if(tst<tarr){
        for (let i=tst-1; i<tarr ; i++){
            console.log(arr[i])
            nuearr[con]=arr[i];
            con++
        }
    }
}

const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
/* funCom('tres',myArray);*/
funCom('dos',myArray);

document.getElementById("elemento").innerHTML=nuearr;
