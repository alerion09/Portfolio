document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    const navigation = document.querySelector('.navigation');
    const menu_button = document.getElementById('menu_button');
    const menu_link = document.querySelectorAll('.menu_link');
    const form = document.forms["contact"];
    form.addEventListener('submit', validateForm);

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
    function validateForm(event)
    {   
        const name = document.forms["contact"]["name"];
        const email = document.forms["contact"]["email"];
        const message = document.forms["contact"]["message"];
        const mailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        console.log('validate');
        //If either of form input is empty then ..
            if(name.value == "")
            {
                name.style = 'box-shadow: 0 0 0 1px rgb(245, 92, 92);';
                event.preventDefault();
            }
            else
            {
                name.style = 'border: none';
            }
            if(email.value == "" || !email.value.match(mailFormat))
            {
                email.style = 'box-shadow: 0 0 0 1px rgb(245, 92, 92);';
                event.preventDefault();
            }
            else
            {
                email.style = 'border: none';
            }
            if(message.value == "")
            {
                message.style = 'box-shadow: 0 0 0 1px rgb(245, 92, 92);';
                event.preventDefault();
            }
            else 
            {
                message.style = 'border: none';
            }
    }
}
    
