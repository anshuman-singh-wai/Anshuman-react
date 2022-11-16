import React, { Fragment } from "react";
import RdsAvatar from "../rds-avatar";
import RdsIcon from "../rds-icon";
import RdsLikeDislike from "../rds-like-dislike";
import { Colors } from "../../libs/types";
import RdsRating from "../rds-rating";
import "./rds-feed.scss";

export interface RdsFeedProps {
  colorVariant?: Colors;
  itemList: any[];
  date: string;
}
const RdsFeed = (props: RdsFeedProps) => {
  //const  date = moment().format('YYYY-MM-DD')

  let txtColor = "text-" + props.colorVariant || "primary";

  return (
    <>
      {props.itemList.map((item: any, index: any) => (
        <div className="border-bottom py-4">
          <div className="d-flex">
            <div>
                <RdsAvatar profilePic={item.profilePic} withProfilePic = {true}></RdsAvatar>
              {/* <rds-avatar [withProfilePic]="true" [profilePic]="" [size]="'large'"
            [verticallyAlligned]="false"></rds-avatar> */}
            </div>
            <div className="ps-3">
              <div >
              <b>
                <label className="text-left ">{item.actor} </label>
              </b>
              {/* <RdsIcon
                name={item.feedIcon}
                height="15" //className="ms-2"
              /> */}
              <small>
                <label className="text-muted"> {item.username}</label>
              </small>
              <small>
                <span className="dot text-muted ">&#8901;</span>
                <label className="text-muted ">{props.date}</label>
              </small>

              </div>
              <div className="h-25 mt-1">
                <RdsRating rating={1} colorVariant ='primary' ></RdsRating>
                {/* <rds-rating [rating]= [colorVariant]="'primary'" [noOfReview]="123" [size]="'medium'"></rds-rating> */}
              </div>
            </div>
          </div>
          <div className="h-25 mt-1">
            <label> {item.description}</label>
          </div>
          <div className="h-25 mt-3">
            <RdsLikeDislike dislike={10} like={35} />
          </div>
        </div>
      ))}
    </>
  );
};
export default RdsFeed;