//画像を保存するコンポーネント
import React, { Component } from 'react';
import { firebaseDb } from './firebase';
export default class SaveImage extends Component {
    constructor(props) {
        super(props);
        console.log(props.foo)
        this.state = {
            top: '',
            firstLeft: '',
            firstRight: '',
            secondLeft: '',
            secondMiddle: '',
            secondRight: '',
            bottomLeft: '',
            bottomMidLeft: '',
            bottomMidRight: '',
            bottomRight: '',
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        firebaseDb.ref('decos').push({
            top: this.props.top,
            firstLeft: this.props.firstLeft,
            firstRight: this.props.firstRight,
            secondLeft: this.props.secondLeft,
            secondMiddle: this.props.secondMiddle,
            secondRight: this.props.secondRight,
            bottomLeft: this.props.bottomLeft,
            bottomMidLeft: this.props.bottomMidLeft,
            bottomMidRight: this.props.bottomMidRight,
            bottomRight: this.props.bottomRight,
        });
        this.setState({ top: '', 
                        firstLeft: '', firstRight: '',  
                        secondLeft: '', secondMiddle: '', secondRight: '',
                        bottomLeft: '', bottomMidLeft: '', bottomMidRight: '', bottomRight: '' });
    }
    render() {
        return (
            <div className="container">
                {/*<div className="field">
                    <label className="label">Top</label>
                    <input
                        className="input"
                        value={images[0]}
                        onChange={e => this.setState({ top: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">FirstLeft</label>
                    <input
                        className="input"
                        value={this.state.firstLeft}
                        onChange={e => this.setState({ firstLeft: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">FirstRight</label>
                    <input
                        className="input"
                        value={this.state.firstRight}
                        onChange={e => this.setState({ firstRight: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">SecondLeft</label>
                    <input
                        className="input"
                        value={this.state.secondLeft}
                        onChange={e => this.setState({ secondLeft: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">SecondMiddle</label>
                    <input
                        className="input"
                        value={this.state.secondMiddle}
                        onChange={e => this.setState({ secondMiddle: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">SecondRight</label>
                    <input
                        className="input"
                        value={this.state.secondRight}
                        onChange={e => this.setState({ secondRight: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">BottomLeft</label>
                    <input
                        className="input"
                        value={this.state.bottomLeft}
                        onChange={e => this.setState({ bottomLeft: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">BottomMidLeft</label>
                    <input
                        className="input"
                        value={this.state.bottomMidLeft}
                        onChange={e => this.setState({ bottomMidLeft: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">bottomMidRight</label>
                    <input
                        className="input"
                        value={this.state.bottomMidRight}
                        onChange={e => this.setState({ bottomMidRight: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">BottomRight</label>
                    <input
                        className="input"
                        value={this.state.bottomRight}
                        onChange={e => this.setState({ bottomRight: e.target.value })}
                    />
                </div>
        */}
                <div className="control">
                    <button className="button is-link" onClick={this.onClick}>
                        Save
                        </button>
                </div>
            </div>
        );
    }
}