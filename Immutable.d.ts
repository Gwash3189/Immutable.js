interface IImmuatable {
    Freeze: () => IImmuatable;
    Copy: <T>(obj: any) => T;
}
declare class Immutable implements IImmuatable {
    public Freeze(): any;
    private copy(obj);
    public Copy<T>(): T;
}
