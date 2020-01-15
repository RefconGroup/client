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
    src: 'https://www.memesmonkey.com/images/memesmonkey/23/23b170bd094892e186ada3ea8f88c6b2.jpeg',
    altText: 'Slide 1',
    caption: 'Bottom Text',
    width: '100%',
    height: '500vh'
  },
  {
    src: 'https://i.redd.it/f9pbkx4uxb541.jpg',
    altText: 'Laugh',
    caption: 'Laugh',
    width: '100%',
    height: '500vh'
  },
  {
    src: 'https://memeguy.com/photos/images/my-wife-was-feeling-cold-with-the-airconditioner-on-86240.jpg',
    altText: 'Yes',
    caption: 'OK SURE THING BRO',
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