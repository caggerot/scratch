import { NgModule } from '@angular/core';
import { NoobInterceptorComponent } from './noob-interceptor.component';

// So injectors are the run-time interface to dependency injection. map of tokens to value of tokens provided.
// each injector has a token, if doesn't have will delegate to higher up hierarchy and so on
// e.g. platform injector represents singleton state. then say app injector, all apps child of platform

@NgModule({
  declarations: [NoobInterceptorComponent],
  imports: [
  ],
  exports: [NoobInterceptorComponent]
})
export class NoobInterceptorModule { }
