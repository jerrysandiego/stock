import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule, MatSelectModule, MatInputModule, MatTableModule,MatListModule } from '@angular/material';
import {MatDividerModule, MatTabsModule, MatExpansionModule, MatCardModule} from '@angular/material';
import {MatIconModule, MatToolbarModule, MatRadioModule, MatTabLink, MatTabNav, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import 'hammerjs';

const appRoutes: Routes = [
  //{ path: 'editor', label:'Editor', component: EditorComponent },
  { path: 'settings', component: DashboardComponent },
  { path: 'editor', component: DashboardComponent,   data: { title: 'Heroes List' } },
  { path: '',    redirectTo: '/editor',    pathMatch: 'full'  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // needed for ngModel
    HttpClientModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,

    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentLineEchartsModule,
    CovalentTooltipEchartsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
