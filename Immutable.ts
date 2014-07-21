interface IImmuatable {
	Freeze: () => IImmuatable;
	Copy: <T>(obj: any) => T;
}

class Immutable implements IImmuatable{

	public Freeze () {
		return Object.freeze(this);
	}

	private copy(obj : IImmuatable) {
		var objectString = "object";
		var copy;
		var toCopy = obj || toCopy;
		if(toCopy instanceof Array){
			copy = [];
		} else {
			copy = {};
		}
		var keys = Object.keys(toCopy);
		for(var i = 0; i < keys.length; i++){
			if(typeof toCopy[keys[i]] !== objectString){
				copy[keys[i]] = toCopy[keys[i]];
			} else {
				copy[keys[i]] = this.copy(toCopy[keys[i]]);
			}
		}
		return copy;
	}

	public Copy<T> (): T {
		return <T>this.copy(this);;
	}
}
