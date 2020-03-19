import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
  }
  // openFinder(message: string, action: string) {
  //   this.snackbar.openFromComponent(GitFinderComponent, {
  //     data: 'somedata'
  //     // duration: 10000
  //   });
  // }
  openFinder(): void {
    const dialogRef = this.dialog.open(GitFinderComponent, {
      width: '400px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
// -------- snackbar
// @Component({
//   selector: 'app-gitfinder-snackbar',
//   templateUrl: './GitFinder/GitFinder.component.html',
//   styleUrls: ['./GitFinder/GitFinder.component.css']
// })
// export class GitFinderComponent{
//   constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
// }
// ----------dialog box

@Component({
  selector: 'app-gitfinder',
  templateUrl: './GitFinder/GitFinder.component.html',
  styleUrls: ['./GitFinder/GitFinder.component.css']
})
export class GitFinderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  // isactive=true;
}
