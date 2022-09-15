import React,{ useEffect, useState } from 'react'; 
import '../carousel/Carouselmani.css';
import { toast } from 'react-toastify';


export default function CarouselManipulateState() {

    const [radioState, setRadioState] = useState('Pescadores1');
    const [count, setCount] = useState(0);

    const imagesOpt = [
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1019668929293074463/unknown.png', value: 'Pescadores1' },
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1019669120519774268/unknown.png', value: 'Pescadores2' },
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1019670065706192916/unknown.png', value: 'Pescadores3' },
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1019674354704994304/unknown.png', value: 'Pescadores4' },        
        { src: 'https://cdn.discordapp.com/attachments/1001812118422695987/1019670469563142214/unknown.png', value: 'Pescadores5' },        

   
    ];



    
    const onRadioChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setRadioState(e.currentTarget.value);
    };

    useEffect(() => {
    
        const timeout= setTimeout(() => {
            if (count >= imagesOpt.length) {
                setCount(0);
            }
            setRadioState(imagesOpt[count].value);
            setCount(count + 1);
        }, 3000);
        return () => clearTimeout(timeout);
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
                            '' }
                        </>
                    );
                })}
            
            </section>
        </>
    );
}