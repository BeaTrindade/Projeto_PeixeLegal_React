import React,{ useEffect, useState } from 'react'; 
import '../carousel/Carouselmani.css';
import { toast } from 'react-toastify';


export default function CarouselManipulateState() {

    const [radioState, setRadioState] = useState('Pescadores1');
    const [count, setCount] = useState(0);

    const imagesOpt = [
        { src: 'https://media.discordapp.net/attachments/1001812118422695987/1021066185019768942/p1.png?width=1260&height=380', value: 'Pescadores1' },
        { src: 'https://media.discordapp.net/attachments/1001812118422695987/1021066199456559104/p2.png?width=1260&height=380', value: 'Pescadores2' },
        { src: 'https://media.discordapp.net/attachments/1001812118422695987/1021066205584437308/p3.png?width=1260&height=380', value: 'Pescadores3' },
        { src: 'https://media.discordapp.net/attachments/1001812118422695987/1021066213117403186/p4.png?width=1260&height=380', value: 'Pescadores4' },        
        { src: 'https://media.discordapp.net/attachments/1001812118422695987/1021066225171824720/p5.png?width=1260&height=380', value: 'Pescadores5' },        

   
    ];
    
    const onRadioChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setRadioState(e.currentTarget.value);
    };

    useEffect(() => {
        setTimeout(() => {
            if (count > imagesOpt.length) {
                setCount(0);
            }
            setRadioState(imagesOpt[count].value);
            setCount(count + 1);
        }, 7000);
    }, [count]);

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
                            '' }
                        </>
                    );
                })}
            
            </section>
        </>
    );
}