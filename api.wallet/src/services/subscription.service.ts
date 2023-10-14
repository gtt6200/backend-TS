import { Subscription } from "./repositories/domain/subscription";
import { SubcriptionRepository } from "./repositories/subscription.repository";

export class subscriptionService {
    constructor(
        private readonly _subscriptionRespository: SubcriptionRepository
    ) { }

    public async findById(id: number): Promise<Subscription | null> {
        return await this._subscriptionRespository.findById(id);
    }
    public async all(): Promise<Subscription[]> {
        return await this._subscriptionRespository.all();
    }
    public async store(): Promise<void> {

    }

    public async update(): Promise<void> {

    }

    public async remove(id: number): Promise<void> {
        return await this._subscriptionRespository.remove(id);
    }
}