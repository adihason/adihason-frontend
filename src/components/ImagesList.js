import React from 'react';
import ImageCard from './ImageCard';

const imagesList = (props) => {
    return (
        <div>
            {
                props.images.map((pic, index) => {
                    return <ImageCard
                        id={pic._id}
                        key={index}
                        file={pic.file}
                        desc={pic.description}
                        hashtags={pic.hashtags.map((hashtag, index) => {
                            return ` #${hashtag}`;
                        })}
                    />
                })
            }
        </div>
    );
}

export default imagesList;