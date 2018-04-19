import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatProgressBarModule, MatRadioModule, MatCardModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCardModule,
    MatListModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
