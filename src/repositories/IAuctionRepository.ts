import { IAuctionGateway } from '../domain/gateways/IAuctionGateway';

export interface IAuctionRepository {
    add: (data: IAuctionRepository.AddParams) => Promise<IAuctionRepository.AddResult>;
    loadAll: () => Promise<IAuctionRepository.LoadAllResult>;
}

export namespace IAuctionRepository {
    export type AddParams = IAuctionGateway.AddAuctionParams;
    export type AddResult = boolean;

    export type LoadAllResult = IAuctionGateway.LoadAuctionsResult
}
