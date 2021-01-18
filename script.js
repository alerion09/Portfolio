document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    const navigation = document.querySelector('.navigation');
    const menu_button = document.getElementById('menu_button');
    const menu_link = document.querySelectorAll('.menu_link');
    
    
    if (menu_button.style.display != 'none')
    {
        menu_button.addEventListener('click', toggleMenu, false);

        for (let i=0; i< menu_link.length; i++)
        {
            menu_link[i].addEventListener('click', function(){
                navigation.className = 'navigation';
            }, false);
        }

        function toggleMenu()
        {
            
            if(navigation.className == 'navigation_show')
            {
                navigation.className = 'navigation';
            }
            else
            {
                navigation.className = 'navigation_show';
            }
        }
    }
}
    
