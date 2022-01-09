import React, { useState } from "react";
import "./JobCard.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

interface Props {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
}

const JobCard: React.FC<Props> = ({
  id,
  title,
  location,
  description,
  date,
}) => {
  const [save, setSave] = useState(false);
  return (
    <div className="jobCard">
      <div className="jobCard__title">
        <h1>{title}</h1>
        <p>Featured</p>
      </div>
      <p className="jobCard__location">{location}</p>
      <p className="jobCard__location">$25.20 per hour + super + bonus</p>
      <p className="jobCard__location">Retail & Consumer Products</p>
      <p className="jobCard__description">{description}</p>
      <div className="jobCard__footer">
        <div onClick={() => setSave(!save)}>
          {save ? (
            <>
              <StarIcon className="liked_icon" />
              <span className="liked_icon">Saved</span>
            </>
          ) : (
            <>
              <StarBorderIcon />
              <span>Save</span>
            </>
          )}
        </div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default JobCard;
