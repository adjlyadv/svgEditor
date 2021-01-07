import { action, computed, makeAutoObservable, observable } from 'mobx';

export interface Node {
  posX: number,
  posY: number,
  ctrPosX: number,
  ctrPosY: number
}

export interface Path {
  id: number,
  nodes: Node[]
}

class UIstore {
  @observable editorInfo = {
    width: 800,
    height: 600,
    left: 0,
    top: 0
  }
  @observable pathList: Path[] = [];

  constructor() {
    makeAutoObservable(this);
    this.pathList.push(
      {
        id: 1,
        nodes: [
          {
            posX: 157.5,
            posY: 105.5,
            ctrPosX: 180,
            ctrPosY: 95,
          },
          {
            posX: 227,
            posY: 74,
            ctrPosX: 148.8,
            ctrPosY: 76.5,
          },
        ]
      }
    )

  }
  

  @action setEditorInfo = (width: number, height: number) => {
    
  }

  @action setNodes = (pathId: number, nodeId: number, node: Node) => {
    this.pathList[pathId].nodes[nodeId] = node;
  }
  
}

export const UIStore = new UIstore();