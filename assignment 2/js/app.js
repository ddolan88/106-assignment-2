const nonImpIcon = "far fa-star";
const impIcon = "fas fa-star";
var isImportant = false;
var isVisible = true;
var isHidden = true;


function toggleImportant(){

    if(isImportant){
        $("#iImportant").removeClass(impIcon).addClass(nonImpIcon);
        isImportant = false;
    }else{
        $("#iImportant").removeClass(nonImpIcon).addClass(impIcon);
        isImportant = true;
    }
};

function toggleForm(){
    $("#hide-form-btn").click(function(){
        $("#task-form").toggle();
    });
}

// function toggleForm(){
//     if(isVisible){
//         $("#task-form").fadeOut();
//         isVisible = true;                                       
//     }else{
//         $("#task-form").show();
//         isVisible = false;
//     }
// } couldnt figure out an if else to hide the form....had to copy /////   paste a function.....

function init(){
    console.log("task manager")

    // load data

    // hook events
    $("#iImportant").click(toggleImportant);
    $("#hide-form-btn").click(toggleForm);
}

window.onload = init;