static var nSalud : int = 5;

function Start(){
	nSalud= PlayerPrefs.GetInt("Salud",3);
	DontDestroyOnLoad(this);
}

function Awake(){
	DontDestroyOnLoad(this);
}

function OnApplicationQuit(){
	PlayerPrefs.SetInt("Salud",nSalud);
}