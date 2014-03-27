
function OnTriggerEnter (other : Collider) {
	if(other.name == "First Person Controller"){
		GeneralVars.nSalud--;
		Debug.Log(GeneralVars.nSalud);
	}
}
