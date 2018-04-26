import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatRadioModule,
         MatCardModule, MatListModule, MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
