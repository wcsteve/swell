import React from 'react';
import WeekStatItem from './week_stat_item';
import { Treemap } from 'react-vis';

class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const mappedData = this.props.data.map((item) => {
    //   const singleData = {"title": '', 'size': item.route.distance, color: "#D8E4D5"};
    //   return singleData;
    // })
    //
    // const myData = {
    //   "title": "",
    //   'color': '#FFFFFF',
    //   'children': mappedData,
    // }
    // console.log(this.props.data)

    const myData = {
      title: 'analytics',
      color: '#12939A',
      children: [
        {
          title: 'cluster',
          children: [
            { title: 'AgglomerativeCluster', color: '#12939A', size: 3938 },
            { title: 'CommunityStructure', color: '#12939A', size: 3812 },
            { title: 'HierarchicalCluster', color: '#12939A', size: 6714 },
            { title: 'MergeEdge', color: '#12939A', size: 743 }
          ]
        },
        {
          title: 'graph',
          children: [
            { title: 'BetweennessCentrality', color: '#12939A', size: 3534 },
            { title: 'LinkDistance', color: '#12939A', size: 5731 },
            { title: 'MaxFlowMinCut', color: '#12939A', size: 7840 },
            { title: 'ShortestPaths', color: '#12939A', size: 5914 },
            { title: 'SpanningTree', color: '#12939A', size: 3416 }
          ]
        },
        {
          title: 'optimization',
          children: [
            { title: 'AspectRatioBanker', color: '#12939A', size: 7074 }
          ]
        }
      ]
    };

    return (
      <li>
        <Treemap
          title={'My New Treemap'}
          width={300}
          height={300}
          data={myData}
          mode={'circlePack'}
        />
      </li>
    );
  }
}

export default BubbleChart;
