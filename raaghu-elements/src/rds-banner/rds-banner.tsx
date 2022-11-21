import React, { Fragment } from "react";
import "./rds-banner.scss";
import RdsIcon from "../rds-icon";

export interface RdsBannerProps {
    alignCenter?: boolean,
    bannerText?: string,
    sticky?: boolean,
    position?: "top" | "bottom",
    colorVariant?:
    "primary" |
    "secondary" |
    "success" |
    "danger" |
    "warning" |
    "info" |
    "light" |
    "dark",
    icon?: string,
    closeButton?: boolean
}

const RdsBanner = (props: RdsBannerProps) => {

    const bannerColor = "alert alert-" + (props.colorVariant || 'primary');
    const classesCss: string =
        "RdsBanner d-flex justify-content-between "
        + bannerColor
        + " rounded-0 "
        + (props.sticky ?
            (props.position === 'top' ? ' fixed-top' : ' fixed-bottom bottom-0')
            : (props.position === 'top' ? ' sticky-top' : ' sticky-bottom')
        );

    return (
        <Fragment>
            <div className={classesCss} role="alert">
                <div className={props.alignCenter ? 'text-center d-flex align-items-center' : 'd-flex align-items-center'}>
                    {props.icon && <span style={{ marginRight: "12px" }}>
                        <RdsIcon name={props.icon ? props.icon : ''}
                            stroke={true}
                            colorVariant={props.colorVariant}
                            height="1em"
                            width="1em"
                        />
                    </span>}
                    <span>{props.bannerText}</span>
                </div>
                {props.closeButton && <div className="close-button-box d-flex justify-content-center align-items-center" >
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
            </div>
        </Fragment>
    );
};

export default RdsBanner;
