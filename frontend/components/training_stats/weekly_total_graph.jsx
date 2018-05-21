import React from "react";

// export const WeeklyTotalGraph = () => (
//     <div className="annual-total-widget">
//       <h2>Graph Here!</h2>
//     </div>
// )

class AnnualStatsTotal extends React.Component {
  constructor(props){
    super(props);
    this.onItemClick = this.onItemClick.bind(this);
    this.state = {
      selectedItem: 0
    }
  }

  onItemClick(event) {
    let dataset = event.currentTarget.dataset.id
    let id = dataset.split('-')[0]
    this.props.setMetric(dataset.split('-')[1]);
    this.setState({ selectedItem: id });
    //where 'id' =  whatever suffix you give the data-* li attribute
  }

 render() {

   const {distanceTotal, durationMinTotal, elevationGainTotal, activities} = this.props;

   return (
      <div className="annual-total-widget">
        <ul className="annual-stats-list">
          <li
            onClick={this.onItemClick}
            data-id="1-time"
            className={this.state.selectedItem == 1 ? "annual-stat-item-on" : "annual-stat-item-off"}
            >
            <span className="annual-stat-num">
              {(durationMinTotal).toFixed()}
            </span>
            <div>
              Hours
            </div>
          </li>

          <li
            onClick={this.onItemClick}
            data-id="2-distance"
            className={this.state.selectedItem == 2 ? "annual-stat-item-on" : "annual-stat-item-off"}
            >
            <span className="annual-stat-num">
              {(distanceTotal).toFixed(1)}
            </span>
            <div>
              Miles
            </div>
          </li>

          <li
            onClick={this.onItemClick}
            data-id="3-elevationGain"
            className={this.state.selectedItem == 3 ? "annual-stat-item-on" : "annual-stat-item-off"}
            >
            <span className="annual-stat-num">
              {elevationGainTotal}
            </span>
            <div>
              Ft. Climbed
            </div>
          </li>

          <li
            onClick={this.onItemClick}
            data-id="4-activities"
            className={this.state.selectedItem == 4 ? "annual-stat-item-on" : "annual-stat-item-off"}
            >
            <span className="annual-stat-num">
              {activities}
            </span>
            <div>
              Activities
            </div>
          </li>

        </ul>
      </div>
    )
  }
}

export default AnnualStatsTotal;
