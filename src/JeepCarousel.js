import React, { Component } from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption} from 'reactstrap';
import './App.css'
const items = [
        {
            src: 'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/hero/JEEP_2017_Cherokee_BHP_Winter_Hero_Slider_Update_2.jpg.image.1440.jpg',
            altText:'' ,
            caption:''
        },
        {
            src: 'https://www.jeep.com//content/dam/fca-brands/na/jeep/en_us/bhp/hero/JEEP_2017_Renegade_BHP_Winter_Hero_Slider_Update_2.jpg.image.1440.jpg',
            altText:'' ,
            caption:''
        },
        {
            src: 'https://www.jeep.com/content/dam/fca-brands/na/jeep/en_us/bhp/hero/JEEP-2017-Wrangler-BHP-Winter-Hero-Slider-Update.jpg.image.1440.jpg',
            altText:'' ,
            caption:''
        }
    ];



class JeepCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }


    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}

                >
                    <img className='ResponsiveImg' src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel className='Carousel'
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}


export default JeepCarousel;