import React from "react";
import { CardHeader, CardContent } from "@material-ui/core";
import BaseCard from "@/modules/shared/BaseCard";
import gql from "graphql-tag";
import { Location } from "@/generated/graphql";
import LabeledTextList from "../shared/LabeledTextList";
import { UNKNOWN } from "../shared/SharedUtils";

interface LocationCardProps {
  location: Location;
}

function LocationCard({ location }: LocationCardProps) {
  return (
    <BaseCard>
      <CardHeader title={location.name} />
      <CardContent>
        <LabeledTextList
          data={[
            { label: "Type", text: location.type ?? UNKNOWN },
            { label: "Dimension", text: location.dimension ?? UNKNOWN },
          ]}
        />
      </CardContent>
    </BaseCard>
  );
}

LocationCard.fragments = {
  location: gql`
    fragment LocationCard_location on Location {
      id
      name
      type
      dimension
    }
  `,
};

export default LocationCard;
