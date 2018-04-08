

import React from 'react';
import { Link } from 'react-router-dom';
import RouteMap from './route_map';
import { FormControl } from './map_controls'

class CreateRouteFormComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user_id: 1,
      title: '',
      description: '',
      distance_unit: 'miles'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRoute({
      user_id: this.state.user_id,
      title: this.state.title,
      description: this.state.description,
      distance_unit: this.state.distance_unit,
      polyline: this.props.routePath.polyline,
      path: JSON.stringify(this.props.routePath.path),
      duration: this.props.routePath.duration,
      distance: this.props.routePath.distance,
      elevation_gain: this.props.routePath.elevation
    }).then(() => this.props.history.push("/routes"));
  }

  render(){

    const save = FormControl(this.handleSubmit, "save");
    const cancel = FormControl(() => this.props.closeForm(null));

    return(
      <React.Fragment>
          <div className="map-form-container" onClick={e => e.stopPropagation()}>
              <header>
                <div onClick={() => this.props.closeForm(null)} className="close-x">x</div>
                <h1>Save</h1>
              </header>
              <form onSubmit={this.handleSubmit} className="map-form">
                <p>
                  Enter a name and description for your route below.
                  On the next page, you'll be able to see, edit, and
                  share your route.
                </p>
                <section className="map-form-label-section">
                  <label className="route-modal-labels">
                    Route Name (required)
                  </label>
                  <input
                    type="text"
                    id="route-modal-title"
                    onChange={this.handleInput('title')}
                    />
                </section>

                <section className="map-form-text-area">
                  <label className="route-modal-labels">Description</label>
                  <textarea
                    id="route-modal-description"
                    onChange={this.handleInput('description')}
                    />
                </section>

                <label className="private-checkbox">
                  <input type="checkbox"/>
                     Private
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </label>

                <nav className="form-button-bar">

                  <button
                    className="form-cancel"
                    onClick={() => this.props.closeForm(null)}>Cancel</button>

                  <input type="submit" value="Save" className="form-save"/>

                </nav>

              </form>
        </div>
      </React.Fragment>
    )
  }
}



export default CreateRouteFormComponent;
