// Basic Generics
export function createPair<S, T>(v1: S, v2: T) : [S, T] {
    return [v1, v2]
}