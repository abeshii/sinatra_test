$(function(){
  $('.add-star').click(function(){
     var $this =$(this);
     var post_id = $this.attr('data-post-id');
$.ajax({
  url:'/star?post_id=' + post_id,
  success: function(data){
    num=$("#"+post_id).text();
    num++;
    $("#"+post_id).html(num);
    },
    error:function(data){
      alert('失敗しました');

  }
});
});
});

<SCRIPT LANGUAGE="JavaScript" >
var serchindex=0;
var serchcounter=0;
var serchstr = "";
var serchwordcounter=0;
var start=0;
function wordserch(){
if(serchstr != document.serch.q.value){serchindex=0;serchwordcounter=0;}
serchstr = document.serch.q.value;
var bCrumb = new Array();
var i;
while(serchstr.indexOf('　')>=0){serchstr = serchstr.replace("　"," ");}
while(serchstr.indexOf('|')>=0){serchstr = serchstr.replace("|"," ");}
while(serchstr.indexOf('&')>=0){serchstr = serchstr.replace("&"," ");}
bCrumb=serchstr.split(" ");
for(i=serchwordcounter;i<bCrumb.length;i++){
serchstring = bCrumb[i];
serchcounter++;
ref=serch(serchstring);
if(!ref){alert('検索単語が見つかりません');}
if(ref==true && start>=0){
break;
}else if(ref==true && start<0){
serchwordcounter++;
serchindex=0;
break;
}else{
serchwordcounter++;
serchindex=0;
}
}
}
function serch(txt,index){
var before,txt,after,objstr;kazu=0;
var serchstr=txt;
objct = document.getElementById('UR');
str = objct.innerHTML;
start = str.indexOf(serchstr,serchindex);
if(start>0){
before=str.substring(0,start);
txt="<B><A NAME='serchstr"+serchcounter+"'>"+serchstr+"</A></B>";
after=str.substring(start+serchstr.length);
objstr = before+txt+after;
if(navigator.appName.indexOf("Microsoft")>-1){
objct.innerHTML = objstr;
location.hash = "#serchstr"+serchcounter;
}else{
document.clear();
document.open();
document.write(objstr);
document.close();
location.hash = "#serchstr";
}
serchindex=start+txt.length;
start = str.indexOf(serchstr,serchindex);
return true;
}else{
return false;
}
}
</SCRIPT>
