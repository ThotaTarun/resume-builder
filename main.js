
function newpage()
{
// document.location='resume.html';
// window.open('resume.html',_self);
window.open('resume.html');
}

function loadJSON(file,callback)
 {

    var rawFile= new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET","resume.json",true);
    rawFile.onreadystatechange=function()
      {
          if(rawFile.readyState===4 && rawFile.status=="200")
            {
                callback(rawFile.responseText);
                }
        }

        rawFile.send();
   }



loadJSON("resume.json",function(text){

var data=JSON.parse(text);
// console.log(data);

basic(data.basics);



});


var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');



function basic(basics){
/*leftdiv*/
var lchild1=document.createElement("div");
lchild1.classList.add("lchild1");
var image=document.createElement("img");
image.classList.add("image1");
image.src=basics.picture;
var head1=document.createElement("h1");
head1.textContent=basics.name;
var head2=document.createElement("h2");
head2.textContent=basics.label;
var hr1=document.createElement("hr");
var head3=document.createElement("h3");
head3.textContent=basics.phone;
var head4=document.createElement("h4");
head4.textContent=basics.email;
lchild1.appendChild(image);
left.appendChild(lchild1);
left.appendChild(head1);
left.appendChild(head2);
left.appendChild(hr1);
left.appendChild(head3);
left.appendChild(head4);
/*end of leftdiv*/
/*rightdiv*/
var cobj=document.createElement("div");
cobj.classList.add("career");
var rh3=document.createElement("h3");
rh3.innerHTML="Career Objective";
var rhr=document.createElement("hr");
var rhp=document.createElement("p");
rhp.innerHTML="To obtain a position that challenges me and provides me the opportunity to reach my full potential professionally and personally utilizing my abilities and years of experience in your organization that is progressive intellectually and technically and one in which practices collaborative leadership, integrity and honesty.";
cobj.appendChild(rh3);
cobj.appendChild(rhr);
cobj.appendChild(rhp);
right.appendChild(cobj);
}
