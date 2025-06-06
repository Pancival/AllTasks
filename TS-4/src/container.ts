export interface Container<T>{
    value: T;
}

export function getValue<T>(container: Container<T>): T{
    return container.value;
}