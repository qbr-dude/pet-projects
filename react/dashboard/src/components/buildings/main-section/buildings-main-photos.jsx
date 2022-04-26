import { ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';

const images = [ /*meant */
    { img: 'imgs/item-prop-pic/Pic.png', title: 'template' },
    { img: 'imgs/item-prop-pic/Pic.png', title: 'template' },
    { img: 'imgs/item-prop-pic/Pic.png', title: 'template' },
    { img: 'imgs/item-prop-pic/Pic.png', title: 'template' },
    { img: 'imgs/item-prop-pic/Pic.png', title: 'template' },
    { img: 'imgs/item-prop-pic/Pic.png', title: 'template' },
];

const BuildingsMainPhotos = () => {
    return (
        <div>
            <Typography component='span' sx={{ fontSize: '12px', fontWeight: '500', color: '#9EA0A5', textTransform: 'uppercase' }}>All property photos</Typography>
            <ImageList cols={2} rowHeight={100} sx={{ overflow: 'hidden', width: 250, mt: '20px' }}>
                {images.map((item) => (
                    <ImageListItem key={item.img} sx={{ width: 120, height: 100 }}>
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default BuildingsMainPhotos;
