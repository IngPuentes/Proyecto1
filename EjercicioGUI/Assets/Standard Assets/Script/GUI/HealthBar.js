var health5 : Texture2D;
var health4 : Texture2D;
var health3 : Texture2D;
var health2 : Texture2D;
var health1 : Texture2D;

function Update () {
	if(GeneralVars.nSalud == 5 )
		this.guiTexture.texture = health5;
	else
	if(GeneralVars.nSalud >= 4 && GeneralVars.nSalud < 5)
		this.guiTexture.texture = health4;
	else
	if(GeneralVars.nSalud >= 3 && GeneralVars.nSalud < 4)
		this.guiTexture.texture = health3;
	else
	if(GeneralVars.nSalud >= 2 && GeneralVars.nSalud < 3)
		this.guiTexture.texture = health2;
	else
	if(GeneralVars.nSalud >= 1 && GeneralVars.nSalud < 2)
		this.guiTexture.texture = health1;
	
}