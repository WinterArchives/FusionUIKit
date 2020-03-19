import { Component, OnInit , Inject} from '@angular/core';
import {MatSnackBar, MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }
  openPrivacyControl(message: string, action: string) {
    this.snackbar.openFromComponent(CustomSnackbarComponent, {
      data: 'some data', duration: 60000
    });
  }
}

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './SnackbarConfirmWin/privacySnackbarConfirmWin.html',
  styleUrls: ['./SnackbarConfirmWin/SnackbarConfirmWin.css']
})
export class CustomSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}
