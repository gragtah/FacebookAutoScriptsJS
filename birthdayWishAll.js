javascript:
function wishAll(){
      var cls = 'enter_submit uiTextareaNoResize uiTextareaAutogrow uiStreamInlineTextarea fbBirthdayReply DOMControl_placeholder'; 
       var x = document.getElementsByClassName(cls);
       for(var i = 0; i < x.length; ++i) {
             if (!x[i]._has_control) { 
                   new TextAreaControl(x[i]).setAutogrow(true); 
                   x[i]._has_control = true; 
                   x[i].value = "Happy Birthday, "+x[i].placeholder.match(/^\S+\s+\S+\s+([a-z]+)/i)[1] +". Have a good one!\n";
                  document.getElementsByClassName("uiStreamInlineAction")[i].submit();
            }
      }
}

var y = document.getElementsByClassName("fbCurrentStory");
y[0].click();
wishAll();
void(0);

