import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator';

const List = ({title, image, description, columns, addColumn}) => (
  <section className={styles.component}>
    <Hero titleText={title} image={image} />
    <div className={styles.description}>
      {ReactHtmlParser(description)}
    </div>
    
    <div className={styles.columns}>
      {columns.map(columnData => (
        <Column key={columnData.id} {...columnData} />
      ))} 
    </div>

    <div className={styles.creator}>
      <Creator text={settings.columnCreatorText} action={addColumn} />
    </div>
  </section>
);

List.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  columns: PropTypes.array,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;