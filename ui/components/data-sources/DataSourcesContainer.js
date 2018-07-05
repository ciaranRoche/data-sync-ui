import React, { Component } from "react";

import { CommonToolbar } from "../common";
import { DataSourceDialog } from "./DataSourceDialog";
import { DataSourcesList } from "./DataSourcesList";

class DataSourcesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalText: null
        };
    }

    getToolbarButtons() {
        return [
            { title: "Add new Data Source", cb: () => this.addDataSource(), id: "add_new_data_source" }
        ];
    }

    addDataSource() {
        this.setState({
            showModal: true,
            modalText: "Create new Data Source"
        });
    }

    closeDialog() {
        this.setState({ showModal: false });
    }

    render() {
        const { showModal, modalText } = this.state;
        return (
            <div>
                <DataSourceDialog
                    onClose={() => this.closeDialog()}
                    visible={showModal}
                    text={modalText}
                />
                <CommonToolbar buttons={this.getToolbarButtons()} />
                <div>
                    <DataSourcesList />
                </div>
            </div>
        );
    }

}

export { DataSourcesContainer };
