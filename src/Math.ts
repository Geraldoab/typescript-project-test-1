export interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number){}
    public getArea () : number {
        return this.width * this.height
    };
}

class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width)
    }

    public override toString(): string {
        return `Square[width=${this.width}]`
    }
}

export { Square, Rectangle };