import React, { Component } from 'react';

class LoremSection extends Component {
    render() {
        return(
            <section>
                <h1>{this.props.title}</h1>
                {this.props.article}
            </section>
        );
    }
}

export default LoremSection;