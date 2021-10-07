import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    LoginComponent,
    RegComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    SharedModule
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule
    };
  }
}
