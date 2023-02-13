import { Directive, OnInit, OnChanges, TemplateRef, ViewContainerRef, Input} from '@angular/core';

import {isEmptyPassword, isEqualPassword, isValidPassword} from './verifyData';

@Directive({
  selector: '[appErrorPassword]'
})
export class ErrorPasswordDirective implements OnChanges {
  @Input('appErrorPassword') config: any = '';

  constructor(
    private viewContainerRef: ViewContainerRef,
    private template: TemplateRef<any>
  ) { 

  }

  private isErrorPassword() : boolean {
    const isPristinePassword : Boolean = this.config.password?.pristine?? false;
    const isPristineVPassword : boolean = this.config.vPassword?.pristine?? false;

    return (isPristinePassword && isPristineVPassword) && 
            (isEmptyPassword(this.config.password, this.config.vPassword) || 
            !isEqualPassword(this.config.password, this.config.vPassword) || 
            !isValidPassword(this.config.password));
  }

  private getErrorPassword() : String {
    if (isEmptyPassword(this.config.password, this.config.vPassword)) return 'Empty passsword';
    else if (!isValidPassword(this.config.password)) return 'invalid password';
    else if (!isEqualPassword(this.config.password, this.config.vPassword)) return 'different passwords';

    return '';
  }
  ngOnChanges(): void {
    console.log("Estoy dentro:", this.config);
    this.viewContainerRef.createEmbeddedView(this.template);
    /*
    console.log("Estoy adentro: ", this.isErrorPassword());
    if (this.isErrorPassword()){
      this.template.elementRef.nativeElement.innerHTML = this.getErrorPassword();
      this.viewContainerRef.createEmbeddedView(this.template);
    } 
    */
  }

}