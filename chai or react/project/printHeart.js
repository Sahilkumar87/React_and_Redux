function main(){
    for(let i = 0; i<6; i++){
        for(let j = 0; i<7; j++){
            if((i === 0 && j%3 !== 0)||
               (i === 1 && j%3 === 0)||
               (i-j === 2)||
               (i+j === 8)){
                console.log("*");
              }
              else{
                console.log(" ")
              }
        }
    }
}

main();