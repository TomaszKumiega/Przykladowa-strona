function leftPanelAction()
{
    var mq = window.matchMedia('only screen and (min-width: 700px)');
    if(mq.matches)
    {
        var links = document.getElementsByClassName("links");
        var pressedlinks = document.getElementsByClassName("pressedlinks");
        var lp = document.getElementById("left-panel");

        if(document.getElementById("left-panel").offsetWidth > 0)
        {
            for(var i=0; i<links.length; i++)
            {
                links[i].style.visibility = 'hidden';
                links[i].style.width = '0';
            }

            for(var i=0; i<pressedlinks.length; i++)
            {
                pressedlinks[i].style.visibility = 'hidden';
                pressedlinks[i].style.width = '0';  
            }

            lp.style.width = '0';
            lp.style.visibility = 'hidden';
        }
        else
        {            
            for(var i=0; i<links.length; i++)
            {
                links[i].style.visibility = 'visible';
                links[i].style.width = '100%';
            }
                
            for(var i=0; i<pressedlinks.length; i++)
            {
                pressedlinks[i].style.visibility = 'visible';
                pressedlinks[i].style.width = '100%';  
            }
            
            lp.style.width = 'fit-content';
            lp.style.visibility = 'visible';
        }
    }
}
