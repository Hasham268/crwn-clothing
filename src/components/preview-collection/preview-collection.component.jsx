import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <div className = 'collection-preview'>
        <h1 className = 'title' >{title.toUpperCase()}</h1>
        <div className = 'preview'>
            {
                items
                .filter((item, indx) => indx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key = {id} {...otherItemProps}></CollectionItem>
                ))
            }
        </div>
    </div>
);

export default PreviewCollection;