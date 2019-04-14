
function getexp()
{
    var str=$("#exp").val();
    var arr=str.split(" ");
    var o=Number(arr[0]);
    var t=Number(arr[2]);
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
    else if(op=="X" || op=="x")
    {
         a=o*t;
        $("#exp").val(a.toString());
    }
    else if(op=="/")
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

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });