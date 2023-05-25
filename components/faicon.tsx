import { IconDefinition, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, ReactNode } from "react";

interface IState {
    icon: IconDefinition,
    className?: string,
    color?: string,
    fontSize?: string
}

interface IProps {
    icon: IconDefinition
    className?: string,
    color?: string,
    fontSize?: string
}

export class FaIcon extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            icon: props.icon,
            className: props.className,
            color: props.color,
            fontSize: props.fontSize
        }
    }

    render() {
        return (
            <FontAwesomeIcon icon={this.state.icon} fontSize={ this.state.fontSize ?? "16px"} className={this.state.className} color={this.state.color} />
        );
    }
}