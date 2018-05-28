import React from 'react';

import PointInfoItem from './components/PointInfoItem';

const PointInfoList = ({ route, info }) => {
  return (
    <div>
      {info.map( (item, index) => {
        return (
          <PointInfoItem
            key={index}
            type={item.type}
            title={item.title}
            text={item.text}
            nestedText={item.nestedText} />
        )
      })}
    </div>
  )
}

export default PointInfoList;

