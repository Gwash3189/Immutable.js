interface IImmuatable {
	Freeze: () => IImmuatable;
	Copy: <T>(obj: any) => T;
}

class Immutable implements IImmuatable{
	public Freeze () {
		return Object.freeze(this);
	}

	public Copy<T> (obj?: IImmuatable): T {
		var objectString = "object";
		var copy;
		var toCopy = obj || {};
		toCopy instanceof Array ? copy = [] : copy  = {};
		var keys = Object.keys(toCopy).map((x)=> {
				if(typeof toCopy[x] !== objectString){
					copy[x] = toCopy[x];
				} else {
					copy[x] = this.Copy(toCopy[x]);
				}
			});
		return copy;
	}
}
