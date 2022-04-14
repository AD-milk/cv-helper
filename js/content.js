
function searchAndSetActiceInput(str){
    var activeObjId = document.activeElement.id;
    var obj = document.getElementById(activeObjId);
    obj.value = str;
}

var index = 0;
var flag = true;
var arr = new Array(
    "项目1名称",
    "项目1描述",
    "项目2名称",
    "项目2描述"
)

function valid(){
    if(index < 0){
        index = arr.length-1;
    }
    if(index >= arr.length){
        index = 0;
    }
}

$(document).keydown(function (event){
    if(event.altKey && event.keyCode == 38){ // alt+向上方向键
        if(flag){
            index-=2;
        }else{
            index--;
        }
        flag = false;
        valid();
        searchAndSetActiceInput(arr[index]);
    }else if(event.altKey && event.keyCode == 40){ // alt+向下方向键 
        if(flag == false){
            index++;
        }
        flag = true;
        valid();
        searchAndSetActiceInput(arr[index++]);
    }else if (event.keyCode == 66 && event.altKey) {  //alt+b
        searchAndSetActiceInput("姓名");
    }
});