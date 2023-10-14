import { Subscription } from "./domain/subscription";

export interface SubcriptionRepository {
    all(): Promise<Subscription[]>;
    findById(id: Number): Promise<Subscription | null>;
    store(entry: Subscription): Promise<void>;
    update(entry: Subscription): Promise<void>;
    remove(id: Number): Promise<void>;

}