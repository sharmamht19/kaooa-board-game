   

   //************************************************| Variables |***************************************************

   var turn=1;//trun=1 for Crows and 0  for vultures
   var cap_count=0;// stores the number of captured crows 
   let set_place= ['0','0','0','0','0','0','0','0','0','0','0']; 
   let reset_place=['0','0','0','0','0','0','0','0']
   // set_place[0].value=1;
   //alert(reset_place.indexOf('5'));
   var Flag=1;
   var jump_flag=0;
   var Id_toJump=50;
   var c_win=0;
   var dragged_item;
   var dropped_item;
   var pixels;
   var Rec;
   var DragStore,DropStore;
   var textToWrite="                           Console-Log                             \n\n";
    //*****************************************************| Get Pixel values |***************************************
     window.onresize = function(event) {
    RemoveLines();
    getPixels();
};
    function getPixels() {
  pixels = document.getElementById("1");
   Rec = pixels.getBoundingClientRect();
            x1 = Rec.left;
            y1 = Rec.top;
        pixels = document.getElementById("2");
        Rec    = pixels.getBoundingClientRect();
            x2 = Rec.left;
            y2 = Rec.top;
              pixels = document.getElementById("3");
        Rec    = pixels.getBoundingClientRect();
            x3 = Rec.left;
            y3 = Rec.top;
        pixels = document.getElementById("4");
        Rec    = pixels.getBoundingClientRect();
            x4 = Rec.left;
            y4 = Rec.top;
        pixels = document.getElementById("5");
        Rec    = pixels.getBoundingClientRect();
            x5 = Rec.left;
            y5 = Rec.top;
        pixels = document.getElementById("6");
        Rec    = pixels.getBoundingClientRect();
            x6 = Rec.left;
            y6 = Rec.top;
        pixels = document.getElementById("7");
        Rec    = pixels.getBoundingClientRect();
            x7 = Rec.left;
            y7 = Rec.top;
        pixels = document.getElementById("8");
        Rec    = pixels.getBoundingClientRect();
            x8 = Rec.left;
            y8 = Rec.top;
        pixels = document.getElementById("9");
        Rec    = pixels.getBoundingClientRect();
            x9 = Rec.left;
            y9 = Rec.top;
        pixels = document.getElementById("10");
        Rec    = pixels.getBoundingClientRect();
           x10 = Rec.left;
           y10 = Rec.top;
        pixels = document.getElementById("11");
        Rec = pixels.getBoundingClientRect();
            x11 = Rec.left;
            y11 = Rec.top;
            //alert(Rec.y);

        pixels = document.getElementById("12");
        Rec = pixels.getBoundingClientRect();
            x12 = Rec.left;
            y12 = Rec.top;
        pixels = document.getElementById("13");
        Rec = pixels.getBoundingClientRect();
            x13 = Rec.left;
            y13 = Rec.top;
        pixels = document.getElementById("14");
        Rec = pixels.getBoundingClientRect();
            x14 = Rec.left;
            y14 = Rec.top;

$('#Line1').line(x1+17, y1+35, x2+17, y2-3, {color:"#952969", stroke:5, zindex:1001});
$('#Line2').line(x2+17, y2+35, x3+17, y3-3, {color:"#952969", stroke:5, zindex:1001});
$('#Line3').line(x3+17, y3+35, x4+17, y4-3, {color:"#952969", stroke:5, zindex:1001});
$('#Line4').line(x2+3, y2+26, x5+37, y5+12, {color:"#952969", stroke:5, zindex:1001});
$('#Line5').line(x2+40, y2+14, x6, y6+25, {color:"#952969", stroke:5, zindex:1001});
$('#Line6').line(x6+38, y6+10, x7, y7+22, {color:"#952969", stroke:5, zindex:1001});
$('#Line7').line(x3+1, y3+8, x5+37, y5+27, {color:"#952969", stroke:5, zindex:1001});
$('#Line8').line(x3+39, y3+20, x9, y9+15, {color:"#952969", stroke:5, zindex:1001});
$('#Line9').line(x9+37, y9+26, x10, y10+10, {color:"#952969", stroke:5, zindex:1001});
$('#Line10').line(x1+36, y1+31, x6+10, y6, {color:"#952969", stroke:5, zindex:1001});
$('#Line11').line(x6+34, y6+31, x8+5, y8+3, {color:"#952969", stroke:5, zindex:1001});
$('#Line12').line(x8+28, y8+37, x10+17, y10-3, {color:"#952969", stroke:5, zindex:1001});
$('#Line13').line(x4+36, y4+7, x9+8, y9+31, {color:"#952969", stroke:5, zindex:1001});
$('#Line14').line(x8+10, y8+30, x9+31, y9, {color:"#952969", stroke:5, zindex:1001});
$('#Line15').line(x8+27, y8, x7+19, y7+35, {color:"#952969", stroke:5, zindex:1001});
       
       
       }

 function Allow_Drop(evnt){
      
      //dragged_item= evnt.target.getAttribute('id');
      evnt.preventDefault();
  }

function Drag(evnt) {

      dragged_item= evnt.target.getAttribute('id');
  if( turn == 1 && dragged_item > 20 && dragged_item<28 )
  {
   DragStore="A crow dragged ";
  evnt.dataTransfer.setData("text", evnt.target.id);
  
   }
   else if(turn == 0 && dragged_item == 0 ){
    DragStore="Vulture dragged ";
  evnt.dataTransfer.setData("text", evnt.target.id);
     }

}

function Drop(evnt) {
  if(c_win == 0 ) {

      dropped_item = evnt.target.getAttribute('id');
       //---check adjacent seat is filled or not---
 
 if(reset_place[dragged_item % 20]!=0  ){
    if(reset_place[dragged_item % 20] == 1 && set_place[2] == 1 && set_place[6] == 1)
    Flag=0;
   else if(reset_place[dragged_item % 20] == 4 && set_place[3] == 1 && set_place[9] == 1)
    Flag=0;
   else if(reset_place[dragged_item % 20] == 5 && set_place[3] == 1 && set_place[2] == 1)
    Flag=0;
   else if(reset_place[dragged_item % 20] == 7 && set_place[6] == 1 && set_place[8] == 1)
    Flag=0;
   else if(reset_place[dragged_item % 20] == 10 && set_place[8] == 1 && set_place[9] == 1)
    Flag=0;
   else  if(reset_place[dragged_item % 20] == 2 && set_place[1] == 1 && set_place[3] == 1 && set_place[5] == 1 && set_place[6] == 1)
    Flag=0;
   else  if(reset_place[dragged_item % 20] == 3 && set_place[2] == 1 && set_place[4] == 1 && set_place[5] == 1 && set_place[9] == 1)
    Flag=0;
   else  if(reset_place[dragged_item % 20] == 6 && set_place[1] == 1 && set_place[2] == 1 && set_place[7] == 1 && set_place[8] == 1)
     Flag=0;
   else  if(reset_place[dragged_item % 20] == 8 && set_place[7] == 1 && set_place[9] == 1 && set_place[10] == 1 && set_place[6] == 1)
    Flag=0;
  else  if(reset_place[dragged_item % 20] == 9 && set_place[4] == 1 && set_place[3] == 1 && set_place[8] == 1 && set_place[10] == 1)
    Flag=0;

   // Check Dropped place should be adjacent to crows.............
   else if(reset_place[dragged_item % 20] == 1 && (dropped_item == 3 || dropped_item == 4 || dropped_item == 5 || dropped_item == 7 ||
                              dropped_item == 8 || dropped_item == 9 || dropped_item == 10 ))
    Flag=0;
   else if(reset_place[dragged_item % 20] == 4 && (dropped_item == 1 || dropped_item == 2 || dropped_item == 5 || dropped_item == 7 ||
                              dropped_item == 8 || dropped_item == 6 || dropped_item == 10  ))
    Flag=0;
   else if(reset_place[dragged_item % 20] == 5 && (dropped_item == 1 || dropped_item == 4 || dropped_item == 6 || dropped_item == 7 ||
                              dropped_item == 8 || dropped_item == 9 || dropped_item == 10 ))
    Flag=0;
   else if(reset_place[dragged_item % 20] == 7 && (dropped_item == 1 || dropped_item == 4 || dropped_item == 2 || dropped_item == 5 ||
                              dropped_item == 3 || dropped_item == 9 || dropped_item == 10 ))
    Flag=0;
   else if(reset_place[dragged_item % 20] == 10 && (dropped_item == 1 || dropped_item == 4 || dropped_item == 6 || dropped_item == 7 ||
                              dropped_item == 2 || dropped_item == 3 || dropped_item == 5 ))
    Flag=0;
   else  if(reset_place[dragged_item % 20] == 2 && (dropped_item == 4 || dropped_item == 7 || dropped_item == 8 || dropped_item == 9 || dropped_item == 10 ))
    Flag=0;
   else  if(reset_place[dragged_item % 20] == 3 && (dropped_item == 1 || dropped_item == 7 || dropped_item == 8 || dropped_item == 6 || dropped_item == 10 ))
    Flag=0;
   else  if(reset_place[dragged_item % 20] == 6 && (dropped_item == 3 || dropped_item == 4 || dropped_item == 5 || dropped_item == 9 || dropped_item == 10 ))
     Flag=0;
   else  if(reset_place[dragged_item % 20] == 8 && (dropped_item == 1 || dropped_item == 2 || dropped_item == 3 || dropped_item == 4|| dropped_item == 5 ))
    Flag=0;
  else  if(reset_place[dragged_item % 20] == 9 && (dropped_item == 1 || dropped_item == 2 || dropped_item == 5 || dropped_item == 6 || dropped_item == 7 ))
    Flag=0;

  }
 else
 {
    Flag=1;
 }
// Check vulture can jump to capture a crow........
 if(turn == 0){
   // alert("checking here in"+reset_place[0]+"10:-"+set_place[10]+"8:-"+set_place[8]);
   if(reset_place[0] == 1 && ((set_place[6] == 1 && set_place[8] == 0 && dropped_item != 8) || 
    (set_place[2] == 1 && set_place[3] == 0 && dropped_item != 3)) )
    Flag = 0;
  else if(reset_place[0] == 4 && ((set_place[3] == 1 && set_place[2] == 0 && dropped_item != 2) || 
    (set_place[9] == 1 && set_place[8] == 0 && dropped_item != 8)) )
    Flag = 0;
  else if(reset_place[0] == 5 && ((set_place[2] == 1 && set_place[6] == 0 && dropped_item != 6) || 
    (set_place[7] == 1 && set_place[8] == 0 && dropped_item != 8)) )
    Flag = 0;
  else if(reset_place[0] == 7 && ((set_place[6] == 1 && set_place[2] == 0 && dropped_item != 2) || 
    (set_place[8] == 1 && set_place[9] == 0 && dropped_item != 9)) )
    Flag = 0;
  else if(reset_place[0] == 10 && ((set_place[8] == 1 && set_place[6] == 0 && dropped_item != 6) || 
    (set_place[9] == 1 && set_place[3] == 0 && dropped_item != 3)) )
    Flag = 0;
  else if(reset_place[0] == 2 && ((set_place[3] == 1 && set_place[4] == 0 && dropped_item != 4) || 
    (set_place[6] == 1 && set_place[7] == 0 && dropped_item != 7)) )
    Flag = 0;
  else if(reset_place[0] == 3 && ((set_place[2] == 1 && set_place[1] == 0 && dropped_item != 1) || 
    (set_place[9] == 1 && set_place[10] == 0 && dropped_item != 10)) )
    Flag = 0;
  else if(reset_place[0] == 6 && ((set_place[2] == 1 && set_place[5] == 0 && dropped_item != 5) || 
    (set_place[8] == 1 && set_place[10] == 0 && dropped_item != 10)) )
  {
    Flag = 0;
  }
  else if(reset_place[0] == 8 && ((set_place[6] == 1 && set_place[1] == 0 && dropped_item != 1) || 
    (set_place[9] == 1 && set_place[4] == 0 && dropped_item != 4)) )
    Flag = 0;
  else if(reset_place[0] == 9 && ((set_place[8] == 1 && set_place[7] == 0 && dropped_item != 7) || 
    (set_place[3] == 1 && set_place[5] == 0 && dropped_item != 5)) )
    Flag = 0;


//preparing to Jump...........................

if(reset_place[0] == 1 && set_place[6] == 1 && set_place[8] == 0 && dropped_item == 8 ) 
    {
     Flag = 1;   jump_flag = 1; Id_toJump = 6;
    }
else if(reset_place[0] == 1 && set_place[2] == 1 && set_place[3] == 0 && dropped_item == 3) 
    {
     Flag = 1;   jump_flag = 1; Id_toJump = 2;
    }
  else if(reset_place[0] == 4 && set_place[3] == 1 && set_place[2] == 0 && dropped_item == 2)
    {
     Flag = 1;   jump_flag = 1; Id_toJump = 3;
    }
  else if(reset_place[0] == 4 && set_place[9] == 1 && set_place[8] == 0 && dropped_item == 8)
      {
     Flag = 1;   jump_flag = 1; Id_toJump = 9;
    }
  else if(reset_place[0] == 5 && set_place[2] == 1 && set_place[6] == 0 && dropped_item == 6)
     {
     Flag = 1;   jump_flag = 1; Id_toJump = 2;
    }
  else if(reset_place[0] == 5 && set_place[7] == 1 && set_place[8] == 0 && dropped_item == 8)
 {
     Flag = 1;   jump_flag = 1; Id_toJump = 7;
    }
     
  else if(reset_place[0] == 7 && set_place[6] == 1 && set_place[2] == 0 && dropped_item == 2) 
    {
     Flag = 1;   jump_flag = 1; Id_toJump = 6;
    }
  else if(reset_place[0] == 7 && set_place[8] == 1 && set_place[9] == 0 && dropped_item == 9)
     {
     Flag = 1;   jump_flag = 1;Id_toJump = 8;
    }
  else if(reset_place[0] == 10 && set_place[8] == 1 && set_place[6] == 0 && dropped_item == 6) 
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 8;
    }

  else if(reset_place[0] == 10 &&set_place[9] == 1 && set_place[3] == 0 && dropped_item == 3)
     {
     Flag = 1;   jump_flag = 1;Id_toJump = 9;
    }
  else if(reset_place[0] == 2 && set_place[3] == 1 && set_place[4] == 0 && dropped_item == 4) 
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 3;
    }
  else if(reset_place[0] == 2 && set_place[6] == 1 && set_place[7] == 0 && dropped_item == 7)
  {
     Flag = 1;   jump_flag = 1;Id_toJump = 6;
    }
  else if(reset_place[0] == 3 && set_place[2] == 1 && set_place[1] == 0 && dropped_item == 1) 
   {
     Flag = 1;   jump_flag = 1;Id_toJump = 2;
    }
    else if(reset_place[0] == 3 && set_place[9] == 1 && set_place[10] == 0 && dropped_item == 10)
  {
     Flag = 1;   jump_flag = 1;Id_toJump = 9;
    }
    else if(reset_place[0] == 6 && set_place[2] == 1 && set_place[5] == 0 && dropped_item == 5) 
        {
     Flag = 1;   jump_flag = 1;Id_toJump = 2;
    }
  else if(reset_place[0] == 6 && set_place[8] == 1 && set_place[10] == 0 && dropped_item == 10)
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 8;
    }
  else if(reset_place[0] == 8 && set_place[6] == 1 && set_place[1] == 0 && dropped_item == 1)
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 6;
    }
  else if(reset_place[0] == 8 && set_place[9] == 1 && set_place[4] == 0 && dropped_item == 4)
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 9;
    }
  else if(reset_place[0] == 9 && set_place[8] == 1 && set_place[7] == 0 && dropped_item == 7) 
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 8;
    }
  else if(reset_place[0] == 9 && set_place[3] == 1 && set_place[5] == 0 && dropped_item == 5)
    {
     Flag = 1;   jump_flag = 1;Id_toJump = 3;
    }
     
 }
     // alert(reset_place[1]+" "+reset_place[2]+" "+reset_place[3]+" "+reset_place[4]+" "+reset_place[5]+" "+reset_place[6]+" "
     //   +reset_place[7]);
    if(set_place[dropped_item] != 1 && Flag){
       if( turn == 1 && dragged_item > 20 && dragged_item<28 && dropped_item!=0 && dropped_item < 20)
        {

 if(reset_place[dragged_item % 20] == 0 || (reset_place[1] != 0 && reset_place[2] != 0 && reset_place[3] != 0 
    && reset_place[4] != 0 && reset_place[5] != 0 && reset_place[6] != 0 && reset_place[7] != 0 ) ){
          turn = 1-turn;
         Call_Turn();
    
         set_place[dropped_item]=1;
          if(reset_place[dragged_item % 20] != 0){
            set_place[reset_place[dragged_item % 20]]=0;
          }
         reset_place[dragged_item % 20]=dropped_item;
         DropStore="and dropped at position : "+dropped_item ;
         textToWrite=textToWrite+DragStore+DropStore+"\n";
         console.log(DragStore+DropStore);
        evnt.preventDefault();
        var data = evnt.dataTransfer.getData("text");
         evnt.target.appendChild(document.getElementById(data));
       Check_win();
        }
    }
        else if(turn == 0 && dragged_item == 0 && dropped_item < 20  ){
          turn = 1-turn;
        Call_Turn();
          set_place[dropped_item]=1;
          if(reset_place[dragged_item % 20] != 0){
            set_place[reset_place[dragged_item % 20]]=0;
          }

         DropStore="and dropped at position : "+dropped_item ;
         reset_place[dragged_item % 20]=dropped_item;
         if(jump_flag == 1){
            //alert(Id_toJump);
            //alert(reset_place.indexOf('2'));
            for(i=0;i<reset_place.length;i++)
            {
                if(reset_place[i] == Id_toJump) 
                    {
                        Id_toJump=i;
                        break;
                    }
            }

                  Id_toJump = 20 + Id_toJump;

                   set_place[reset_place[Id_toJump % 20]]=0;
                   reset_place[Id_toJump-20]=100;
                   cap_count=cap_count+1;

                DropStore=DropStore+", also one crow captured."
                   move_crows(Id_toJump);
                   jump_flag = 0;
         }

         textToWrite=textToWrite+DragStore+DropStore+"\n";
         console.log(DragStore+DropStore);
         evnt.preventDefault();
        var data = evnt.dataTransfer.getData("text");
        evnt.target.appendChild(document.getElementById(data));
         Check_win();
        }
    }
    Flag=1;  
}
}


function Check_win(){
     
      if((reset_place[0] == 1 && set_place[2] == 1 && set_place[6] == 1 && set_place[3] == 1 && set_place[8] == 1) ||
         (reset_place[0] == 4 && set_place[3] == 1 && set_place[9] == 1 && set_place[2] == 1 && set_place[8] == 1) ||
         (reset_place[0] == 5 && set_place[2] == 1 && set_place[3] == 1 && set_place[9] == 1 && set_place[6] == 1) ||
         (reset_place[0] == 7 && set_place[6] == 1 && set_place[8] == 1 && set_place[2] == 1 && set_place[9] == 1) ||
         (reset_place[0] == 10 && set_place[8] == 1 && set_place[9] == 1 && set_place[3] == 1 && set_place[6] == 1) ||
         (reset_place[0] == 2 && set_place[1] == 1 && set_place[3] == 1 && set_place[5] == 1 && set_place[6] == 1
            && set_place[4] == 1 && set_place[7] == 1) ||
         (reset_place[0] == 3 && set_place[2] == 1 && set_place[4] == 1 && set_place[5] == 1 && set_place[9] == 1
            && set_place[1] == 1 && set_place[10] == 1) ||
         (reset_place[0] == 6 && set_place[1] == 1 && set_place[2] == 1 && set_place[7] == 1 && set_place[8] == 1
            && set_place[5] == 1 && set_place[10] == 1) ||
         (reset_place[0] == 8 && set_place[6] == 1 && set_place[7] == 1 && set_place[9] == 1 && set_place[10] == 1
            && set_place[1] == 1 && set_place[4] == 1) ||
         (reset_place[0] == 9 && set_place[3] == 1 && set_place[4] == 1 && set_place[8] == 1 && set_place[10] == 1
            && set_place[5] == 1 && set_place[7] == 1) 
        )
      {
        c_win=1;
    document.getElementById("vulture-turn").innerHTML = "You Lost..";
    document.getElementById("crows-turn").innerHTML = "You Won..";
           
         console.log("Crows Won the Game");
 celebrate();
 winning_sound();
         textToWrite=textToWrite+"Crows Won the Game";
     createFile();
    swal({
  title: "Congratulations",
  text: "Crows Won the Game",
  icon: "success",
  button: "Start New Game",
}) .then(function() {
    location.reload();
});

      }
      else if(cap_count >= 4)
        {
      c_win=1;
    document.getElementById("vulture-turn").innerHTML = "You Won..";
    document.getElementById("crows-turn").innerHTML = "You Lost..";
   celebrate();
   winning_sound();
     console.log("Vulture Won the Game");
         textToWrite=textToWrite+"Vulture Won the Game";
     createFile();
    swal({
  title: "Congratulations",
  text: "Vulture Won the Game",
  icon: "success",
  button: "Start New Game",
}) .then(function() {
    location.reload();
});
      
        }
}

function move_crows(pos){
     /*    
$('#21').draggable();
$('#21').css({'top': 360, 'left' : 60});
*/
//alert("called : "+pos);
var x = document.getElementById(pos);
    x.style.display = "none";
   // alert(cap_count);
var id_ = 10 + cap_count;
 document.getElementById(id_).style.backgroundColor = "#95180E";
 document.getElementById(id_).style.border="1px solid #3E0B07";
 document.getElementById(id_).style.visibility="visible";

}

function Call_Turn(){
if(turn == 1){
    document.getElementById("vulture-turn").innerHTML = "";
    document.getElementById("crows-turn").innerHTML = "Your turn >>";
}
else
{

    document.getElementById("vulture-turn").innerHTML = "<< Your turn";
    document.getElementById("crows-turn").innerHTML = "";
}

}
function createFile() {
    var textFileAsBlob = new Blob([textToWrite], {type:'application/xhtml+xml; charset=utf-8'});
        var downloadLink = document.createElement("a");
        downloadLink.download = 'gameLog.doc';
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
          downloadLink.click();
        }
        else {
            downloadLink.href =        window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = destroyClickedElement;
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
}



function RemoveLines(){

$( "#Line1" ).remove();
$( "#Line2" ).remove();
$( "#Line3" ).remove();
$( "#Line4" ).remove();
$( "#Line5" ).remove();
$( "#Line6" ).remove();
$( "#Line7" ).remove();
$( "#Line8" ).remove();
$( "#Line9" ).remove();
$( "#Line10" ).remove();
$( "#Line11" ).remove();
$( "#Line12" ).remove();
$( "#Line13" ).remove();
$( "#Line14" ).remove();
$( "#Line15" ).remove();
 $("<div/>").attr('id','Line1').appendTo('.Container'); 
 $("<div/>").attr('id','Line2').appendTo('.Container'); 
 $("<div/>").attr('id','Line3').appendTo('.Container'); 
 $("<div/>").attr('id','Line4').appendTo('.Container'); 
 $("<div/>").attr('id','Line5').appendTo('.Container'); 
 $("<div/>").attr('id','Line6').appendTo('.Container'); 
 $("<div/>").attr('id','Line7').appendTo('.Container'); 
 $("<div/>").attr('id','Line8').appendTo('.Container'); 
 $("<div/>").attr('id','Line9').appendTo('.Container'); 
 $("<div/>").attr('id','Line10').appendTo('.Container'); 
 $("<div/>").attr('id','Line11').appendTo('.Container'); 
 $("<div/>").attr('id','Line12').appendTo('.Container'); 
 $("<div/>").attr('id','Line13').appendTo('.Container'); 
 $("<div/>").attr('id','Line14').appendTo('.Container'); 
 $("<div/>").attr('id','Line15').appendTo('.Container'); 
}


function celebrate(){
    for(i=0; i<100; i++) {
  // Random rotation
  var randomRotation = Math.floor(Math.random() * 360);
    // Random Scale
  var randomScale = Math.random() * 1;
  // Random width & height between 0 and viewport
  var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
  
  // Random animation-delay
  var randomAnimationDelay = Math.floor(Math.random() * 15);
  console.log(randomAnimationDelay);

  // Random colors
  var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Create confetti piece
  var confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.top=randomHeight + 'px';
  confetti.style.right=randomWidth + 'px';
  confetti.style.backgroundColor=randomColor;
  // confetti.style.transform='scale(' + randomScale + ')';
  confetti.style.obacity=randomScale;
  confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
  confetti.style.animationDelay=randomAnimationDelay + 's';
  document.getElementById("confetti-wrapper").appendChild(confetti);
}

}

function winning_sound() {
    document.getElementById('audiotag1').pause();
    document.getElementById('audiotag2').play();
}
//**************************************************| THE END |************************************************************************
