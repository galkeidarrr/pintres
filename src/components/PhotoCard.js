import React from "react";

class PhotoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.photoRef = React.createRef();
  }

  componentDidMount() {
    //the photo doesnt loaded yet
    this.photoRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.photoRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { descriptioin, urls } = this.props.photo;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.photoRef} alt={descriptioin} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard;
