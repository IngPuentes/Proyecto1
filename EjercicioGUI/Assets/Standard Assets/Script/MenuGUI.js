
function OnGUI() {
	GUI.Label(Rect(Screen.width/2 - 60, Screen.height/2 - 60, 60, 60), "Presiona");
	if(GUI.Button(Rect(Screen.width/2 - 60, Screen.height/ 2 - 60 + 20,60,60),"Play")){
		GeneralVars.nSalud = 5;
		Application.LoadLevel("Level");
	}
	
}