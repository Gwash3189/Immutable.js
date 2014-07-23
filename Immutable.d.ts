interface IImmuatable {
    Freeze: () => IImmuatable;
    Copy: <T>(obj: any) => T;
}
declare class Immutable implements IImmuatable {
    public Freeze(): any;
    public Copy<T>(obj?: IImmuatable): T;
}
