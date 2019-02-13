import React from 'react';
import { Tabs, Button, Spin} from 'antd';
import { GEO_OPTIONS } from "../constants";

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
    state = {
        isLoadingGeoLocation: false,
        error: '',
    }

    componentDidMount() {
        if('geolocation' in navigator) {
            this.setState({
                isLoadingGeoLocation: true,
                error: '',
            });
            navigator.geolocation.getCurrentPosition(this.onSuccessLoadGeoLocation, this.onFailedLoadGeoLocation,
                GEO_OPTIONS);
        } else {
            this.setState({error: 'Geolocation is not supported.'});
        }
    }

    onSuccessLoadGeoLocation = (position) => {
        this.setState({
            isLoadingGeoLocation: false,
            error: '',
        })
        console.log('success', position);
    }

    onFailedLoadGeoLocation = (err) => {
        this.setState({
            isLoadingGeoLocation: false,
            error: 'Failed to get geolocation' + err.message
        });
    }

    getImagePosts = () => {
        const { error, isLoadingGeoLocation } = this.state;
        if(error) {
            return <div>{error}</div>;
        } else if (isLoadingGeoLocation) {
            return <Spin tip="Loading geo location..."/>;
        } else {
            return <div>Nothing to show.</div>;
        }
    }


    render() {
        const operations = <Button type="primary">Create New Post</Button>;
        return (
            <Tabs className="main-tabs" tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Image Posts" key="1">
                    {this.getImagePosts()}
                </TabPane>
                <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        );
    }

}
