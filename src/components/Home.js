import React from 'react';
import { Tabs, Button} from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

export class Home extends React.Component {
    render() {
        const operations = <Button type="primary">Create New Post</Button>;
        return (
            <Tabs className="main-tabs" tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Image Posts" key="1">

                </TabPane>
                <TabPane tab="Video Posts" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        );
    }

}
