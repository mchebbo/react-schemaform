import * as React from "react";
import { UpFormControl } from "../UpForm/UpFormControl";
import { UpRadio } from "@up-group-ui/react-controls";

export default class RadioField extends UpFormControl<number> {
    state = {
        value: null
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    setOptionsValues = () => {
        const { enumDescriptions, enum: enumValues } = this.props.schema;
        return enumDescriptions.map((currentElement, index) => ({ text: currentElement, value: enumValues[index].toString() }));
    }

    renderField() {
        const { value } = this.state;
        const { name } = this.props;
        const { default: defaultValue } = this.props.schema;

        return (
            <UpRadio
                flexWrap
                gutter={10}
                alignMode="horizontal"
                name={name}
                options={this.setOptionsValues()}
            />
        )
    }
};