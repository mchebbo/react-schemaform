﻿import * as $ from "jquery";
import * as React from "react";
import { UpFormControl } from "../UpForm/UpFormControl"
import { TypeDateControl, dateFormat } from "../ControlError/TypeDateControl"
import { UpDateTime } from "@up-group/react-controls";


export default class UpDateTimeComp extends UpFormControl<Date> {

    inputElementGroup: HTMLDivElement;
    constructor(p, c) {
        super(p, c);
    }

    setInput(data) {
    }

    renderField() {
        return <UpDateTime ref={(i) => { this.InputBaseControl = i; }} value="" onChange={this.handleChangeEventGlobal} isNullable={this.isNullable} />
    }


    isEmpty(value) {
        return value === null || value === undefined || value === "";
    }

}