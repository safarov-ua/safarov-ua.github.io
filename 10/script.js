function check(text){
  var arr = [];
  var last;
  var curr;
  
  if(typeof text != 'string'){
    return false
  }

  for(var i = 0;i<text.length;i++){
    curr = text[i];

    if((curr=='[') || (curr=='{') || (curr=='(')){
      arr.push(curr);
    }
    else if((curr==']') || (curr=='}') || (curr==')')){
      if(arr.length>0){
        last = arr.pop();
        if((curr==']' && last!='[') ||
           (curr=='}' && last!='{') ||
           (curr==')' && last!='(')){
          return false
        }
      }
      else{
        return false
      }
    }
  }

  return(arr.length == 0);
}

var input = document.getElementById("input");
var button = document.getElementById("check");
var result = document.getElementById("result");

button.onclick = function(){
  result.textContent = check(input.value)
}
