// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar">

              <ul className="list-group">
                <li className="list-group-header">
                  <input className="form-control" type="text" placeholder="Search for some Note" />
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media-body">
                    <strong>List item title</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pane">
              <form>
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" placeholder="Title" />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea className="form-control" rows="20" cols="10"></textarea>
                </div>
                <div class="form-actions">
                  <button type="submit" className="btn btn-form btn-default">DISCARD</button>
                  <button type="submit" className="btn btn-form btn-primary">SAVE</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
