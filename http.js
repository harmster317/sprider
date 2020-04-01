const http=require('http')
const fs=require('fs')
http.get('http://qd.zxtsg.com:88/index.php/task/index.html',function(req,res){
   var html=''
   
   req.on('data',function(data){
       html+=data
   })
   req.on('end',function(){
       var newData=getTitle(html)
    //    console.log(newData)
    fs.writeFile('pacong.txt',newData,function(err){
        if(err) console.log(err)
    })
       
   })
    
})
function getTitle(html){
    const cheerio=require('cheerio')
    const $=cheerio.load(html,{decodeEntities:false})
    // console.log($('.span12 h4')) 
    var newData=""
    $('.span12 h4').each(function(index,item){
        //   console.log($(item).text())
        newData+=$(item).text()+"\n"
         
    })
    return newData
}