import React, { Fragment } from 'react';
import EditorContainer from './EditorContainer';
import StatusContainer from './StatusContainer';
import '../style/index.scss';
import ToolbarContainer from "./ToolbarContainer";

export default class BasicLayout extends React.Component<any,any> {

    constructor(props:any){
        super(props)
        this.state={
            currentTool:"mouse",
        }
    }

    setCurrenttool(msg:any){
        this.setState({
            currentTool:msg,
        })
    }

  render() {
    return(
      <Fragment>
        <ToolbarContainer currentTool={this.state.currentTool} set={this.setCurrenttool.bind(this)}/>
        <EditorContainer />
        <StatusContainer />
      </Fragment>
    )
  }

}
