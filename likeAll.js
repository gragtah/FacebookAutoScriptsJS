javascript:
var ctr = 0;

function expandAll(){
  var z = document.getElementsByClassName('pam uiBoxLightblue uiMorePagerPrimary');
  z[0].click();
  ctr++;
  alert(ctr);
  if (ctr<=5){ loop();}
}

function loop(){
  setTimeout("expandAll()", 1500);
}

expandAll();

var x = document.getElementsByClassName('like_link stat_elem as_link');
for(var i = 0; i < x.length; ++i) {
  if(x[i].name=='like') {x[i].click();}

};
alert("done");
void(0);
