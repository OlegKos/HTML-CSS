window.onscroll = function(){ 
    var header = document.getElementById("header")
    if((window.scrollY>0)&&(screen.width<800)){
        header.style.backgroundColor="#ffffff";
        header.style.position="fixed";
        header.style.boxShadow="0 1px 10px rgba(0, 0, 0, 0.15)";
    }
    else{
        header.style.backgroundColor="#ebebeb";
        header.style.position="";
        header.style.boxShadow="";        
    }
    
};

function ShowMenu() {   
    document.getElementById("hidden-menu").style.transform="translate(330px,0px)";
};


function CloseMenu() {
    document.getElementById("hidden-menu").style.transform="translate(-330px,0px)";
    
};

