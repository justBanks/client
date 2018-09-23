import * as React from "react";
import { BallotStore } from "./BallotStore";
import EndorserStatusBar from "./EndorserStatusBar";
import EndorserTile from "./EndorserTile";

interface IProps {
  ballotStore: BallotStore;
}

class EndorserGrid extends React.Component<IProps> {
  public render() {
    const { ballotStore } = this.props;
    return (
      <div>
        <EndorserStatusBar ballotStore={ballotStore} />
        <div className="endorsersBG">
          <div className="endorsers">
            {ballotStore.endorsers.map(e => {
              return (
                <div key={e.endorserId}>
                  <EndorserTile endorserStore={e} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default EndorserGrid;
