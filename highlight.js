window.onload=function(){
    [...document.getElementsByTagName("code")].forEach(e=>{
        e.innerHTML = e.innerText.replace(/(var|Number|new|"(.*?)"|'(.*?)')|\(|\)/g,function(match){
            if(match[0]=="\"" || match[0]=="\'" ){
                return `<str>${match}</str>`;
            }
            switch(match){
                case "var":
                case "Number":
                    return `<mark>${match}</mark>`;
                case "(":
                case ")":
                    return `<parenthesis>${match}</parenthesis>`;
                default:
                    return `<purple>${match}</purple>`;
            }
        });
    });
};