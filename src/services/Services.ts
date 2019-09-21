
import mockDistrictData from './sample-data/districts-response';
import mockEndorserData from './sample-data/endorsers-response';
import mockMeasureData from './sample-data/measures-response';

interface IDistrictData {
    districts: IDistrict[]
}

interface IDistrict {
    id: string,
    name: string,
    races: ICandidateData[]
}

interface ICandidateData {
    id: string,
    name: string,
    candidates: ICandidate[]
}

interface ICandidate {
    id: string,
    image: string,
    name: string,
    party: string,
    url: string,
    urlText: string
}

interface IEndorserData {
    endorsers: IEndorser[]
}

interface IEndorser {
    description: string,
    endorserId: string
    endorserImg: string,
    endorserUrl: string,
    endorserUrlText: string
}

interface IMeasureData {
    measures: IMeasure[]
}

interface IMeasure {
    id: string,
    name: string,
    title: string,
    description: string,
    choices: IChoice[]
}

interface IChoice {
    id: string,
    text: string,
    url: string,
    urlText: string
}

function GetDistricts(address: string = ""): Promise<IDistrictData> {
    return Promise.resolve(mockDistrictData);
}

function GetEndorsers(address: string = ""): Promise<IEndorserData> {
    return Promise.resolve(mockEndorserData);
}

function GetMeasures(address: string = ""): Promise<IMeasureData> {
    return Promise.resolve(mockMeasureData);
}

export { GetDistricts, GetEndorsers, GetMeasures }
