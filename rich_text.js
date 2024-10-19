let optionButtons = document.querySelectorAll(".option-button");

let advanceOptionButton  = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButton = document.querySelectorAll(".align");
let spacingButton = document.querySelectorAll(".spacing");
let formatButton = document.querySelectorAll(".format");
let scriptButton = document.querySelectorAll(".script");

//List of Fonts

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive"

]





const highlighter = (className, needsRemoval) =>{
   // console.log("Hello highligher");
    className.forEach((button)=>{
            button.addEventListener("click", () =>{
                if(needsRemoval){
                    let alreadyActive = false;

                    if(button.classList.contains("active")){
                        alreadyActive = true;
                       // console.log("from contains");
                    }

                    highlighterRemover(className);
                    if(!alreadyActive){
                        button.classList.add("active");
                        //console.log("from after highlighter removal");
                    }
                }
                else{
                    button.classList.toggle("active");
                    //console.log("from last else");
                }
            });
    });
}

// initial settings

const initializer = () =>{
    highlighter(alignButton, true);
    highlighter(spacingButton, true);
    highlighter(scriptButton, true);
    highlighter(formatButton, true);

   // create fonts
    fontList.map((value) =>{
        let option  = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    //creat fontSize

    for(let i = 0; i<7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    //default font size

    fontSizeRef.value = 3;
};


//main logic is here :)

const modifyText = (command, defaultUi, value) =>{
    document.execCommand(command, defaultUi, value);
}

optionButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        modifyText(button.id,false,null);
    });
});

advanceOptionButton.forEach((button) =>{
    button.addEventListener("change", ()=>{
        modifyText(button.id,false,button.value);
    });
});

//linkButton

    linkButton.addEventListener("click", ()=>{
        let userLink = prompt("Enter a URL");
        if(/http/i.test(userLink)){
            modifyText(linkButton.id,false,userLink);
        }
        else{
            userLink = "http:\\" + userLink;
            modifyText(linkButton.id,false, userLink);
        }
    })


const highlighterRemover = (className) => {
    className.forEach((button) => {
      button.classList.remove("active");
    });
  };

window.onload = initializer();