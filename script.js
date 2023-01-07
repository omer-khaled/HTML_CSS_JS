let divs=[
    '.landing>.slider>.lading-content:nth-child(1)',
    '.landing>.slider>.lading-content:nth-child(2)',
    '.landing>.slider>.lading-content:nth-child(3)',
    '.landing>.slider>.lading-content:nth-child(4)'
];
let active_anchor=[
    '.landing>.Landing_header>.links>li:nth-child(1)>a',
    '.landing>.Landing_header>.links>li:nth-child(2)>a',
    '.landing>.Landing_header>.links>li:nth-child(3)>a',
    '.landing>.Landing_header>.links>li:nth-child(4)>a'
];
let shid_images=document.querySelectorAll(".ourGalary>.prudoucts>.container");
let slider=0;
let position_now='landing';
let choosen_color=localStorage.getItem("main_color");
let colors_paker=document.querySelectorAll(".setting>.color_options>ul>li");

document.querySelector('.navigation_bullets>.bullets>div:nth-child(1)').classList.add('choise');
document.querySelector('.landing').scrollIntoView({
    behavior : 'smooth',
});

let right=document.getElementById('ri');
// angle right
right.addEventListener("click",()=>{
    if(slider==(divs.length-1)){
        console.log("do no thing");
    }
    else{
        let url=divs[slider];
        document.querySelector(url).style.transform="translateX(-100%)";
        let url_color=active_anchor[slider];
        document.querySelector(url_color).style.color="#80808069";
        url=divs[slider+1];
        document.querySelector(url).style.transform="translateX(0)";
        url_color=active_anchor[slider+1];
        document.querySelector(url_color).style.color=localStorage.getItem("main_color");
        slider++;   
    }
});
// angle right keyboard
document.onkeydown=function(e){
    // console.log(e.key);
   if(e.key=='ArrowRight'){
    // console.log(e.key);
    if(slider==(divs.length-1)){
        console.log("do no thing");
    }
    else{
        let url=divs[slider];
        document.querySelector(url).style.transform="translateX(-100%)";
        let url_color=active_anchor[slider];
        document.querySelector(url_color).style.color="#80808069";
        url=divs[slider+1];
        document.querySelector(url).style.transform="translateX(0)";
        url_color=active_anchor[slider+1];
        document.querySelector(url_color).style.color=localStorage.getItem("main_color");
        slider++;   
    }
   }
   else if(e.key=='ArrowLeft'){
    if(slider==(0)){  
        console.log("do no thing");
    }
    else{
        let url=divs[slider];
        document.querySelector(url).style.transform="translateX(100%)";
        let url_color=active_anchor[slider];
        document.querySelector(url_color).style.color="#80808069";
        url=divs[slider-1];
        document.querySelector(url).style.transform="translateX(0)";
        url_color=active_anchor[slider-1];
        // console.log(url_color);
        document.querySelector(url_color).style.color=localStorage.getItem("main_color");
        slider--;   
    }
   }
    // console.log(e.target.key);
}
// angle left
let left=document.getElementById('le');
left.addEventListener("click",()=>{
    if(slider==(0)){  
        console.log("do no thing");
    }
    else{
        let url=divs[slider];
        document.querySelector(url).style.transform="translateX(100%)";
        let url_color=active_anchor[slider];
        document.querySelector(url_color).style.color="#80808069";
        url=divs[slider-1];
        document.querySelector(url).style.transform="translateX(0)";
        url_color=active_anchor[slider-1];
        // console.log(url_color);
        document.querySelector(url_color).style.color=localStorage.getItem("main_color");
        slider--;   
    }
});


// on scroll
let navgat_bullets=document.querySelectorAll(".navigation_bullets>.bullets");
window.onscroll=()=>{
    if(document.documentElement.scrollTop>=80){
        document.querySelector(".landing>.Landing_header").style.position="fixed";
        document.querySelector(".landing>.Landing_header").style.left="0";
        document.querySelector(".landing>.Landing_header").style.right="0";
        document.querySelector(".landing>.Landing_header").style.top="0";
        document.querySelector(".landing>.Landing_header").style.background="white";
    }
    else{
        document.querySelector(".landing>.Landing_header").style.position="unset";
        document.querySelector(".landing>.Landing_header").style.left="unset";
        document.querySelector(".landing>.Landing_header").style.right="unset";
        document.querySelector(".landing>.Landing_header").style.top="unset";
        document.querySelector(".landing>.Landing_header").style.background="unset";
    }
    let div_top=document.querySelector(".skills").offsetTop;
    let div_height=document.querySelector(".skills").offsetHeight;
    let screen_height=this.innerHeight;
    let window_scroll=this.scrollY;
    let widths=["90%","85%","80%","70%"];
    if(window_scroll >= ( div_height + div_top - screen_height)){
        let elements=Array.from(document.querySelectorAll(".skills>.skilss_progress>.progress>.progress_after"));
        // console.log(( div_height + div_top - screen_height));
        elements.forEach((element,index)=>{
            element.style.width=`calc( ${widths[index]} + 25px)`;
            // console.log(element);
            // console.log(index);
        });
    }
    
    // show from left and right
    let screen_heightC=this.innerHeight;
    let window_scrollC=this.scrollY;
    shid_images.forEach((element)=>{
        let div_heightC=element.offsetHeight;
        let div_topC=element.offsetTop;
        if(window_scrollC >= (div_topC + div_heightC  - screen_heightC)){
            element.firstElementChild.style.transform="translateX(0%)";
            element.firstElementChild.nextElementSibling.style.transform="translateX(0%)";
        }
    });

    // show time line from right and left
    let timeline_divs_left=document.querySelectorAll(".timeline>.left>.content");
    let timeline_divs_right=document.querySelectorAll(".timeline>.right>.content");
    let window_scrollY=window.pageYOffset;
    let window_height=window.innerHeight;
    timeline_divs_left.forEach((element,index)=>{
        let element_top=window.pageYOffset + element.getBoundingClientRect().top;
        let element_height=element.offsetHeight;
        if(window_scrollY > (element_height + element_top - window_height)){
            // console.log(window_scrollY);
            // console.log(element_top);
            element.parentElement.style.overflow="visible";
            element.style.transform="translateX(0%)";
            timeline_divs_right[index].style.transform="translateX(0%)";
        }
    });

    // scorll butllets
    console.log(document.querySelectorAll('body>div'));
    let all_dive=Array.from(document.querySelectorAll('body>div'));
    for(let i=0,size= all_dive.length;i<size;i++){
        if(all_dive[i].getAttribute('class')!='setting' && all_dive[i].getAttribute('class')!='popup' && all_dive[i].getAttribute('class')!='navigation_bullets' && all_dive[i].getAttribute('class') !='footer'){
            navgat_bullets.forEach(bullets=>{
                if(this.scrollY >= ( (all_dive[i].offsetHeight / 2) + all_dive[i].offsetTop  - this.innerHeight)){
                    let section_name=bullets.querySelector(".text");
                    // let section_name_one=section_name.innerHTML.split(' ').filter(x=> x != "" && x != "\n").join([' ']);
                    let section_name_one=section_name.innerHTML.toString();
                    let div_name=all_dive[i].getAttribute('class');
                    // console.log(section_name_one , "   ",div_name);
                    if(div_name == section_name_one){
                        navgat_bullets.forEach(bulletss=>{
                            bulletss.firstElementChild.classList.remove('choise');
                        });
                        bullets.firstElementChild.classList.add('choise');
                    }
                    else{
                        console.log("not exist");
                    }
                }
            });
        }
    }
}

// show and hide setting bar
let Setting_status=true;
document.querySelector(".setting>.icon_setting").onclick=function(){
    if(Setting_status===true){
        document.querySelector(".setting").style.left="0";
        document.querySelector(".setting>.icon_setting>i").classList.add("fa-spin");
        Setting_status=false;
    }
    else{
        document.querySelector(".setting").style.left="-13%";
        document.querySelector(".setting>.icon_setting>i").classList.remove("fa-spin");
        Setting_status=true;
    }
};

// color
// localStorage.remove("");
if(choosen_color!==null){
    document.documentElement.style.setProperty("--main_color",choosen_color);
    colors_paker.forEach((element)=>{
        element.classList.remove("active");
        if(element.getAttribute("background_color")==choosen_color){
            element.classList.add("active");
        }
    });
}

colors_paker.forEach((element)=>{
    element.onclick=(e)=>{
        localStorage.setItem("main_color",e.target.getAttribute("background_color"));
        document.documentElement.style.setProperty("--main_color",e.target.getAttribute("background_color"));
        colors_paker.forEach((element)=>{
            element.classList.remove("active");
        })
        e.target.classList.add("active");
        document.querySelector(active_anchor[slider]).style.color=e.target.getAttribute("background_color");
    };
    // element.classList.remove("active");
});


// show Image popup

let shid_container_images=document.querySelectorAll(".ourGalary>.prudoucts>.container>.img");

shid_container_images.forEach((element)=>{
    element.onclick=(e)=>{
        let source=e.target.src;
        let Altrant=e.target.alt;
        let popup_h3=document.createElement("h3");
        let popup_h3_text=document.createTextNode(Altrant);
        popup_h3.appendChild(popup_h3_text);
        let popup_image=document.createElement("img");
        popup_image.src=source;
        popup_image.alt=Altrant;
        document.querySelector(".popup>.container").appendChild(popup_h3);
        document.querySelector(".popup>.container").appendChild(popup_image);
        document.querySelector(".popup").style.display="flex";
    };
    // console.log(element);
});

document.querySelector(".popup>.container>i").onclick=()=>{
    document.querySelector(".popup>.container>img").remove();
    document.querySelector(".popup>.container>h3").remove();
    document.querySelector(".popup").style.display="none";
};

// navgation in rghit of website


navgat_bullets.forEach(bullets=>{
    let navgat_bullets_dive=document.createElement('div');
    navgat_bullets_dive.className='choise';
    bullets.addEventListener("click",(e)=>{
        navgat_bullets.forEach(bul=>{bul.firstElementChild.classList.remove('choise')});
        let section_name=e.target.querySelector(".text");
        let section_name_one=section_name.innerHTML.split(' ').filter(element=> element != "" && element != "\n")[0];
        bullets.firstElementChild.classList.add('choise');
        document.querySelector(`.${section_name_one}`).scrollIntoView({
            behavior : 'smooth',
        });
    });

});

// display navgation or no

let navigtion_li=document.querySelectorAll('.setting>.navigation_options>ul>li');

let check_showen=localStorage.getItem('check_showen');

if(check_showen !== null){
    console.log(check_showen);
    navigtion_li.forEach((li)=>{
        li.classList.remove('active_choise');
        if(check_showen === li.getAttribute('val') && li.getAttribute('val')=='yes'){
            console.log("here yes");
            document.querySelector('.navigation_bullets').style.display='block';
            li.classList.add('active_choise');
        }
        else if(check_showen === li.getAttribute('val') && li.getAttribute('val')=='No'){
            console.log("here no");
            document.querySelector('.navigation_bullets').style.display='none';
            li.classList.add('active_choise');
        }
    });
}
console.log(navigtion_li);

navigtion_li.forEach((li)=>{
   li.addEventListener("click",(()=>{
        navigtion_li.forEach((li)=>{
            li.classList.remove('active_choise');
        });
        li.classList.add('active_choise');
        if(li.getAttribute('val') == 'yes'){
            document.querySelector('.navigation_bullets').style.display='block';
            localStorage.setItem("check_showen",'yes');
        }
        else if(li.getAttribute('val') == 'No'){
            document.querySelector('.navigation_bullets').style.display='none';
            localStorage.setItem("check_showen",'No');
        }
   }));
});



// Rest all options

document.querySelector('.setting>.Rest').onclick=function (){
    localStorage.clear();
    window.location.reload();
};


// set interval
let start=1;
let set_interval=setInterval(()=>{
    let val=document.querySelector(".loading>span");
    if(start==3){
        val.innerHTML="loading.";
        start=0;
    }
    else{
        val.innerHTML+='.';
    }
    start++;
},400);

// remove loading

let set_timeout1=setTimeout(()=>{
    document.querySelector('.loading').classList.add('show-page');
    clearInterval(set_interval);
},3500)
let set_timeout2=setTimeout(()=>{
    document.querySelector('.loading').style.display='none';
    clearInterval(set_interval);
},4300)




