import React, { useEffect, useRef , useState} from 'react';
import { Node as typeNode,UIStore } from '../stores/UIStore';
import Path from '../elements/path';
import { getRelativePositon } from '../utils/calculate';
import * as _ from 'lodash';
import '../style/EditorContainer.scss';
interface Props{
  currentTool:string
}

const EditorContainer: React.FC<Props> = ({currentTool}) =>  {

  useEffect(() => {
    if (!edtiorRef) {
      return
    }
    const editorInfo = edtiorRef?.current?.getBoundingClientRect();
    if (editorInfo) {
      UIStore.editorInfo.top = editorInfo.top;
      UIStore.editorInfo.left = editorInfo.left;
    }
  }, [])

  const edtiorRef = useRef<SVGSVGElement>(null);
  var clickTimeChange:any;
  const pathId=useRef(-1)
  const editorInfo = UIStore.editorInfo;
  const pathList = UIStore.pathList;
  let pathid = UIStore.mouseState.pathid;
  let nodeid = UIStore.mouseState.nodeid;


  const [node, setNode] = useState<typeNode>(pathList[UIStore.mouseState.pathid].nodes[UIStore.mouseState.nodeid]);
  
  
  useEffect(() => {
    UIStore.setNodes(UIStore.mouseState.pathid, UIStore.mouseState.nodeid, node);
  }, [node])

  const handleMouseDown = (event: any) => {
    event.stopPropagation();
    pathid = UIStore.mouseState.pathid;
    nodeid = UIStore.mouseState.nodeid;
    let node1 = UIStore.pathList[pathid].nodes[nodeid];
    setNode({
      posX: node1.posX,
      posY: node1.posY,
      ctrPosX: node1.ctrPosX,
      ctrPosY: node1.ctrPosY
    });
  }

  const handleMouseMove = _.debounce((event: any) => {
    event.stopPropagation();
    if(!UIStore.mouseState.drugging){
      return
    }
    const { x, y } = getRelativePositon(event);
    //锚点
    if(UIStore.mouseState.type){
    setNode({
      posX: x,
      posY: y,
      ctrPosX: node.ctrPosX,
      ctrPosY: node.ctrPosY
    });
  }
  //控制点
  else{
    setNode({
      posX: node.posX,
      posY: node.posY,
      ctrPosX: x,
      ctrPosY: y
    })
  }

}, 5, { 'trailing': true })
  
  const handleMouseUp = (event: any) => {
    event.stopPropagation();
    UIStore.setMouseState(false,false,pathid,nodeid);
  }
  const editing=useRef(true)
  const pathClick:any=(e:any)=>{
    clearTimeout(clickTimeChange);
    clickTimeChange = setTimeout(
        () => {
          if(editing.current==false){
            editing.current=true
          }
          else{
            if(currentTool=="pen"&&pathId.current==-1){
              pathId.current=UIStore.addPath();
            }
            console.log(pathId.current)
            console.log(UIStore.pathList)
            UIStore.addNodes(pathId.current,e.pageX-150,e.pageY-128)
          }

        },
        300
    );

  }
  const pathDoubleClick:any=()=>{
    clearTimeout(clickTimeChange);
    console.log("双击")
    editing.current=false
    pathId.current=-1
  }

  return(
    <div className="editor-container">
      <svg ref={edtiorRef} className="editor-svg" width={editorInfo.width} height={editorInfo.height}
           onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}
           onDoubleClick={pathDoubleClick} onClick={pathClick}>
        {pathList.map(path => (
          <Path path={path}/>
        ))}
      </svg>
    </div>
  )
}

export default EditorContainer;