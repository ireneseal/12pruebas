


   const menu = document.querySelector('.listado');

   let lastMenuScroll = 0;

   menu.addEventListener('scroll', function(){
       var scrollpoint =  menu.scrollTop;
       if (scrollpoint> lastMenuScroll && (menu.scrollTop + menu.offsetHeight>= menu.scrollHeight)) {
          
           const firstMenuItem = document.querySelector('.plate:first-child');
           const cloneMenuItem = firstMenuItem.cloneNode(true);
           menu.appendChild(cloneMenuItem);
           firstMenuItem.remove();  
       }  
   })
