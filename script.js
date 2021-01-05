document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    const navigation = document.querySelector('.navigation');
    const menu_button = document.getElementById('menu_button');
    const menu_link = document.querySelectorAll('.menu_link');
    menu_button.addEventListener('click', toggleMenu, false);
    
    for (let i=0; i< menu_link.length; i++)
    {
        menu_link[i].addEventListener('click', function(){
            navigation.style.display = 'none';
        }, false);
    }

    function toggleMenu()
    {
        
        if(navigation.style.display == 'initial')
        {
            navigation.style.display = 'none';
        }
        else
        {
            navigation.style.display = 'initial';
        }
    }
}
