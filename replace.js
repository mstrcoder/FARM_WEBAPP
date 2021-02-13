const insert=(temp,prod)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g,prod.productName);
    output=output.replace(/{%ID%}/g,prod.id);
    output=output.replace(/{%IMAGE%}/g,prod.image);
    output=output.replace(/{%FROM%}/g,prod.from);
    output=output.replace(/{%PRICE%}/g,prod.price);
    output=output.replace(/{%NUTRIENTS%}/g,prod.nutrients);
    output=output.replace(/{%QUANTITY%}/g,prod.quantity);
    output=output.replace(/{%DESCRIPTION%}/g,prod.description);
    if(!prod.organic) output=output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    return output;
}

module.exports=insert;