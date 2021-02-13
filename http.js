const http = require('http');
const url = require('url');
const fs = require('fs');
const insert = require('./replace');
const template_overview=fs.readFileSync("./starter/templates/template-overview.html",'utf-8');
const template=fs.readFileSync("./starter/templates/template.html",'utf-8');
const product=fs.readFileSync("./starter/templates/product.html",'utf-8');
const json_data=fs.readFileSync("./starter/dev-data/data.json",'utf-8');
const data=JSON.parse(json_data)

const server=http.createServer((req,res)=>{
    const val=req.url;
    if(val==='/'||val==='/overview')
    {      
        res.writeHead(200,{'Content-type':'text/html'})
        const cardhtml=data.map(el => insert(template,el))
        const output=template_overview.replace('{%PRODUCT_CARD%}',cardhtml);
        res.end(output);
    }
    let reg=/product/i;
    let reg1=/[0-4]*$/;
    if(reg.test(val)&&reg1.test(val))
    {    
        res.writeHead(200,{'Content-type':'text/html'})
        let output=insert(product,data[val[12]]);
        res.end(output);
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log("server has been started");
})

