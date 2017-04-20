﻿import * as React from "react";
import { UpFormControl } from "../UpForm/UpFormControl";
import { UpSelect } from "@up-group/react-controls";

interface UpEnumExtendProp {
    _enum: Number[];
    enumDescriptions: String[];
    multiple: boolean;
}

export default class UpEnum extends UpFormControl<number> {

    constructor(p, c) {
        super(p, c);
    }

    setInput(data) {

    }

    renderField() {
        var options = [];
        for (var i = 0; i < this.schema.enum.length; i++) {
            if (this.schema.enum[i] == null) {
                options.push({ id: this.schema.enum[i], text: "null Value" });

            } else {
                options.push({ id: this.schema.enum[i], text: this.schema.enumDescriptions[i] });
            }
        }

        return <UpSelect
            //ref={(i) => { this.InputBaseControl = i; }}
            default= {this.schema.default}
            isNullable={this.isNullable}
            isRequired={this.props.isRequired}
            getFullData={false}
            minimumInputLength={0}
            placeholder="Recherche"
            multiple={this.isArray}
            allowClear={!this.props.isRequired}
            onChange={this.handleChangeEventGlobal}
            data={options}
            onError={() => { }}
            />
            //onError={this.props.onError}

    }

    private get schema() : JsonSchema {
        return this.props.schema.items || this.props.schema

    }

    private get isArray() {
        return (this.props.schema.type as TypeOfSchema[]).indexOf("array") !== -1;
    }


    isEmpty(value) {
        if (this.isArray && value != null && value.length === 0) {
            return true;
        }
        return value === null || value === undefined || value === "";
    }
    
}
