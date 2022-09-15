import React, { useEffect, useState } from 'react';
import '../carouselcard/CarouselCard.css'

export default function CarouselCard() {

    const [radioState, setRadioState] = useState('Pescadores8');
    const [count, setCount] = useState(0);

    const imagesOpt = [
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1018995167895756800/linkedin.png', value: 'Pescadores8' },
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1018995168172572773/github.png', value: 'Pescadores9' },
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1018995167895756800/linkedin.png', value: 'Pescadores10' },
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1018995168172572773/github.png', value: 'Pescadores11' },               

    ];

    const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioState(e.currentTarget.value);
    };

    useEffect(() => {
        setTimeout(() => {
            if (count >= imagesOpt.length) {
                setCount(0);
            }
            setRadioState(imagesOpt[count].value);
            setCount(count + 1);
        }, 7000);
    }, [count, imagesOpt]);

    return (
        <>
            <section className='slider'>
                <label htmlFor={radioState}>
                    {imagesOpt.map(({ value: text }: any) => {
                        return (
                            <>
                                <input type="radio" name="slide" value={text} checked={text === radioState} onChange={(e) => onRadioChange(e)} />
                            </>
                        );
                    })}
                </label>

                {imagesOpt.map(({ src: url, value: text }: any) => {
                    return (
                        <>
                            {
                                radioState === text
                                    ?
                                    <img className="slider-img" src={url} alt={text} />
                                    :
                                    ''}
                        </>
                    );
                })}

            </section>
        </>
    );
}