import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            description: '',
            hashtags: '',
            uploadSucceeded: false
        }
    }

    onFileChange = (event) => {
        this.setState({ file: event.target.files[0] })
    }

    onDescriptionChange = (event) => {
        this.setState({ description: event.target.value })
    }

    onHashtagsChange = (event) => {
        this.setState({
            hashtags: event.target.value
        })
    }

    addNewImage = () => {
        const formData = new FormData();
        formData.append('file', this.state.file, this.state.file.name);
        formData.append('description', this.state.description);
        formData.append('hashtags', this.state.hashtags);
        fetch('http://localhost:5001/pictures', {
            method: "POST",
            body: formData
        }).then(() => {
            this.setState({ uploadSucceeded: true })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        if (this.state.uploadSucceeded === true) {
            return <Redirect to='/' />;
        }
        return (
            <div className="mw5 mw7-ns center pa3 ph5-ns shadow-3">
                <div className="measure">
                    <label for="name" className="f6 b db mb2">Image</label>
                    <input
                        id="picFile"
                        className="input-reset b--black-20 pa2 mb2 db w-100"
                        type="file"
                        aria-describedby="name-desc"
                        name="picFile"
                        onChange={(e) => this.onFileChange(e)} />
                </div>
                <div>
                    <label for="description" className="f6 b db mb2">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                        aria-describedby="comment-desc"
                        onChange={(e) => this.onDescriptionChange(e)}></textarea>
                </div>
                <div>
                    <label for="hashtags" className="f6 b db mb2">Hashtags</label>
                    <textarea
                        id="hashtags"
                        name="hashtags"
                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                        aria-describedby="comment-desc"
                        onChange={(e) => this.onHashtagsChange(e)}></textarea>
                </div>
                <button
                    className="f6 link dim br3 ba bw2 ph3 pv2 mb2 db hot-pink "
                    onClick={this.addNewImage}>Add Image</button>
            </div>
        );
    }
}

export default Uploader;
