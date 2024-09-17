declare module 'cardUI' {
    const Card:{
        compteur:number
        create<E>(element:E, callback:(params:any) => E):void
        increment:void
        decrement:void
    }

    export default Card
}