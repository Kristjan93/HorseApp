import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from './components/Pagination';
import Slide from './components/Slide';

import { FOR_1, FOR_2, FOR_3 } from '../../services/paths/images.js';

const SwipeableViewsAutoPlay = autoPlay(SwipeableViews);

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);;

    this.state = {
      index: 0,
    };
  }

  handleChangeIndex (index) {
    this.setState({
      index,
    });
  };

  render() {
    let { index } = this.state;
    return (
      <div style={{ position: 'relative' }} >
        <SwipeableViewsAutoPlay
          index={index}
          onChangeIndex={this.handleChangeIndex}
          interval={4000}
          enableMouseEvents={true}
          style={{width: '100%'}}
          slideStyle={{ height: '60vh' }}
          containerStyle={{  }}
        >
            <Slide imageUrl={FOR_3} />
            <Slide imageUrl={FOR_2} />
            <Slide imageUrl={FOR_1} />
        </SwipeableViewsAutoPlay>

        <Pagination
          dots={3}
          index={index}
          onChangeIndex={this.handleChangeIndex}
        />
      </div>
    )
  }
}

export default Carousel;