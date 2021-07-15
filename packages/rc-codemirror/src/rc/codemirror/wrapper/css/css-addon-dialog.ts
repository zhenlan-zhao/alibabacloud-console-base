import {
  css
} from 'styled-components';

// codemirror/addon/dialog/dialog.css
export default css`.CodeMirror-dialog {
  position: absolute;
  left: 0; right: 0;
  background: inherit;
  z-index: 15;
  padding: .1em .8em;
  overflow: hidden;
  color: inherit;
}
.CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}
.CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}
.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}
.CodeMirror-dialog button { font-size: 70%; }`;
