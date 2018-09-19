import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const SelectedIndicator = props => {
  const { items } = props;

  return (
    <div className="row">
      <div className="col-push-4 col-4">
        <ListGroup>
          {items.map(item => (
            <ListGroupItem key={item.id}>{item.label}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default SelectedIndicator;
