

function randomColor()
{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function createButtons()
{
    for(let i = 1; i<11;i++)
    {
        const button = document.createElement("button");
        var color = randomColor();
        button.style.backgroundColor = color;
        button.innerText = `Button ${i}`;
        button.style.height = "50px";
        button.style.width = "80px";
        button.style.margin = "5px";
        button.style.cursor = "pointer";
        base.push(color);
        theButtons.appendChild(button);

    }
}
function inputChange()
{
    const selected = document.getElementById("colorSelect").value; 
    const buttons = theButtons.getElementsByTagName("button");

    for(let i = 0;i<10;i++)
    {
        if(selected == "reset")
        {
            buttons[i].style.backgroundColor = base[i];
        }
        else if(selected == "random")
        {
            buttons[i].style.backgroundColor = randomColor()
        }
        else
        {
            buttons[i].style.backgroundColor = selected;
        }
    }
}


const theButtons = document.querySelector(".buttons");
var base = [];
createButtons();