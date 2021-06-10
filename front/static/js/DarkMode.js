var aujourdhui = new Date();
var heures = aujourdhui.getHours() + 2;
var element = document.body;
var navBar = document.getElementById('nav')
var darkModeIsOn = false;

    if (heures > 19 || heures < 7){
        element.classList.add("dark-mode");
        console.log('il est ' + heures + 'h Dark mode activé');
        darkModeIsOn = true;
    }
    else {
        element.classList.remove("dark-mode");
        console.log('il est ' + heures + 'h et le Dark mode desactivé !');
        darkModeIsOn = false;
    };

function disableDark(){
    element.classList.toggle("dark-mode");
    navBar.classList.toggle("dark_nav");
    console.log('il est ' + heures + '.h et le Dark mode desactivé !');
    if ( darkModeIsOn = true ){ darkModeIsOn = false }
    else { darkModeIsOn = true }
}