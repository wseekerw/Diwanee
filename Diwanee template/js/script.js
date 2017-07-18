function toggleNav() {
        
    var sidenav = document.getElementById("mySidenav");
    if (sidenav.style.width == "100%") {
        sidenav.style.width = "0";
        
    } else {
        sidenav.style.width = "100%";
    } 
    
    
};

function openNav() {
    
    

    if ((window.matchMedia('(min-width: 768px)').matches) && (window.matchMedia('(max-width: 1023px)').matches)) {
        document.getElementById("mySidenav").style.width = "768px";
    } else {
        document.getElementById("mySidenav").style.width = "1024px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};







