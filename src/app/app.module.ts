import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AsideMenuComponent} from './aside-menu/aside-menu.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import { OverlayComponent } from './shared/overlay/overlay.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideMenuComponent,
    HighlightDirective,
    HomeComponent,
    OverlayComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
