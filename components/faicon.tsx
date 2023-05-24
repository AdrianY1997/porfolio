import { IconDefinition, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component, ReactNode } from "react";

interface IState {
    icon: IconDefinition,
    className: string | null
}

interface IProps {
    icon: IconDefinition
    className: string | null
}

export class FaIcon extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            icon: props.icon,
            className: props.className ?? null
        }
    }

    render() {
        return (
            <FontAwesomeIcon icon={this.state.icon} fontSize={"15px"} className={this.state.className ?? ""} />
        );
    }
}