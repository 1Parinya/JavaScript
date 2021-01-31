let values1 = ['Apple' , 1 , false];
let values2 = ['Fries' , 2 , true];
let values3 = ['Mars' , 9 , 'Apple'];

function TORF (values1,values2){
    
    console.log("----------TYPE--OF------------"); 
    console.log("Type values1 =",typeof values1[0],typeof values1[1],typeof values1[2]);
    console.log("Type values2 =",typeof values2[0],typeof values2[1],typeof values2[2]);
    console.log("Type values3 =",typeof values3[0],typeof values3[1],typeof values3[2]);
    console.log();

    console.log("----------True OR false-------");
        for(let i = 0;i < values1.length;i++){
        
            if( typeof(values1[i]) === typeof(values2[i])){
                console.log("TRUE");
            }
            else {
                console.log("FLASE");
            }   
        }
}
TORF(values1,values3);

