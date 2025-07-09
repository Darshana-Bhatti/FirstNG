import { Component } from '@angular/core';

@Component({
  selector: 'app-word-counter',
  templateUrl: './word-counter.component.html',
  styleUrls: ['./word-counter.component.css']
})
export class WordCounterComponent {
textInput: string = '';

getWordCount(): number {
  return this.textInput.trim() ? this.textInput.trim().split(/\s+/).length : 0;
}

getCharCount(): number {
  return this.textInput.length;
}

getCharCountWithoutSpace(): number {
  return this.textInput.replace(/\s/g, '').length;
}

getSentenceCount(): number {
  return this.textInput.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
}  
}
