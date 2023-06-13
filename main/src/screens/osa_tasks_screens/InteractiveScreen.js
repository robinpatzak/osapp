import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import globalStyles from '../../styles/GlobalStyleSheet';
import TaskCs1 from '../../components/interactive_tasks/TaskCs1';

export default class InteractiveScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderTask = () => {
    switch (this.props.slug) {
      case 'cs1':
        return <TaskCs1 />;
        break;
      default:
        break;
    }
  };

  render() {
    return <View style={globalStyles.fullContainer}>{this.renderTask()}</View>;
  }
}
