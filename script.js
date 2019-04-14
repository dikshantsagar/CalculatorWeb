var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;



function getexp(str)
{
    var str;
    var arr=str.split(" ");
    var o=Number(arr[0]);
    var t=Number(arr[arr.length-1]);
    var op=arr[1];
    var a;
    if(op=="+")
    {
         a=o+t;
        $("#exp").val(a.toString());
    }
    else if(op=="-")
    {
         a=o-t;
        $("#exp").val(a.toString());
    }
    else if(op=="X" || op=="x" || op=="into" || op=="multiply" || op=="multipliedby" || op=="multiplied")
    {
         a=o*t;
        $("#exp").val(a.toString());
    }
    else if(op=="/" || op=="upon" || op=="by" || op=="divided" || op=="divideby")
    {
         a=o/t;
        $("#exp").val(a.toString());
    }
    console.log(arr);

}

function disop()
{
    $("#div").attr("disabled",true);
    $("#mult").attr("disabled",true);
    $("#add").attr("disabled",true);
    $("#sub").attr("disabled",true);
}
function enabop()
{
    $("#div").attr("disabled",false);
    $("#mult").attr("disabled",false);
    $("#add").attr("disabled",false);
    $("#sub").attr("disabled",false);
}

$("#0").click(function()
{
    $("#exp").val($("#exp").val()+"0");   
});
$("#1").click(function()
{
    $("#exp").val($("#exp").val()+"1");   
});
$("#2").click(function()
{
    $("#exp").val($("#exp").val()+"2");   
});
$("#3").click(function()
{
    $("#exp").val($("#exp").val()+"3");   
});
$("#4").click(function()
{
    $("#exp").val($("#exp").val()+"4");   
});
$("#5").click(function()
{
    $("#exp").val($("#exp").val()+"5");   
});
$("#6").click(function()
{
    $("#exp").val($("#exp").val()+"6");   
});
$("#7").click(function()
{
    $("#exp").val($("#exp").val()+"7");   
});
$("#8").click(function()
{
    $("#exp").val($("#exp").val()+"8");   
});
$("#9").click(function()
{
    $("#exp").val($("#exp").val()+"9");   
});

$("#div").click(function()
{
    $("#exp").val($("#exp").val()+" / "); 
    disop();  
});
$("#mult").click(function()
{
    $("#exp").val($("#exp").val()+" X ");   
    disop();
});
$("#add").click(function()
{
    $("#exp").val($("#exp").val()+" + ");   
    disop();
});
$("#sub").click(function()
{
    $("#exp").val($("#exp").val()+" - ");   
    disop();
});
$("#decimal").click(function()
{
    $("#exp").val($("#exp").val()+".");   
});

$("#clear").click(function()
{
    $("#exp").val("");   
});

$("#backsp").click(function()
{
   var t= $("#exp").val();   
   $("#exp").val(t.slice(0,-1));
});


$("#eq").click(function()
{
   getexp(); 
   enabop();
    
});
var tok=0;
$("#mic").click(function()
{
   
    var bd=document.getElementById("body");
    var rip=document.createElement("div");
    rip.id="rip";
    rip.className="pulse-ring";
    if(tok==0)
    {
        bd.appendChild(rip);
        disop();
        tok=1;
    }
    else if(tok==1)
    {
        bd.removeChild(document.getElementById("rip"));
        tok=0;
    }
    recognition.start();
    recognition.onresult=function(event)
    {
        enabop();
        var last = event.results.length - 1;
        var text = event.results[last][0].transcript;
        console.log(text);
        getexp(text);
        var msg = new SpeechSynthesisUtterance("The Answer is "+$("#exp").val());
        if($("#exp").val())
        {
            window.speechSynthesis.speak(msg);
        }
        


        if(tok==1)
    {
        bd.removeChild(document.getElementById("rip"));
        tok=0;
    }
    };
    
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });