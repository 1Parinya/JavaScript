
let flurniture = ['Table', 'Chairs', 'Couch'];

    
function callflurniture (flurniture){
        index = 0;
        while (index < flurniture.length) {
                const name = flurniture[index];
                index++;
                for(let char of  name){
                    console.log(char);
                }
               console.log();
        }    
}
console.log("------ flurniture ------");

callflurniture(flurniture);
