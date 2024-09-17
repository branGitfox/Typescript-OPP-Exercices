declare module 'alpinejs'{
    const Alpine:{
        start():void
        data<T>(componentName:string, callback:(params:any) => T ): void
        
        
    }

    export default Alpine

}