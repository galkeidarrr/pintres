import React from "react";

class PhotoCard extends React.Component {
  render() {
    const { descriptioin, urls } = this.props.photo;
    return (
      <div>
        <img alt={descriptioin} src={urls.regular} />
      </div>
    );
  }
}
