for(let i = 1004; i <= 2022; i++){
    if((i % 4 == 0 || i % 400 == 0) && i % 100 != 0){
        document.write("<br>" + i);
    }
}