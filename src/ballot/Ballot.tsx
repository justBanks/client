import * as React from "react";

import Footer from '../Footer';
import Header from "../Header";
import { ballotStore, BallotStore } from "./BallotStore";
import { ICandidate } from "./Candidate";
import DistrictHeader from "./DistrictHeader";
import EndOfBallotInput from "./EndOfBallotInput";
import EndorserGrid from "./Endorsers/EndorserGrid";
import { EndorserStore } from "./Endorsers/EndorserStore";
import Measure from "./Measure";
import { MeasureStore } from "./MeasureStore";
import Race from "./Race";
import Sponsors from "./Sponsors";
import Step1Header from "./Step1Header";
import Step2Header from "./Step2Header";

import { GetDistricts, GetEndorsers, GetMeasures } from '../services/Services';

interface IBallotState {
  ballotStore: BallotStore,
  districts: any[]
}

class Ballot extends React.Component<{}, IBallotState> {
  constructor(props: any) {
    super(props);
    this.state = {
      ballotStore: new BallotStore(),
      districts: []
    };
  }

  public componentDidMount() {
    this.getBallotData();
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public handleScroll = (event: UIEvent) => {
    const top = window.scrollY;
    const height =
      document.body.getBoundingClientRect().height - window.innerHeight;
    const percentComplete = Number(((top / height) * 100).toFixed(1));
    ballotStore.setPercentComplete(percentComplete);
  };

  public render() {
    return (
      <div>
        <Header />
        <Step1Header />
        <EndorserGrid ballotStore={this.state.ballotStore} />

        <Step2Header />

        {this.state.districts.map(district => {
          return (
            <React.Fragment key={district.id}>
              <DistrictHeader key={district.id} districtName={district.name} />
              {district.races.map((race: { id: string; name: string; candidates: ICandidate[]; }) => {
                return (
                  <Race key={race.id} id={race.id} name={race.name} candidates={race.candidates} />
                )
              })}
            </React.Fragment>
          )
        })}

        <div className="main">
          <DistrictHeader districtName="Measures" />
          {this.state.ballotStore.measures.map(measure => {
            return (
              <div key={measure.id}>
                <Measure measure={measure} />
              </div>
            );
          })}
        </div>
        <EndOfBallotInput />

        <Sponsors
          sponsors={[
            {
              altText: "Seattle Seahawks",
              imgSrc: "https://readysetvote.org/img/sponsor_seahawks.gif"
            }
          ]}
        />
        <Footer />
      </div>
    );
  }

  private getBallotData()
  {
    const districtPromise = GetDistricts();
    const endorserPromise = GetEndorsers();
    const measurePromise = GetMeasures();

    Promise.all([districtPromise, endorserPromise, measurePromise])
      .then(([districtData, endorserData, measureData]) => {
        endorserData.endorsers.forEach((value) => {
          const endorser = new EndorserStore(value.description, value.endorserId, value.endorserImg, value.endorserUrl, value.endorserUrlText);
          ballotStore.addEndorser(endorser);
        });
        
        measureData.measures.forEach((measure) => {
          const demoMeasure = new MeasureStore();
          demoMeasure.name = measure.name;
          demoMeasure.title = measure.title;
          demoMeasure.description = measure.description;
          demoMeasure.choices = measure.choices;
          ballotStore.addMeasure(demoMeasure)
        });

        this.setState({
          ballotStore,
          districts: districtData.districts 
        });
      });
  }
}

export default Ballot;
