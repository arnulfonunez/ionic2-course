export class CommonService{

    private alternativeBackgroundToggled: boolean = false;

    public getAlternativeBackgroundToggled(): boolean{
        return this.alternativeBackgroundToggled;
    }
    
    public setAlternativeBackgroundToggled(toggled: boolean): void{
        this.alternativeBackgroundToggled = toggled;
    }

}


