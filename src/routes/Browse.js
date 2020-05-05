import React, {Component} from "react";
import Button from "../components/Button/Button";

class Browse extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <h1>Browse</h1>
                <Button>Click!</Button>
            </div>
        );
    }

}

export default Browse;