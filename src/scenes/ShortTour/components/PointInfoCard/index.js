import React from 'react';

import { Card, CardText } from 'material-ui/Card';
import PointInfoList from './components/PointInfoList';

const PointInfoCard = ({ info }) => {
  return (
    <Card>
      <CardText>
        <PointInfoList info={info} />
      </CardText>
    </Card>
  );
};

export default PointInfoCard;