import { Component, OnInit } from '@angular/core';
import { SignUpStepsEnum } from 'src/app/models/enums/sign-up-steps.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})

export class SignUpComponent {

  //#region Constructor

  constructor(
    public readonly formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: [{
        longitude: '',
        latitude: '',
      }, Validators.required]
    });
  }

  //#endregion

  //#region Public Properties

  public stepEnum: typeof SignUpStepsEnum = SignUpStepsEnum;

  public currentStep: SignUpStepsEnum = SignUpStepsEnum.PERSONAL_DATA;

  public formGroup!: FormGroup;

  //#endregion

  //#region Public Methods

  public setCurrentStep(): void {
    if(this.currentStep !== this.stepEnum.CONFIRM_DATA)
      this.currentStep++;
  }

  public onSubmit(): void {

  }

  //#endregion
}
