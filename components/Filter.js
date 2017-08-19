import React, { Component } from 'react';

export default class Filter extends Component {
    getStyle= (currentfilter)=> {
        const color =  (currentfilter == this.props.filter) ? 'red' : 
        'black';

        return {color};
    }
    render() {
        const { onFilter } = this.props;
        return (
            <div>
                <a href="#All"
                    onClick={() => onFilter('ALL')}
                    style={this.getStyle('ALL')}
                >tous</a>
                {' | '}
                <a href="#+10"
                 onClick={() => onFilter('+10')} 
                 style={this.getStyle('+10')}
                 >au dessus de la moyenne </a>
                {' | '}
                <a href="#-10" onClick={() => onFilter('-10')}
                style={this.getStyle('-10')} 
                    > en dessous de la moyenne </a>
            </div>
        )
    }
}
