import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WindowLognonDialogComponent } from './profile/profile.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(RepoSwitchComponent);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WindowLognonDialogComponent, {
      width: '450px',
      height: '560px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
// -------------------src\app\topbar\workflowNav
@Component({
  selector: 'app-navigator',
  templateUrl: './workflowNav/workflowNavigationTool.html',
  styleUrls: ['./workflowNav/navigator.component.css']
})
export class workflowNavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
isactive=true;
}

// -------------------src\app\topbar\repositoryNav
@Component({
  selector: 'app-repoNav',
  templateUrl: './repositoryNav/repoNavigationTool.html',
  styleUrls: ['./repositoryNav/repoNav.component.css']
})
export class RepoSwitchComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<RepoSwitchComponent>) {}

  ngOnInit() {
  }
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

// -------------------