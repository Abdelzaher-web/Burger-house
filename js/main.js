/* 
Web developer : Youssef Abdelzaher
Develop date : 25/7/2021 
*/

$(document).ready(()=>{
    // Add active class for navbar 
    $(window).scroll(()=>{
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("active")
        }else{
            $(".navbar").removeClass("active")
        }
    })

    // Add event for navbar logo 

    $(".navbar .logo img").click(()=>{
        $("html,body").animate({
            scrollTop: 0
        },100)
    })

    $(".header").css("height",$(window).innerHeight())

    // Add links-m  and overay and close button
    $(".navbar .bars").click(()=>{
        // Add overlay 
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        
        // Add close button 
        let close = document.createElement("div");
        close.className = "close";
        let icon = document.createElement("i");
        icon.className = "icon fa fa-times";
        close.appendChild(icon);
        overlay.appendChild(close);

        // Add close function 
        function closeFun() {
            $(".links-m").removeClass("active");
            $(close).fadeOut("slow")
            $(overlay).fadeOut("slow",()=>{
                overlay.remove();
            })
        }

        $(overlay,close).click(()=>{
            $(".links-m").removeClass("active");
            closeFun();
        });


        // Add event for links mobile
        let linksMobile = document.querySelectorAll(".links-m a");
        linksMobile.forEach((el,index)=>{
            el.onclick = e =>{
                if (index === 0) {
                    e.preventDefault();
                    closeFun();
                    $("html,body").animate({
                        scrollTop: 0
                    },100)
                    
                }
            }
        })
        

        $("body").append(overlay)
        $(overlay).fadeIn("slow")
        $(".links-m").addClass("active");
        
        $(window).resize(()=>{
            if (window.innerWidth >= 992 ) {
                closeFun();
            }
        })

        
    })

    // Add event for two links from links and moble links
    let links = document.querySelectorAll(".navbar .links a");
    

    
    links.forEach((el,index)=>{
        el.onclick = e =>{
            if (index === 0) {
                e.preventDefault();
                $("html,body").animate({
                    scrollTop: "0px"
                },100)
            }
        }
    })


    // Add scrollTop button 
    let scrollTopButton = document.querySelector(".scrollTop");
    scrollTopButton.onclick = () => {
        $("html,body").animate({
            scrollTop: "0px"
        },100)
    };

    window.addEventListener("scroll", () => {
        if (window.scrollY <= 100) {
            $(scrollTopButton).fadeOut("slow");
        } else {
            $(scrollTopButton).fadeIn("slow");
        }
    });

});