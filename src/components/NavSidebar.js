import React, { Component } from 'react';
import { Collapse, Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import './NavSidebar.css';
import logo from '../img/Zonex_Logo.png';

// We restrict the max height of the system list based on the max height of the app
// panel - the extra non system list space we want to reserve.
const SYSTEM_LIST_BUFFER_SPACE = 200;

class NavSideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSystemList: false,
    };
  }

  render() {
    return (
      <div className="nav-sidebar">
        <img className="nav-sidebar-logo" src={logo}
          alt="Zonex Systems Logo"/>
        <ul className="nav-list">
          <li onClick={this.toggleSystemMenu} className="nav-list-item nav-text">
            <div className="nav-icon-left">
              <Glyphicon glyph="list"/>
            </div>
            System
            <div className="nav-icon-right">
              <Glyphicon glyph={this.state.showSystemList ? "chevron-up" : "chevron-down"}/>
            </div>
          </li>
          <Collapse in={this.state.showSystemList}
                    onExit={this.disableScrollbarForCollapse}
                    onEnter={this.disableScrollbarForCollapse}
                    onExited={this.enableScrollBarAfterCollapse}
                    onEntered={this.enableScrollBarAfterCollapse}>
            <ul ref="systemList" className="system-list" style={{
              maxHeight: (this.props.maxHeight - SYSTEM_LIST_BUFFER_SPACE) + 'px'}
            }>
              <li className="system-list-item nav-text">
                <a onClick={this.handleNavigation} href="/0">
                  GenX
                </a>
              </li>
              {this.renderGenxDropdownMenuItems()}
            </ul>
          </Collapse>
        </ul>
      </div>
    );
  }

  renderGenxDropdownMenuItems() {
    let menuItems = [];
    for (let i=0; i < this.getRmCount(); i++) {
      menuItems.push(
        <li className="system-list-item nav-text" key={i + 1}><a onClick={this.handleNavigation} href={`/${i+1}`} key={i + 1}>
          {`RM${i+1}`}
        </a></li>
      );
    }
    return menuItems;
  }

  toggleSystemMenu = () => {
    this.setState({
      showSystemList: !this.state.showSystemList,
    });
  }

  // While the collapse animation runs, we don't want flashes of the scrollbar to happen.
  // We disable the scrollbar when the animation starts and re-enable it once it is over. 
  disableScrollbarForCollapse = () => {
    this.refs.systemList.style.overflowY = 'hidden';
  }

  enableScrollBarAfterCollapse = () => {
    this.refs.systemList.style.overflowY = 'auto'; 
  } 

  getRmCount = () => {
    // Discover data is universal, so we can always rely on the discover data in genx (system 0)
    // to be true for all systems (RMs).
    const currentDiscoverData = this.props.deviceShadow[0] && 
      this.props.deviceShadow[0].discover;
    return currentDiscoverData ? parseInt(currentDiscoverData.rmCount, 10) : 0;
  }

  handleNavigation = (event) => {
    event.preventDefault();
    this.props.history.push(event.target.pathname)
  }
}

const mapStateToProps = (state) => {
  return {
    deviceShadow: state.shadow,
  }
}

export default withRouter(connect(mapStateToProps, undefined)(NavSideBar));

