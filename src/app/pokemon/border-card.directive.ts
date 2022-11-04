import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  private initialColor:string='#f5f5f5';
  private defaultColor:string='#009688';
  private defaultHeight:number=180;

  constructor(private el:ElementRef) {
   this.setBorder(this.initialColor);
   this.setHeight(this.defaultHeight);
}
@Input('pkmBorderCard') borderColor:string;
@HostListener('mouseenter') onMouseEnter(){//permet de détecter un événement ici c'est mouseenter l'événement quand la souris est a l'intérieur
  this.setBorder( this.borderColor || this.defaultColor); 
}
@HostListener('mouseleave') onMouseLeave(){//permet de detecter quand la spuris est a l'extérieur
  this.setBorder(this.initialColor);
  
}
   private setHeight(height: number){
    this.el.nativeElement.style.height=this.defaultHeight + 'px';

   }
  private setBorder(color: string){
    let border='solid 4px'+color;
    this.el.nativeElement.style.border=border;
   }

}
