import { Component, OnInit, Input } from '@angular/core';
import { MarkedjsOption} from 'ngx-markdown-editor';
import { CustomRender, UploadResult } from 'ngx-markdown-editor/lib/md-editor.types';

import { MdEditorOption } from './md-editor.types';

@Component({
  selector: 'app-issue-comments',
  templateUrl: './issue-comments.component.html',
  styleUrls: ['./issue-comments.component.css']
})

export class IssueCommentsComponent implements OnInit {
  // options: any;
  options  = {
    showPreviewPanel: false,
    showBorder: false,
    hideIcons: [],
    usingFontAwesome5: true,
    scrollPastEnd: 1,
    enablePreviewContentClick: true,
    resizable: false
  };
  
  constructor() {
    this.doUpload = this.doUpload.bind(this);  // This is very important.
  }


  doUpload(files: Array<File>): Promise<Array<UploadResult>> {
    // do upload file by yourself
    return Promise.resolve([{ name: 'xxx', url: 'xxx.png', isImg: true }]);
  }
  
  ngOnInit() {
    
  }
  
}
