import React from 'react';

const imageCard = (props) => {
    return (
        <article className="br2 ba dark-gray b--black ma3 w-100 w-50-m w-25-l mw5 dib grow white">
            <img src={`${props.file}`} className="db w-100 br2 br--top" alt="" />
            <div className="pa2 ph3-ns pb3-ns">
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h2 className="f5 f4-ns mv0">{props.desc}</h2>
                    </div>
                </div>
                <p className="f6 lh-copy measure mt2 washed-blue">
                    {props.hashtags}
                </p>
            </div>
        </article>
    );
}

export default imageCard;
