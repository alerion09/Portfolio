document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{
    const menu_button = document.getElementById('menu_button');
    menu_button.addEventListener('click', toggleMenu, false);

    function toggleMenu()
    {
        const navigation = document.querySelector('.navigation');
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
