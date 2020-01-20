import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.daikin.com.au/sites/default/files/Humidification%20Blog.png   ',
    altText: 'Slide 1',
    caption: 'Enjoy the perfect temperature for your home.',
    width: '100%',
    height: '500vh'
  },
  {
    src: 'https://www.climatastic.com/wp-content/uploads/2018/10/air-con-unit.jpg',
    altText: 'Stock image 2',
    caption: 'ahah i love this cold!',
    width: '100%',
    height: '500vh'
  },
  {
    src: 'https://www.hhaircon.com.au/wp-content/uploads/2014/11/shutterstock_156704747.jpg',
    altText: 'Yes',
    caption: 'Keepin it cool since 2014',
    width: "100%",
    height: '500vh'
  }
];

export const RefconCarousell = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width={item.width} height={item.height}  />
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default RefconCarousell;