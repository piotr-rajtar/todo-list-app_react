import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        image: PropTypes.string,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        return  (
            <section className={styles.component}>
                    <Hero titleText={this.props.title} image={this.props.image} />
                    <div className={styles.description}>
                        {ReactHtmlParser(this.props.description)}
                    </div>
                    <div className={styles.columns}>
                        <Column title='Programming' />
                        <Column title='Netflix' />
                        <Column title='Reading' />
                    </div>
            </section>
        )
    }
}

export default List;