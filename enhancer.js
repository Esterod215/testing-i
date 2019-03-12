module.exports ={
    repair,
    success,
    fail,
}

function repair(item={}){
 item.durability = 100;
 return item;
};

function success(item={}){
    if(item.enhancement === 20){
        return item;
    }else{
    item.enhancement = item.enhancement +1;
        return item;
    }
}
function fail (item = {}){
    if(item.enhancement > 16){
        item.enhancement= item.enhancement -1;
    }
    
    if(item.enhancement < 15){
        if(item.durability <= 5){
            item.durability = 0;
        }else{
            item.durability = item.durability -5;
        }
    
    }

    if(item.enhancement >= 15){
        if(item.durability <= 10){
            item.durability = 0
        }else{
            item.durability = item.durability -10;
        }
        
    }

    
    return item;
    
}