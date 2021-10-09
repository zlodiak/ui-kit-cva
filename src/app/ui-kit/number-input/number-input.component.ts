import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    }
  ]  
})
export class NumberInputComponent implements OnInit {

  @Input() disabled: boolean = false;

  @ViewChild('input', {static: true, read: ElementRef})
  inputElementRef: ElementRef | undefined;

  onTouched = () => {};
  onChange = (_: any) => {};

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
  }

  onInputChange() {
    const value = this.inputElementRef?.nativeElement.value;
    this.onChange(value);
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(value: string) {
    this._renderer.setProperty(this.inputElementRef?.nativeElement, 'value', value);
  }
}
